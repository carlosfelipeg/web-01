const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.add-img');
const contenedorLight = document.querySelector('.img-light');
const hamburguer1 = document.querySelector('.hamburger');

imagenes.forEach(img => {
    img.addEventListener('click', () => {
        aparecer_img(img.getAttribute('src'));
    })
});


contenedorLight.addEventListener('click', (e) => {
    if (e.target !== imagenesLight) {
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
        hamburguer1.style.opacity = '1'
    }
});

const aparecer_img = (imagen) => {
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
    hamburguer1.style.opacity = '0';
}