//funciones en javascript moderno

//ponganse las pilas con las funciones en js jajajajaja

//las funciones en js son muy importantes y se usan mucho en react porque cuando haces un proyecto
//vas a separarlo en pequeñas funciones que cumplan una tarea especifica
//las funciones permiten escribir codigo reutilizable y modular en todo javascript
//las funciones en js son objetos de primera clase y se pueden almacenar en variables, objetos y arreglos
//las funciones en js pueden ser pasadas como argumentos a otras funciones y pueden ser retornadas por otras funciones
//hay muchos tipos de funciones vamos a ver algunos de ellos en este archivo



//funicion simple
function suma(){//definimos la funcion suma
    return console.log(1 + 1);//retorna 2
}
suma();//llamamos a la funcion saludar

//esto es una funcion inteligente esta tomara parametros y los sumara

function suma(a,b){//definimos la funcion suma que recibe dos parametros a y b
    return console.log(a + b);//retorna la suma de los parametros
}

suma(2,3);//llamamos a la funcion suma y le pasamos dos argumentos 2 y 3


//funcion de tipo exoresion o funcion anonima 
//no se puede llamar antes de su definicion no abarca el hoisting
const suma = function(a,b){
    return console.log(a + b);
}//definimos una funcion anonima que recibe dos parametros a y b

//funcion flecha
//es una forma mas corta de escribir una funcion
//no se puede llamar antes de su definicion no abarca el hoisting
const suma = (a,b) => console.log(a + b);//definimos una funcion flecha que recibe dos parametros a y b


//porque la funciones de tipo expresion y las funciones flecha no abarcan el hoisting
/*Basicamente cuando tienes estas funciones y las declaras de esta forma lo que hace js
es registrar primero todas la funciones function() y entonces en un segundo llamado comienza
a ejecutar las funciones */

