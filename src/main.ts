const boton =document.getElementById('menuBtn');
const links = document.getElementById('nav__links');
boton.addEventListener('click', () => {
    links.classList.toggle('is-open');
});

console.log('Landing de emprendedores lista para la entrega 1 Ing. Guilmar, y pues arriba Argentina.')

import { GestorContactos } from "./formulario.js";

const gestor = new GestorContactos("#formulario", "#error", "#lista-contactos");

const btnGuardar = document.querySelector("#guardar") as HTMLButtonElement;
btnGuardar?.addEventListener("click", () => gestor.guardarJSON());