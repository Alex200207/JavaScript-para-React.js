//eventos con click en js

//evento mas comun en js es el evento click

const heading = document.querySelector('.heading')
const enlace = document.querySelectorAll('.navegacion a')

//una ves obtienes un elemento puedes agregarle un evento
heading.addEventListener('click',()=> {
    heading.textContent = 'Nuevo Texto'
})

heading.addEventListener('mouseenter',(e) =>{
    e.target.style.backgroundColor = 'blue'
})

heading.addEventListener('mouseleave',(e) =>{
    e.target.style.backgroundColor = 'transparent'
})

//en los enlaces sera distinto ya que es un nodeList usar un forEach

enlace.forEach(enlace => {
    enlace.addEventListener('click',(e) => {
        console.log(e)//nos muestra el evento
        e.preventDefault()//previene la accion por defecto del enlace en este caso redireccionar a otra pagina
        //o de cualquier otro elemento que tenga una accion por defecto
        e.target.textContent = 'Nuevo Texto'
    })
})
//e es el evento que se dispara al dar click 
//target es sobre que dimos click o que esta disparando el evento en este caso el enlace
//addEventListener es un metodo que nos permite agregar un evento a un elemento