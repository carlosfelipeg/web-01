const hamburguer = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-nav');

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread");
})