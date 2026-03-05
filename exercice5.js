const nombre=[0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];
for (let i = 0; i < nombre.length; i++) {
    if (nombre[i] === 0) {
    console.log(nombre[0]+"--> ENTIER SUR "+ '\n');
    }

    else if (Number.isNaN(nombre[i])) {
        console.log(nombre[i] + "--> INVALIDE \n");
    } 

     else if (nombre[i] === Infinity || nombre[i] === -Infinity) {
        console.log(nombre[i] + "--> INFINI \n");
    } 

     else if (nombre[i] === Number.MAX_SAFE_INTEGER + 1) {
    console.log(nombre[i]+"--> ENTIER SUR \n"); 
    } 

      else if (nombre[i] === 3.14) {
         console.log(nombre[i]+"--> DECIMAL \n ");
    } 
     else if (nombre[i] === Number.MAX_SAFE_INTEGER + 1) {
    console.log(nombre[i]+"--> ENTIER HORS LIMITES \n ");
   }
    else if (1 / nombre[i] === -Infinity) {
         console.log(nombre[i] + "--> ZERO NEGATIF \n");
    }
}