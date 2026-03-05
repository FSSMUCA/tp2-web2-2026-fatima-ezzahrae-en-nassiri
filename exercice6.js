let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false
console.log ("PARTIE A")
console.log("nom   ??  valeur par defaut    ->      " + (nom  ??"valeur par defaut"))
console.log("age   ??  valeur par defaut    ->      " + (age  ??"valeur par defaut"))
console.log("ville ?? valeur par defaut     ->      " + (ville ??"valeur par defaut"))
console.log("score ?? valeur par defaut     ->      " + (score ??"valeur par defaut"))
console.log("actif ?? valeur par defaut     ->      " + (actif ??"valeur par defaut")+ "\n")
console.log ("PARTIE B" + "\n")
console.log("nom    ||  valeur par defaut    ->      "  + (nom   ||"valeur par defaut"))
console.log("age    ||  valeur par defaut    ->      "  + (age   ||"valeur par defaut"))
console.log("ville  || valeur par defaut     ->      " + (ville  ||"valeur par defaut"))
console.log("score  || valeur par defaut     ->      " + (score ||"valeur par defaut"))
console.log("actif  || valeur par defaut     ->      " + (actif ||"valeur par defaut")+ "\n")
console.log ("PARTIE C" + "\n")
console.log("nom    :  ?? et ||   ->   " + (((nom??"valeur par defaut") && (nom       ||"valeur par defaut"))? "meme resultat" : "resultats differents"));
console.log("age    :  ?? et ||   ->   " + (((age??"valeur par defaut") && (age       ||"valeur par defaut"))? "meme resultat" : "resultats differents"));
console.log("ville  :  ?? et ||   ->   " + (((ville??"valeur par defaut") && (ville   ||"valeur par defaut"))? "meme resultat" : "resultats differents"));
console.log("score  :  ?? et ||   ->   " + (((score??"valeur par defaut") && (score   ||"valeur par defaut"))? "meme resultat" : "resultats differents"));
console.log("actif  :  ?? et ||   ->   " + (((actif??"valeur par defaut") && (actif   ||"valeur par defaut"))? "meme resultat" : "resultats differents"));
