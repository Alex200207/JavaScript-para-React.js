//Medir el performance y como manejar multiples consultas 

//Performance y Multiples async  await
//pagina de pruebas https://jsonplaceholder.typicode.com/
const url = 'https://jsonplaceholder.typicode.com/comments';
const url2 = 'https://jsonplaceholder.typicode.com/todos';
const url3 = 'https://jsonplaceholder.typicode.com/photos';

//medir el performance 
//utiliza el metodo performance.now() para medir el tiempo de ejecucion de una funcion

const consultarAPI = async () => {
    try
    {
        const inicio = performance.now();//medir el tiempo de ejecucion de una funcion inicio
        const response = await fetch(url);
        if(!response.ok){
            throw 'ERROR EN LA PETICION';
        }
        const data = await response.json();
        console.log(data);

        const response1 = await fetch(url2);
        if(!response.ok){
            throw 'ERROR EN LA PETICION';
        }
        const data1 = await response1.json();
        console.log(data1);


        const response2 = await fetch(url3);
        if(!response.ok){
            throw 'ERROR EN LA PETICION';
        }
        const data2 = await response2.json();
        console.log(data2);

        const fin = performance.now();//medir el tiempo de ejecucion de una funcion fin
        console.log(`El resultado de la primer funcion: ${fin - inicio} ms`);//restamos el tiempo de inicio y el tiempo de fin para obtener el tiempo de ejecucion de la funcion 
    }
    catch(err)
    {
        console.log('Error',err.message);
    }
}
//hemos hecho tres consultas a la api y hemos medido el tiempo de ejecucion de la funcion y vemos hay mucho mas tiempo
//esto pasa porque las consultas se hacen de manera secuencial y no de manera paralela para solucionar este gran error
//crearemos una funcion que se encargue de hacer las consultas de manera paralela
consultarAPI();


//creando otra funcion para hacer las consultas de manera eficiente
//usando un promise tendremos codigo mas corto
const consultarAPI2 = async () => {
    try
    {
        const inicio = performance.now();//medir el tiempo de ejecucion de una funcion inicio

        const [response,response2,response3] = await Promise.all([fetch(url),fetch(url2),fetch(url3)]);
        //este codigo lo que va a hacer es que va comensar los fecth al mismo tiempo a diferencia del anterior que deben
        //esperar a que uno termine para que el otro comienze
        //el [] que esta antes de await es almacenar los resultados de las promesas en un array

        //hacemos lo mismo pero con el json
        const [data,data2,data3] = await Promise.all([response.json(),response2.json(),response3.json()]);

        //dejamos los console.log para ver los resultados
        console.log(data);
        console.log(data2);
        console.log(data3);

        const fin = performance.now();
        console.log(`El resultado de la segunda funcion: ${fin - inicio} ms`);
    }
    catch(err)
    {
        console.log('Error',err.message);
    }

}

consultarAPI2();

//entonces lo que hacemos es meter las consultas dentro de un Promse.all y luego las convertimos a json para que se ejecuten de manera paralela
//Promise.all es un metodo que recibe un array de promesas y retorna una sola promesa que se cumple cuando todas las promesas del array se cumplen