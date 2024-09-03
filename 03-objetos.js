//Objetos : un obejeto es una coleccion de propiedades 
//y una propiedad es una asociacion entre un nombre (o clave) y un valor

//ejem
//sus propiedades son un nombre y un valor o una key y un value.
const persona = {
    nombre: 'Eddy',
    apellido: 'PTalavera',
    profesion: 'Desarrollador Web',//pon coma al final de cada propiedad
}

console.log(persona);
console.table(persona);//muestra la informacion en forma de tabla muy util para ver la informacion de un objeto

//para acceder a una propiedad de un objeto se hace de la siguiente manera  
console.log(persona.nombre);//se le llama sintaxis de punto
console.log(persona['nombre']);//sintaxis de corchetes

//desestructurar un objeto o desructuring
//permite extraer propiedades de un objeto y crear variables 

const {nombre,apellido,profesion} = persona;
console.log(nombre);
console.log(apellido);
console.log(profesion);
//la idea del destructuring es no tener que acceder a las propiedades de un objeto con la sintaxis de punto molesto no???  XD



//Object Literal Enhacement
//es una forma de simplificar la creacion de objetos cuando las propiedades tienen el mismo nombre que las variables que se les asignan

const autenticado = true;
const usuario = 'Eddy';

const nuevoObjeto = {
    autenticado: autenticado,
    usuario,//no es necesario poner usuario: usuario pues el key y el value tienen el mismo nombre
}
console.log(nuevoObjeto);






