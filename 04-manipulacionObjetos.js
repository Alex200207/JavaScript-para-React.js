//Manipulación de objetos en JavaScript

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
};
//reasignar valores de un objeto
producto.disponible = false;
//porque const me permite cambiar el valor de las propiedades de un objeto pero no me permite cambiar el objeto en si
//pues el objeto sigue siendo el mismo solo cambia el valor de sus propiedades

//agregar nuevas propiedades a un objeto
producto.imagen = 'imagen.jpg';//agregar nuevas propiedades a un objeto

//eliminar propiedades de un objeto
delete producto.disponible;//eliminar propiedades de un objeto

Object.freeze(producto);//congelar un objeto para que no se pueda modificar ni agregar ni eliminar propiedades de un objeto 
Object.seal(producto);//sellar un objeto para que no se pueda agregar ni eliminar propiedades pero si se puedan modificar las propiedades de un objeto
console.log(producto);


