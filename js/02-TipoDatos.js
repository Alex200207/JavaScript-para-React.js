//Tipos de Datos en JavaScript

//undefined
let cliente;
//undefined es un tipo de dato que no tiene valor asignado pero ya fue declarado
console.log(cliente);
console.log(typeof cliente);//typeof es una funcion que nos permite saber el tipo de dato de una variable

//String
cliente = "Juan";//String es un tipo de dato que almacena texto
console.log(cliente);
console.log(typeof cliente);

//Number
cliente = 10;//Number es un tipo de dato que almacena numeros
console.log(cliente);
console.log(typeof cliente);

//Boolean
cliente = true;//Boolean es un tipo de dato que almacena true o false
console.log(cliente);
console.log(typeof cliente);

//null
cliente = null;//null es un tipo de dato que no tiene valor
console.log(cliente);
console.log(typeof cliente);

//Symbol
cliente = Symbol('Simbolo');//Symbol es un tipo de dato que es unico y no se puede cambiar
console.log(cliente);
console.log(typeof cliente);

//Array
cliente = ['Juan', 'Pedro', 'Carlos'];//Array es un tipo de dato que almacena varios valores
console.log(cliente);
console.log(typeof cliente);

//Object
cliente = {
    nombre: 'Juan',
    edad: 30
};//Object es un tipo de dato que almacena varios valores
console.log(cliente);
console.log(typeof cliente);

//Date
cliente = new Date();//Date es un tipo de dato que almacena la fecha actual
console.log(cliente);

//Function
function Cliente(){
    return null;
}
cliente = Cliente();
console.log(cliente);
console.log(typeof cliente);


//En JavaScript hay 6 tipos de datos primitivos
//String, Number, Boolean, null, undefined, Symbol
//Y 2 tipos de datos compuestos
//Object, Function
//Y 1 tipo de dato estructural
//Array
//Y 1 tipo de dato de instancia
//Date
//Y 1 tipo de dato de objeto
//Math
//Y 1 tipo de dato de error
//Error
//Y 1 tipo de dato de simbolo
//Symbol
//Y 1 tipo de dato de promesa
//Promise
//Y 1 tipo de dato de iterador
//Iterator
//Y 1 tipo de dato de generador
//Generator
//Y 1 tipo de dato de set
//Set
//Y 1 tipo de dato de map
//Map
//Y 1 tipo de dato de weakset
//WeakSet
//Y 1 tipo de dato de weakmap
