//Funciones de tipo flecha

const suma = function(a,b){
    return console.log(a + b);
}//definimos una funcion anonima que recibe dos parametros a y b

suma(55,55);

//arrow function se parece a las funciones de tipo expresion
//solamente cuando son expreciones puedes convertirlas en arrow functions
const suma2 = (a,b) => console.log(a + b);//definimos una funcion flecha que recibe dos parametros a y b
suma2(55,55);