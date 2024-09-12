//validando formularios y mostrando alertas

//eventos submit en js 

const formulario = document.querySelector('#formulario')


formulario.addEventListener('submit',(e) => {
    e.preventDefault()

    const nombre = document.querySelector('#nombre').value //seleccionamos el input nombre
    const password = document.querySelector('#password').value //seleccionamos el input password

    const alertaPrevia = document.querySelector('.alerta')
    alertaPrevia?.remove()//remove nos permite eliminar un elemento
    
    const alerta = document.createElement('DIV');//creamos un div
    //createElement crea un elemento html
    alerta.textContent = 'Contenido de alerta';
    //add nos permite agregar una clase a un elemento
    //classList nos permite agregar clases a un elemento

    //prevenir alertas repetidas
    alerta.classList.add = ('alerta','text-white','uppercase','text-sm','text-center','p-2','font-black')//classList nos permite agregar clases a un elemento
    

    if(nombre === '' || password === ''){
        
        alerta.textContent = 'Los campos estan vacios'
        setInterval(() => {
            alerta.remove()//remove nos permite eliminar un elemento
        }, 1000);
        
    }
    else
    {
        alerta.textContent = 'Los campos estan llenos'
        setInterval(() => {
            alerta.remove()//remove nos permite eliminar un elemento
        }, 1000);
    }
    formulario.appendChild(alerta)
    //appendChild es una forma de agregar un hijo a un elemento
})