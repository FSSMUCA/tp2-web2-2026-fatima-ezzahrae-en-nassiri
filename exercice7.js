let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = null
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 250

let sous_total = prix * quantite;
let reduction = 0;
if (!codePromo && estMembre) {
reduction = sous_total * (reductionPourcentage / 100);
}
else 
    reduction=0;

let total_final = sous_total - reduction;

let statut;
if (soldeCompte >= total_final) {
    statut = "Paiement accepté";
}
else {
    statut = "Paiement refusé";
}

let nouveau_solde;
if (statut === "Paiement accepté") {
    nouveau_solde = soldeCompte - total_final;
}
console.log ("=====  RECAPITULATIF  =====");
console.log("Produit : " + nomProduit);
console.log("Quantité : " + quantite);
console.log("Prix unitaire : " + prix + "MAD");
console.log("Sous-total : " + sous_total.toFixed(2) + "MAD");
console.log("Réduction : " + reduction.toFixed(2) + "MAD");
console.log("Total : " + total_final.toFixed(2) + "MAD");
console.log("Statut : " + statut);
console.log("Nouveau solde : " + nouveau_solde.toFixed(2) + "MAD");
console.log("===========================");