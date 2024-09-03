//Array Methods

const tegnologias = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "node.js",
  true,
  2002,
];
const numero = [1, 2, 4, 5, 6];

//filter
// permite filtrar elementos de un arreglo en base a una condicion
//usando funcion arrow 
//filter aplica para un arriglo de cualquier tipo de dato
const tegnologias2 = tegnologias.filter(tech => tech !== "React");
console.log(tegnologias2);

//includes verifica si un elemento esta en un arreglo
//no incluye un callback
const resultado = tegnologias.includes("React");
console.log(resultado);//true si el elemento esta en el arreglo

//some-Devulve si almenos uno de los elementos cumple con la condicion
const resultado2 = numero.some(numero => numero > 5);
console.log(resultado2);//true si almenos un elemento cumple con la condicion

//find-Devuelve el primer elemento que cumple con la condicion
//el metodo fin sirve para encontrar un elemento en un arreglo que cumpla con una condicion
//usa un callback
const resultado3 = numero.find(numero => numero > 5);
console.log(resultado3);//6

//Every -Retorna true o false si todos cumplen con la condicion
const resultado5 = numero.every(numero => numero > 5)
console.log(resultado5);//false

//reduce - Retorna un acomulado del total de los elementos
//mas compleja
//reduce resive dos parametros
//el total es el acumulado y el numero es el valor actual del arreglo
const resultado6 = numero.reduce((total,numero)=>{//
    return total + numero;//total es el acumulado y numero es el valor actual
},0)//el 0 es el valor inicial del total 
console.log(resultado6);//18




