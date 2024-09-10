//codigo condicional usando operadores de comparacion estricto y no estricto

//== igual (no estricto)
//=== igual estricto (compara el valor y el tipo de dato)

const puntaje = 1000;
const puntaje2 = "1000";

//usando operador no estrico
if(puntaje == puntaje2){//comparamos si los valores son iguales
    console.log("Si son iguales");
}else{
    console.log("No son iguales");
}

//usando operador estricto
if(puntaje === puntaje2){//comparamos si los valores son iguales
    //en este caso podemos notar que los valores no son iguales ya que uno es un numero y el otro es un string
    console.log("Si son iguales");
}
else{
    console.log("No son iguales");
}

//!= diferente

const puntaje3 = 1000;
const puntaje4 = "1000";

//usando operador no estrico
if(puntaje3 != puntaje4){//comparamos si los valores son diferentes
    console.log("Si son diferentes");
}
else{
    console.log("No son diferentes");
}


//!== diferente estricto

const puntaje5 = 1000;
const puntaje6 = "1000";

//usando operador estricto

if(puntaje5 !== puntaje6){//comparamos si los valores son diferentes
    console.log("Si son diferentes");
}
else{
    console.log("No son diferentes");
}
//recomendacion usar operadores estrictos para evitar errores en el codigo