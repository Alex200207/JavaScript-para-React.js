//recorriendo arreglos con el ciclo for

const tegnologias = ['HTML', 'CSS', 'JavaScript','React',true,2002];

//la forma en que tu accederias a los valores de este arreglo es esta

// console.log(tegnologias[0]);
// console.log(tegnologias[1]);
// console.log(tegnologias[2]);
// console.log(tegnologias[3]);
// console.log(tegnologias[4]);
// console.log(tegnologias[5]);
// console.log(tegnologias[6]);

//sin embargo no es una buena forma de acceder a los elementos del arreglo imagina tienes 100??

//existen metodos y funciones que te permiten iterar areglos de forma sencilla
//filter,map,reduce,forEach,for of,for in

//usaremos el ciclo for para recorrer el arreglo
//si te fijas bien hay una estructura que hace que el ciclo for sea perfecto para recorrer arreglos
//tenemos una variable let i = 0 que es el indice del arreglo
//tenemos una condicion i < cantidad que es la longitud del arreglo
//tenemos un incremento i++ que realmente es un post incremento que va a ir aumentando el valor de i en 1
//dentro del ciclo for vamos a imprimir el valor de cada elemento del arreglo
//miestras i sea menor a la cantidad de elementos va a seguir iterando el arreglo

 for(let i = 0 ; i < tegnologias.length; i++){//puede usar length para que no se tenga que preocupar por el tamaño del arreglo
     console.log(i + ':' + tegnologias[i]);
}
//---------------------------------------------------------------------------------------------------------------------------------


//utilizando el foreach loop para recorrer un arreglo
tegnologias.forEach(function(a){//el forEach es un metodo que recorre un arreglo y ejecuta una funcion por cada elemento del arreglo
    console.log(a);
})


//el parametro a es el valor de cada elemento del arreglo que se esta recorriendo en el forEach
//este forech y el for hacen lo mismo pero el forEach es mas facil de leer y escribir

//---------------------------------------------------------------------------------------------------------------------------------

//map es un metodo que recorre un arreglo y retorna un nuevo arreglo en base a las condiciones de la funcion

const arrayMap = tegnologias.map(function(a){
    return a;
})
console.log(arrayMap);
//usamos casi la misma sintaxis del ciclo for sin embargo dentro del map podemos meter una condicion para que nos retorne un nuevo arreglo

//---------------------------------------------------------------------------------------------------------------------------------

//utilizando for of para recorrer un arreglo

//casi no lo utilizan.... :C

//este ejecuta un bloque de codigo por cada arreglo
//let a: es donde se almacenara cada uno de los elementos del arreglo
// of tegnologias: indica que se va a recorrer el arreglo tegnologias
//dentro del bloque de codigo se imprime el valor de a que contiene cada uno de los elementos del arreglo
for(let a of tegnologias){
    console.log(a);
}

//la verdad es una sintaxis mas sencilla que el ciclo for y el forEach pero no es muy comun... :C que sad...

