//Fetch API con Async Await  es una sintaxis mas simple y mas moderna
//fecth API puede ser utilizado con funcion o sin funcion pero

//async: esto convierte una funcion en asincrona lo que da acceso a la otra propiedad que se llama await
//await: es un operador que se utiliza para esperar a que una promesa se resuelva y devuelva su valor 
//y ahora los .then sera replazado por await

//que es asincrono y sincrono?? 
//asincrono es cuando una tarea no se ejecuta en el orden en el que se llama
//sincrono es cuando una tarea se ejecuta en el orden en el que se llama

//las promesas son asincronas


const url = 'https://jsonplaceholder.typicode.com/comments'


//     fetch(url)
//  .then((response =>{
//     if(response.ok){
//         return response.json()
//     }
//     else{
//         throw 'Error en la peticion'
//     }
//  }))
//  .then(resultado => {
//      console.log(resultado)
//  })
//  .catch((error) => {   
//      console.log('Error',error.message)
//  })

const consultrarAPI = async () => {//convertir la funcion en asincrona usando async
try{//ya que no hay manera de usar catch con este codigo usamos try catch para manejar los errores
        //puede que tarde mucho tiempo en obtener los datos por eso se usa async await para esperar a que se resuelva la promesa
    //y detener la ejecucion del codigo hasta que se resuelva la promesa 
    const response = await fetch(url)//decimos que espere a que se resuelva la promesa y la respuesta la vamos a asignar a una variable respnse
    if(!response.ok){
        throw 'Error en la peticion'//si la respuesta no es correcta lanzamos un error
    }
    const data = await response.json()//intenta conectarese a la url y obtener la respuesta y una vez la tenemos la convertimos a json y 
    //la asignamos a una variable data

    console.log(data)//imprimimos la data

}
catch(error){//si hay un error se ejecuta el catch
    console.log('Error',error.message)

  }
}
consultrarAPI()//llamamos a la funcion

//try va intentar ejecutar el codigo y si hay un error se va a ejecutar el catch

// async await va como de derecha a izquierda recive la url espera la respusta y la 
//asigna a una variable y luego la convierte a json y la asigna a una variable
