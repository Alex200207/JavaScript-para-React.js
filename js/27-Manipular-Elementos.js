//manipular elementos html con js
const heading = document.querySelector('.heading')
const enlace = document.querySelectorAll('.navegacion a')//retorna un nodeList

// heading.textContent = 'Nuevo Heading...'//cambiamos el contenido del elemento
// heading.id = 'nuevoId'//cambiamos el id del elemento

// heading.removeAttribute('id')//removemos el atributo id del elemento    

// console.log(heading.textContent)//nos muestra el contenido del elemento
// Recordatoro: la sintaxis de punto es muy propia de los objetos

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'nuevo valor'

// console.log(inputNombre.classList)//nos muestra las clases del elemento

enlace[0].textContent = 'Nuevo Texto para el enlace' //cambiamos el contenido del enlace
//ya que estan en un nodeList podemos acceder a ellos como si fueran un array 

enlace.forEach(enlace => enlace.textContent = 'Nuevo Texto para el enlace')//cambiamos el contenido de todos los enlaces