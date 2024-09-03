

//Modifcar Arrays en JavaScript
const tegnologias = ['HTML', 'CSS', 'JavaScript','React','node.js',true,2002];//un arreglo es una coleccion de elementos que se encuentran en una sola variable
//---------------------------------------------------------------------------------------------------------------------------------
//modificar un elemento de un arreglo

tegnologias[5] = 'next.js';//modificar un elemento de un arreglo modifica un arreglo) no se recomienda usar esta forma con react

//mejor forma de hacerlo
const tegnologias2 = tegnologias.map(function(tech){//map es un metodo que recorre un arreglo y retorna un nuevo arreglo con los elementos modificados
    //tech es el valor de cada elemento del arreglo
    if(tech === 'React'){//si el elemento es igual a React lo cambia por Vue.js
        return 'Vue.js';//retorna el nuevo valor
    }else{//si no es igual a React retorna el elemento original
        return tech;//retorna el valor original
    }
})

console.log(tegnologias2);

/*Se utiliza para crear un nuevo arreglo que contiene los resultados de aplicar una función a cada elemento del arreglo original. */



//---------------------------------------------------------------------------------------------------------------------------------
tegnologias.push('vue.js');//agregar un elemento al final de un arreglo-- (modfica un arreglo) no se recomienda usar push con react

//mejor uso con el operador spread
const nuevaArreglo = [...tegnologias,'Angular'];//agregar un elemento al final de un arreglo sin modificar el arreglo original
console.log(nuevaArreglo);
//---------------------------------------------------------------------------------------------------------------------------------
tegnologias.shift();//eliminar el primer elemento de un arreglo (mdoifica un arreglo) no se recomienda usar shift con react

//mejor forma de hacerlo

const tecnologias3 = tegnologias.filter(function(tech){//filter es un metodo que recorre un arreglo y retorna un nuevo arreglo con los elementos que cumplan con la condicion
    if(tech !== 'HTML'){//si el elemento es diferente a HTML lo retorna
        return tech;
    }
}) 

// devolvemos los elementos filtrados por una condicion en este caso devolvemos los arreglos sin el elemento HTML.
/*El método filter() en JavaScript es una función de orden superior que se utiliza para filtrar 
elementos de un arreglo según una condición específica. Toma como argumento una función de devolución
 de llamada (callback) que se ejecuta para cada elemento del arreglo. La función de devolución de llamada
  debe devolver true o false para indicar si el elemento debe incluirse en el nuevo arreglo resultante.*/

console.log(tecnologias3);

//---------------------------------------------------------------------------------------------------------------------------------
tegnologias.unshift('Angular');//agregar un elemento al inicio de un arreglo
tegnologias.pop();//eliminar el ultimo elemento de un arreglo

tegnologias.splice(2,1);//eliminar un elemento de un arreglo en cualquier posicion
tegnologias.reverse();//invertir el orden de los elementos de un arreglo

//dato curioso
//en react se deben escribir funciones puras que no modifiquen el estado de los objetos

//diferencia de filter y map en un arreglo
//filter retorna un nuevo arreglo con los elementos que cumplan con la condicion 
//map retorna un nuevo arreglo con los elementos modificados