let btnMenuHamb = document.querySelector('#menu-hamburguer')

function openMenu(e){
    if(e.type==='touchstart')
        e.preventDefault()
    
        document.querySelector('.menu').classList.toggle('ativo')
        document.querySelector('#hamburguer').classList.toggle('ativo')
}

btnMenuHamb.addEventListener('click', openMenu)
btnMenuHamb.addEventListener('touchstart', openMenu)

let allLink = document.querySelectorAll('.menu a')

allLink.forEach(link=>{
    link.addEventListener('click', ()=>{
        document.querySelector('.menu').classList.remove('ativo')
        document.querySelector('#hamburguer').classList.remove('ativo')
    })
})