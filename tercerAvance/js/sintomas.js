const logo_sintms = document.querySelector('.logo_sintms')
const sintomasbot = document.querySelector('.sintomasbot')


logo_sintms.addEventListener('click', ()=>{
    sintomasbot.classList.toggle("spread2")
})

window.addEventListener('click', e =>{
    if(sintomasbot.classList.contains('spread2') 
        && e.target != sintomasbot && e.target != logo_sintms){
        console.log('close')
        sintomasbot.classList.toggle("spread2")
    }
})