//Optional chaining (?) y nullish coalescing (??) son dos nuevas características de JavaScript que se han añadido en la versión ES2020.

const e = require("cors");



//Optional chaining (?)

//permite acceder a las propiedades de un objeto o llamar metodos sin tener que verificar si existen o no

const almuno = {
    nombre: 'Eddy',
    apellido: 'PTalavera',
    clase: 'Desarrollador Web',
    aprobar: true,
    examenes: {examenes1: 10, examenes2: 20}
}
//cuando tenemos error al definir algun elemento nuestro codigo restante partiendo del error no va funcionar
//por eso se usa el optional chaining para evitar estos errores y preguntar.
console.log(almuno.examenes?.examenes1);// si existe la propiedad examenes y si existe la propiedad examenes1 
//ya que no tenemos definida la propiedad examenes lanza error y no me deja continuar el codigo en todo caso podemos usar ? 
//para que sea condicional  podrias usar un if para verficar si existe pero es mas corto usar un optional chaining
console.log('Despues de almuno')


//Nullish coalescing operator (??) uso diferente

//es un operador logico que retorna el valor del lado derecho cuando el valor del lado izquierdo es nullo o undefined
//en caso contrario retorna el del lado izquierdo 

//ejemplo de su uso 
//supongamos que estamos creando un paginador desde la url y en la pagina o url no viene page = 1
//por lo tanto podemos hacer esto
let page = 3
const pagina = null ?? 1//en caso de que sea nullo o undefined  esta pagina va tener el valor de 1
//pero si existe el null no seria null si no un 3 entonces le asigna el  valor de la izquierda

//entonces nulish coalescing es un oparador logico que retorna el operando del lado derecho cuando el del lado izquierdo es null o undefined
//se utiliza bastante cuando trabajas con un paginador