let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

console.log("===== RAPPORT UTILISATEUR =====");

// nom
let nomCorrige = nom.trim();
if (!nomCorrige) ;
    nomCorrige = "Inconnu";
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)');

// age
let ageNum = parseInt(age);
console.log("age              : " + ageNum + (isNaN(ageNum) || ageNum <= 0 ? " (invalide)" : " (valide)"));

// email
let at = email.indexOf("@");
let valideEmail = at !== -1 && email.indexOf(".", at) !== -1;
console.log('email            : "' + email + '" ' + (valideEmail ? "(valide)" : "(invalide : pas de point après @)"));

// scoreJeu
let score = parseInt(scoreJeu);
if (isNaN(score)) 
    score = 0;
console.log("scoreJeu         : " + score + ' (extrait depuis "' + scoreJeu + '")');

// estAdmin
let admin = estAdmin === "true";
console.log("estAdmin         : " + admin + ' (conversion manuelle requise)')

// derniereConnexion
let derniere = derniereConnexion ?? "Jamais connecté"
console.log('derniereConnexion: "' + derniere + '" (valeur par défaut via ??)')

// nombreConnexions
let nb = Number(nombreConnexions)
let affichage = nb === 0 ? "Aucune connexion" : nb
console.log('nombreConnexions : "' + affichage + '"')

console.log("================================")