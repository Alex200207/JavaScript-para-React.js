//Unir 2 o mas objetos en uno solo 
//los objetos en react son muy comunes y se suelen unir para pasarlos como props a un componente

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
};

const cliente = {
    nombre: 'Eddy',
    premiun: true,
};
// uso de operador spread o rest operator
// const carrito = {
//     cantidad: 20,
//     ...producto,//extraer todas las propiedades de un objeto y unirlas a otro objeto con el operador spread
// }


//como puedo unir producto y cliente en un solo objeto

const nuevoObjeto = { //creo un nuevo objeto
    ...producto,//agrego el objeto producto haciendo uso del operador spread
    ...cliente,//agrego el objeto cliente
};

console.log(nuevoObjeto);


//otra forma de unir dos objetos en uno solo es con el metodo Object.assign
//Object.assign recibe un objeto vacio y luego los objetos que se quieren unir
const resultado = Object.assign(producto, cliente);
console.log(resultado);

