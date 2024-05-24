// Obtiene el elemento del DOM donde se mostrará el valor anterior de la calculadora
const displayValorAnterior = document.getElementById('valor-anterior');

// Obtiene el elemento del DOM donde se mostrará el valor actual de la calculadora
const displayValorNuevo = document.getElementById('valor-nuevo');

// Obtiene todos los botones de números de la calculadora
const BtnNumeros = document.querySelectorAll('.numero');

// Obtiene todos los botones de operadores de la calculadora
const BtnOperador = document.querySelectorAll('.operador');

// Crea una nueva instancia de la clase Display, pasando los elementos del DOM donde se mostrarán los valores
const display = new Display(displayValorAnterior, displayValorNuevo);

// Añade un event listener a cada botón de número para agregar el número al display cuando se hace clic
BtnNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

// Añade un event listener a cada botón de operador para realizar la operación correspondiente cuando se hace clic
BtnOperador.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
});
