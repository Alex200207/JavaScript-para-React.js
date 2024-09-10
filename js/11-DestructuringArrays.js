//Destructuracion de arreglos en JavaScript moderno
const tegnologias = ['HTML', 'CSS', 'JavaScript','React','node.js',true,2002];//un arreglo es una coleccion de elementos que se encuentran en una sola variable

console.log(tegnologias[2]);//forma clasica de acceder a la posicion 2 de un arreglo

//destructuring de arreglos

//const [html,css,nodejs] = tegnologias;//destructuring de arreglos

//el destructuring de arreglos lo que hace es irlos extrayendo en base a la posicion de los elmentos 

//console.log(nodejs);//realmente no es que los busque por su nombre si no por su posicion aqui mostrar == JavaScript

// de hecho puede poner cualquier nombre y siempre va buscar los valores por su posicion en el arreglo



//puedes usar una coama para saltar un elemento y asi tener el elemento que necesitas
const [ , , , reactjs] = tegnologias;
console.log(reactjs);// de esta forma usando coma saltamos los valores y entramos a la posicion que contiene el valor React

//los arreglo son para iterarse.




