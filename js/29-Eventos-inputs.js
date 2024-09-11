//eventos inputs en js

const inputNombre = document.querySelector("#nombre");

//input es un evento que se dispara cuando se escribe en un input 
//agregamos un evento input al input nombre



const inputPassword = document.querySelector("#password");//seleccionamos el input password
inputPassword.addEventListener('input',funtionPassword)//agregamos un evento input al input password


//crearemos una funcion para el evento input que cambie el tipo de input a texto por 3 segundos
function funtionPassword() {//creamos una funcion para el evento input
  inputPassword.type = "text";//cambiamos el tipo de input a texto
  setTimeout(() => {//usamos un setTimeout para que despues de 3 segundos vuelva a ser un input de tipo password
    inputPassword.type = "password";
  }, 500);
}
