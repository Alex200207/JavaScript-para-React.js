//evaluacion de corto circuito

/*La evaluación de cortocircuito es un concepto en programación que se refiere a la forma en
 que se evalúan las expresiones lógicas en un lenguaje de programación. En JavaScript, se utilizan 
 los operadores de cortocircuito, como && y ||, para evaluar expresiones lógicas de manera eficiente.

Cuando se utiliza el operador && (AND lógico), la evaluación de cortocircuito ocurre de la siguiente manera:
 si el primer operando es evaluado como falso, el resultado de toda la expresión será falso y no se evaluará 
 el segundo operando. Esto se debe a que, en una expresión AND, si uno de los operandos es falso, el resultado
  final también será falso, sin importar el valor del otro operando. Por lo tanto, si el primer operando es falso,
   no es necesario evaluar el segundo operando. */
//basicamente es cuando una expresion se trata como truty 

if(40){//te preguntaras porque el 40 es tratado como verdadero si no hay ninguna condicion
    //las leyes de js dicen que todos los valores van a ser truthy amenos que sean definidos como falsy
    console.log('Es verdadero')
}
else{
    console.log('Es falso')
}
//como funciona el operador de corto circuito

const user = {}

user && console.log('Existe un usuario')
//aparece usuario autenticado aunque el objeto esta vacio porque el objeto es tratado como verdadero

//ejemplo 2

const auth = true

auth && console.log('Usuario autenticado')//true si esta autenticado quiero que digas usuario autenticado
//podemos revisar la condicion y ejecutrar el codigo esto viene bien cuando revisas una condicion y solo quieres ejecutar solamentre un codigo
