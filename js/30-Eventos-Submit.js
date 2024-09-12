//eventos submit en js 

const formulario = document.querySelector('#formulario')

const inputPassword = document.querySelector("#password");//seleccionamos el input password
inputPassword.addEventListener('input',funtionPassword)//agregamos un evento input al input password


//crearemos una funcion para el evento input que cambie el tipo de input a texto por 3 segundos
function funtionPassword() {//creamos una funcion para el evento input
  inputPassword.type = "text";//cambiamos el tipo de input a texto
  setTimeout(() => {//usamos un setTimeout para que despues de 3 segundos vuelva a ser un input de tipo password
    inputPassword.type = "password";
  }, 500);
}

formulario.addEventListener('submit',(e) => {
    e.preventDefault()//esto previene la accion por defecto del formulario en este caso enviarlo

    const nombre = document.querySelector('#nombre').value //seleccionamos el input nombre
    const password = document.querySelector('#password').value //seleccionamos el input password

    console.log(nombre)//imprimimos el valor del input nombre
    console.log(password)//imprimimos el valor del input password
    //validamos campos
    if(nombre === '' || password === ''){
        console.log('Los campos estan vacios')
    }
    else
    {
        console.log('Los campos estan llenos')
    }
})