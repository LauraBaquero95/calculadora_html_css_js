const displayValorAnterior=document.getElementById('valor-anterior');
const displayValorNuevo=document.getElementById('valor-nuevo');
const BtnNumeros =document.querySelectorAll('.numero');
const BtnOperador=document.querySelectorAll('.operador')
const display = new Display(displayValorAnterior,displayValorNuevo);



BtnNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});
