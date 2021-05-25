const logo_menu = document.querySelector('.logo_menu')
const menu = document.querySelector('.menu-navegacion')


logo_menu.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != logo_menu){
        console.log('close')
        menu.classList.toggle("spread")
    }
})