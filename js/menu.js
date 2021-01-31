const hamburguer = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-nav');

const facebook = document.querySelector('.bxl-facebook');

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread");
});

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer){
        menu.classList.toggle("spread");
    }
});

facebook.addEventListener('click', ()=>{
    window.location.href = "https://api.whatsapp.com/send?phone=+573012735976&text=hola,%20qué%20tal?%0AComo%20estas?"
});

