//Operadores Ternarios en JavaScript
const saldo = 1000;
const pagar = 500;
const targeta = true;
//Los operadores ternarios son una forma de escribir condicionales de una forma mas corta y limpia
//se compone de tres partes
//la condicion a evaluar
//el bloque de codigo si la condicion es verdadera
//el bloque de codigo si la condicion es falsa

//sintaxis
//condicion ? bloque de codigo si es verdadera : bloque de codigo si es falsa

//ejemplo
const autenticado = true;

console.log(autenticado === true ? "Si esta autenticado" : "No esta autenticado");

//ejemplo 2

autenticado ? console.log("Si esta autenticado") : console.log("No esta autenticado");//misma funcion que el ejemplo anterior

//puedes tener un ternario anidado

saldo > pagar ?//si el saldo es mayor al monto a pagar
console.log("Pago realizado") : //entonces se ejecuta este bloque de codigo
targeta ? console.log("Pago realizado con targeta") ://si no se cumple la condicion anterior entonces se ejecuta este bloque de codigo
console.log("Fondos insuficientes");//si no se cumple la condicion anterior entonces se ejecuta este bloque de codigo



//puedes agrgar un logical or para que se ejecute el bloque de codigo si almenos una condicion es verdadera o un && para que se ejecute si todas las condiciones son verdaderas

saldo > pagar && targeta ? console.log("Pago realizado") : console.log("Fondos insuficientes");
//si el saldo es mayor al monto a pagar y tiene targeta entonces se ejecuta este bloque de codigo

//lo recomendable es usar los operadores ternarios cuando la condicion es simple y corta 
