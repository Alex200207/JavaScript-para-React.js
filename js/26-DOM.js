//selectores Elementos del DOM 

//Que es un selector un selector es una forma de seleccionar un elemento del DOM

//creamos a una variable para evitar repetir codigo 
//document es un objeto que representa el documento en el navegador
//querySelector es un metodo que nos permite seleccionar un elemento del DOM con un selector de css


const heading = document.querySelector('.heading')

console.log(heading)
console.log(heading.tagName)//nos muestra el nombre de la etiqueta
console.log(heading.textContent)//nos muestra el contenido del elemento
console.log(heading.classList)//nos muestra las clases del elemento
console.log(heading.id)//nos muestra el id del elemento

//a esto y mucho mas se le conoce como dom properties 


const enlace = document.querySelectorAll('.navegacion a')//nos devuelve un nodeList que es un array de elementos con la clase enlace

//diferencias querySelectorAll y querySelector 
//querySelectorAll nos devuelve todos los elementos que le corresponda el selector.
//querySelector nos devuelve hasta un elemento o nada si el selector no existe
console.log(enlace)