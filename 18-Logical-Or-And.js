//Operadores lógicos OR y AND en JavaScript

const saldo = 1000;
const pagar = 500;
const targeta = true;

//en la condicionales anidadas se ejecuta la primera condicion si es verdadera
if (saldo > pagar) {
  //si el saldo es suficiente entonces se ejecuta este bloque de codigo
  console.log("Pago realizado");
} else if (targeta) {
  //si el saldo no es suficiente entonces se ejecuta este bloque de codigo esto es una condicion anidada
  console.log("Pago realizado con targeta");
} else {
  console.log("Fondos insuficientes");
}
//usando un operador logico evitamos tantas condicionales anidadas y permitimos que el codigo sea mas limpio
//al evaluar todas las condiciones y ejecutar el bloque de codigo que cumpla con la condicion

//And:   &&   si todas las condiciones son verdaderas
//Or:   ||   si almenos una condicion es verdadera

//&&
if (saldo > pagar && targeta) {
  //si el saldo es suficiente y tiene targeta entonces se ejecuta este bloque de codigo
  console.log("Pago realizado");
} else {//si no se cumple la condicion anterior entonces se ejecuta este bloque de codigo
  console.log("Fondos insuficientes");
}


//Or
if (saldo > pagar || targeta) {
  //si el saldo es suficiente o tiene targeta entonces se ejecuta este bloque de codigo
  console.log("Pago realizado");
} else {//si no se cumple la condicion anterior entonces se ejecuta este bloque de codigo   
    console.log("Fondos insuficientes");
    }