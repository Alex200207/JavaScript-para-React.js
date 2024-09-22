//desestructuracion de dos o mas objetos en js
//la desestructuracion es una forma de extraer valores de un objeto

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
};

const cliente = {
    nombre: 'Eddy',
    apellido: 'PTalavera',
    profesion: 'Desarrollador Web',
    direccion: {
        ciudad: 'Jalapa',

    }
};

const { nombre } = producto;//desestructurar un objeto
const { nombre: nombreCliente } = cliente;//para no tener problemas con las variables que se llaman igual se le puede asignar un alias a la variable
const { direccion: { ciudad } } = cliente;//desestructurar un objeto dentro de otro objeto debes de tener cuidado con los objetos anidados
//y usar {} para desestructurar el objeto anidado por que se suele con un renombre de la variable

console.log(nombre);
console.log(nombreCliente);
console.log(ciudad);