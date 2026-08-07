"use strict";
class GestorFormulario {
    contactos = [];
    form;
    error;
    constructor(formSelector, errorSelector) {
        this.form = document.querySelector(formSelector);
        this.error = document.querySelector(errorSelector);
        this.form.addEventListener("submit", (e) => this.enviar(e));
    }
    // Función tipada: recibe strings, devuelve boolean
    validar(nombre, correo) {
        if (nombre.trim().length < 3) {
            this.error.textContent = "El nombre debe tener al menos 3 caracteres";
            return false;
        }
        if (!correo.includes("@")) {
            this.error.textContent = "Correo inválido";
            return false;
        }
        this.error.textContent = "";
        return true;
    }
    enviar(evento) {
        evento.preventDefault();
        const datos = Object.fromEntries(new FormData(this.form));
        const nombre = String(datos.nombre);
        const correo = String(datos.correo);
        if (!this.validar(nombre, correo))
            return;
        this.contactos.push({ nombre, correo, plan: String(datos.plan) });
        console.log("Contactos (JSON):", JSON.stringify(this.contactos, null, 2));
        this.form.reset();
    }
}
new GestorFormulario("#formulario", "#error");
