const prompt = require("prompt-sync")()

let livres = [];
let abonne = [];
let empreinte = [];

let ISBN = 123456789;

function afficherLivres(){
    if (livres.length == 0){
        console.log("aucun livre n'est disponible pour le moment !");
    }
    else{
        for(livre of livres){
            console.log(`[${livre.ISBN}] , ${livre.titre} "-" ${livre.auteur} "-" ${livre.anneePublication} "|" ${livre.disponibilite} ? "disponible" : "pas disponible"}`);
        }
    }}

function ajouterLivres(){
    let titre = prompt(" entrer le titre du livre  :");
    let auteur = prompt (" entrer le nom de l'auteur : ");
    let anneePublication = prompt("entrer l'annee de publication du livre : ");
    livres.push({ISBN: ISBN++ , titre , auteur , disponibilite:true});
    console.log("###### livre ajouté avec succès ######");
}

function triTitre(livres) {
    choixOrdre = +prompt("merci de choisir l'ordre : \n***1*** pour l'ordre croissant : \n***2*** pour l'ordre decroissant : \n");
if(choixOrdre===1){
    return livres.sort((a, b) => {
    return a.titre.localeCompare(b.titre);
    });}
    else{
    return livres.sort((b, a) => {
    return b.titre.localeCompare(a.titre);
    });}
}

function triParAnnee(livres) {
  console.log(livres.sort((a, b) => a.anneePublication - b.anneePublication));
}

function livresDisponibles(livres) {
  console.log(livres.filter(livre => livre.disponibilite === true));
}

function rechercheISBN(){
    let isbnRecherche = prompt("entrer un ISBN à rechercher : ")
    let livre = livres.find(livre => livre.ISBN === isbnRecherche );

    if (livre){
        console.log(" le livre est trouvé : \n", `${livre.titre} - ${livre.auteur} (${livre.annee})`);
    }else{
        console.log("le ISBN entreé n'est pas trouvé");
    }
}


let choixAdmin = +prompt(`
*****************************************************************
======================MENU++BIBLIOTHEQUE=========================
*****************************************************************

#1. Pour ajouter un livre :-----------------------------tapez *1*
#2. Pour afficher tous les livre :----------------------tapez *2*
#3. Pour trier les livres par titre :------------------tapez *3*
#4. pour trier les livres par année de publication :----tapez *4*
#5. Pour afficher uniquement les livres disponibles :---tapez *5*
#6. Pour rechercher un livre avec son ISBN :------------tapez *6*
`)

switch(choixAdmin){
    case 1:
        ajouterLivres();
        break;
    case 2:
        afficherLivres();
        break;
    case 3:
        triTitre();
        break;
    case 4:
        triParAnnee();
        break;
    case 5:
        livresDisponibles();
        break;
    case 6:
        rechercheISBN();
        break;
    default:
        console.log("erreur");

}


