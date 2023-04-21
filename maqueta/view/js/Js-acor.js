const bloque = document.querySelectorAll(".bloque")
const titulo = document.querySelectorAll(".titulo")

titulo.forEach( (cadaTitulo, i) =>{
    titulo[i].addEventListener('click', ()=>{
        bloque.forEach((cadaBloque, i)=>{
            bloque[i].classList.remove('activo')
        })
        bloque[i].classList.add('activo')
    }) 
})