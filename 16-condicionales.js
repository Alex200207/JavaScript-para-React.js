//El codigo condicional revisa si se cumple una condicion y ejecuta un bloque de codigo si es verdadero o falso
// if(condicion){
//     //bloque de codigo
// }
//else{
//     //bloque de codigo
// }

//ejemplo

const auth = true;

if (auth) {//decimos si el usado esta autenticado entonces ejecuta el bloque de codigo
  console.log("Autenticado");
} else {//De lo contrario ejecuta este bloque de codigo
  console.log("No autenticado");
}

//tambien podemos negar una condicion este caso usamos ! para negar la condicion
//ejem

const auth2 = false;

if (!auth2) {//decimos si el usuario no esta autenticado entonces ejecuta el bloque de codigo
  console.log("No autenticado");
} else {//De lo contrario ejecuta este bloque de codigo 
    console.log("Autenticado");
    }

    //comparar dos variables usando operator de comparacion
    //== igual
    //=== igual estricto (compara el valor y el tipo de dato)
    //!= diferente
    //!== diferente estricto
    //> mayor que
    //< menor que
    //>= mayor o igual que


    const puntaje = 1000;
    const puntaje2 = "1000";

    //si la condicion se cumple
    if(puntaje == puntaje2){//comparamos si los valores son iguales
        console.log("Si son iguales");
    }
    //si la condicion no se cumple
    else{
        console.log("No son iguales");
    }


