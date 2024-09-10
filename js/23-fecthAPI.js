//que es fecth API esto mucho de la mano con el tema  de las promises
//veremos que es acontinuacion

//fetch API con promises'
//fetch API Proporsiona una interfaaz para poder obtener datos de un servidor 

//que es fetch  es una funcion que nos permite hacer peticiones http desde javascript
 //que es api es una interfaz de programacion de aplicaciones que nos permite interactuar con un servidor 
 //que es un servidor es un programa que recibe peticiones y envia respuestas
//que es un json es muy similar a un xml pero es mas facil de leer el json son objetos de javascript 

//que se pueden enviar a traves de la red 

//enlace https://jsonplaceholder.typicode.com/comments


//ejemplos de fetch API
const url = 'https://jsonplaceholder.typicode.com/comments'//url de la api

//usando fetch no tienes que importar nada porque ya esta es propiamente de javascript

fetch(url)//pasas la url sobre la cual va obtener los datos
//que pasamos en el callback que esta en el then ? pasamos un objeto que tiene informacion sobre la respuesta y esta 
//la mandamos a la consola
//los fetch utilizan promises y este es un objeto que va estar disponible en el futuro
.then((response)=> {//cuando la promesa se cumple se ejecuta el then y se obtiene la respuesta
    if(response.ok){//si la respuesta es correcta  retorna la respuesta
        return response.json()//decimos que retorne la respues response como json
    }
    else{
        throw 'Error en la peticion'//si no es correcta la respuesta lanzamos un error
    }
    
})
.then(resultado => {//cuando se cumple la promesa se ejecuta el then y se obtiene el resultado
    console.log(resultado)//imprimimos el resultado
})

//solo va mostrar error de red si no hay conexion a internet
//por eso usamos throw para lanzar un error si la respuesta no es correcta y esta vaya a caer en el catch
.catch((error) => {//si hay un error se ejecuta el catch
    console.log('Error',error.message)//imprimimos el error
})
//message es una propiedad que nos dice el mensaje de error


//notas 
//estado 200 quiere decir que todo esta bien
//estado 404 quiere decir que no se encontro la pagina
//estado 500 quiere decir que hay un error en el servidor
//estado 300 quiere decir que hay una redireccion
//estado 400 quiere decir que hay un error en el cliente
//estado 100 quiere decir que la peticion fue recibida




