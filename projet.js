const prompt = require("prompt-sync")()

let livres = [];
let abonnes = [];
let emprunts = [];

let ISBN = 123456789;
let idAbonne = 1;


function afficherLivres() {
  if (livres.length === 0) {
    console.log("Aucun livre n'est disponible pour le moment !");
    return;
  }
  for (let livre of livres) {
    console.log(
      `[${livre.isbn}] | ${livre.titre} - ${livre.auteur} - ${livre.anneePublication} | ` +
      (livre.disponibilite ? "disponible" : "pas disponible")
    );
  }
}


function ajouterLivres() {
  let titre = prompt("Entrer le titre du livre : ");
  let auteur = prompt("Entrer le nom de l'auteur : ");
  let anneePublication = Number(prompt("Entrer l'année de publication : "));

  livres.push({ isbn: ISBN++, titre, auteur, anneePublication, disponibilite: true });
  console.log("###### Livre ajouté avec succès ######");
}


function triTitre() {
  let choixOrdre = +prompt("Choisir l'ordre :\n1) croissant\n2) décroissant\nVotre choix : ");
  let copie = [...livres];

  if (choixOrdre === 1) {
    copie.sort((a, b) => a.titre.localeCompare(b.titre));
  } else {
    copie.sort((a, b) => b.titre.localeCompare(a.titre));
  }
  console.log("###### Tri par titre ######");
  for (let l of copie) {
    console.log(`[${l.isbn}] | ${l.titre} - ${l.auteur}`);
  }
}


function triParAnnee() {
  let copie = [...livres].sort((a, b) => a.anneePublication - b.anneePublication);
  console.log("######Tri par année croissant ######");
  for (let l of copie) {
    console.log(`[${l.isbn}] | ${l.anneePublication} - ${l.titre}`);
  }
}


function livresDisponibles() {
  let dispo = livres.filter(l => l.disponibilite === true);
  if (dispo.length === 0) {
    console.log("Aucun livre disponible.");
    return;
  }
  console.log("###### Livres disponibles ######");
  for (let l of dispo) {
    console.log(`[${l.isbn}] | ${l.titre} - ${l.auteur}`);
  }
}

function rechercheISBN() {
  let saisie = prompt("Entrer un ISBN à rechercher : ");
  let isbnRecherche = Number(saisie);
  let livre = livres.find(l => l.isbn === isbnRecherche);

  if (livre) {
    console.log("###### Livre trouvé : ######");
    console.log(
      `[${livre.isbn}] | ${livre.titre} - ${livre.auteur} (${livre.anneePublication}) | ` +
      (livre.disponibilite ? "disponible" : "pas disponible")
    );
  } else {
    console.log("###### L'ISBN entré n'est pas trouvé. ######");
  }
}


function afficherAbonne() {
  if (abonnes.length === 0) {
    console.log("Aucun abonné n'est disponible pour le moment !");
    return;
  }
  for (let abonne of abonnes) {
    console.log( `[${abonne.id}] | ${abonne.nomAbonne} - ${abonne.prenomAbonne} - ${abonne.emailAbonne} `);
  }
}

function ajouterAbonne() {
  let nomAbonne = prompt("Entrer le nom de l'abonne : ");
  let prenomAbonne = prompt("Entrer le prenom de l'abonne : ");
  let emailAbonne = prompt("Entrer l'adresse mail de l'abonne : ");

  abonnes.push({ id: idAbonne++, nomAbonne, prenomAbonne, emailAbonne});
  console.log("###### l'abonne ajouté avec succès ######");
}




function menu() {
  console.log(`
*****************************************************************
======================  MENU BIBLIOTHÈQUE  ======================
*****************************************************************
1) Ajouter un livre
2) Afficher tous les livres
3) Trier les livres par titre (asc/desc)
4) Trier les livres par année (asc)
5) Afficher uniquement les livres disponibles
6) Rechercher un livre par ISBN
7) Ajouter un abonné
8) Aficher tous les abonnes
0) Quitter
`);
}

function execution() {
  let run = true;
  while (run) {
    menu();
    let choix = prompt("Votre choix : ");

    switch (choix) {
      case "1":
        ajouterLivres();
        break;
      case "2":
        afficherLivres();
        break;
      case "3":
        triTitre();
        break;
      case "4":
        triParAnnee();
        break;
      case "5":
        livresDisponibles();
        break;
      case "6":
        rechercheISBN();
        break;
    case "7":
        ajouterAbonne();
        break;
    case "8":
        afficherAbonne();
        break;
      case "0":
        console.log("###### Au revoir ! ######");
        run = false;
        break;
      default:
        console.log("###### Choix invalide. ######");
    }
    if (run) prompt("\nAppuyez sur Entrée pour revenir au menu...");
  }
}

execution();
