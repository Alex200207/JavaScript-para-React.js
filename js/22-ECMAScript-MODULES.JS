//se utilizan bastante en react 
//modulos de ECMAScript conceptos basicos 
//un modulo es un archivo que contiene codigo javascript
//un modulo es un archivo que se importa en otro archivo
//un modulo es un archivo que se exporta para ser utilizado en otro archivo

//para exportar un modulo se utiliza la palabra reservada export
//para importar un modulo se utiliza la palabra reservada import

//estos modulos de ECMAScript evitan tener que usar tantos archivos js en un solo archivo 
//`para que el codigo sea mas limpio y ordenado
//permiten serparar el codigo 

//para importar un modulo se utiliza la palabra reservada import
import {restar,sumar} from './funciones.js'

console.log(restar(10,5))

console.log(sumar(10,5))


//type: module permite que el archivo sea un modulo de ECMAScript y se pueda utilizar la palabra reservada import y export


//formas de exportar un modulo

//export default  //se utiliza para exportar un solo elemento
//export {elemento1,elemento2}//se utiliza para exportar multiples elementos
//export const elemento = valor//se utiliza para exportar una constante
//export function elemento(){}//se utiliza para exportar una funcion
//export class elemento{}//se utiliza para exportar una clase
//export as {elemento1 as nuevoNombre,elemento2 as nuevoNombre}//se utiliza para exportar un elemento con un nuevo nombre

//formas de importar un modulo

//import {elemento1,elemento2} from './archivo.js'//se utiliza para importar multiples elementos
//import * as nombre from './archivo.js'//se utiliza para importar todos los elementos de un modulo
//import {elemento1 as nuevoNombre,elemento2 as nuevoNombre} from './archivo.js'//se utiliza para importar un elemento con un nuevo nombre
//import elemento from './archivo.js'//se utiliza para importar un solo elemento
//import './archivo.js'//se utiliza para importar un modulo sin utilizar ningun elemento






