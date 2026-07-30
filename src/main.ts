const boton =document.getElementById('menuBtn');
const links = document.getElementById('nav__links');
boton.addEventListener('click', () => {
    links.classList.toggle('is-open');
});

console.log('Landing de emprendedores lista para la entrega 1 Ing. Guilmar, y pues arriba Argentina.')