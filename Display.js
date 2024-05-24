// Clase Display que interactúa y muestra el resultado en la calculadora
class Display {
    // Constructor que inicializa los elementos del display y otros atributos
    constructor(displayValorAnterior, displayValorNuevo) {
        this.displayValorAnterior = displayValorAnterior; // Elemento del DOM para mostrar el valor anterior
        this.displayValorNuevo = displayValorNuevo; // Elemento del DOM para mostrar el valor nuevo
        this.calculador = new Calculadora(); // Instancia de la clase Calculadora para realizar operaciones
        this.valorNuevo = ''; // Valor actual en la pantalla (nuevo valor)
        this.valorAnterior = ''; // Valor anterior en la pantalla
        this.tipoOperacion = undefined; // Tipo de operación actual (suma, resta, etc.)
        this.signos = { // Objeto que almacena los símbolos de las operaciones
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-',
        };
    }

    // Método para borrar el último dígito del valor nuevo
    borrar() {
        this.valorNuevo = this.valorNuevo.toString().slice(0, -1); // Elimina el último carácter del valor nuevo
        this.imprimirValores(); // Actualiza los valores mostrados en la pantalla
    }

    // Método para borrar todos los valores y resetear la operación
    borrarTodo() {
        this.valorNuevo = ''; // Resetea el valor nuevo
        this.valorAnterior = ''; // Resetea el valor anterior
        this.tipoOperacion = undefined; // Resetea el tipo de operación
        this.imprimirValores(); // Actualiza los valores mostrados en la pantalla
    }

    // Método para agregar un número al valor nuevo
    agregarNumero(numero) {
        if (numero === '.' && this.valorNuevo.includes('.')) return; // Previene múltiples puntos decimales
        this.valorNuevo = this.valorNuevo.toString() + numero.toString(); // Agrega el número al valor nuevo
        this.imprimirValores(); // Actualiza los valores mostrados en la pantalla
    }

    // Método para seleccionar el tipo de operación y calcular el resultado si es necesario
    computar(tipo) {
        if (this.tipoOperacion !== 'igual') this.calcular(); // Si no es la operación 'igual', calcula el resultado previo
        this.tipoOperacion = tipo; // Establece el nuevo tipo de operación
        this.valorAnterior = this.valorNuevo || this.valorAnterior; // Actualiza el valor anterior
        this.valorNuevo = ''; // Resetea el valor nuevo
        this.imprimirValores(); // Actualiza los valores mostrados en la pantalla
    }

    // Método para imprimir los valores en el display
    imprimirValores() {
        this.displayValorNuevo.textContent = this.valorNuevo; // Muestra el valor nuevo en el elemento correspondiente
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`; // Muestra el valor anterior y el signo de la operación
    }

    // Método para realizar el cálculo basado en el tipo de operación
    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior); // Convierte el valor anterior a número
        const valorNuevo = parseFloat(this.valorNuevo); // Convierte el valor nuevo a número

        if (isNaN(valorNuevo) || isNaN(valorAnterior)) return; // Si uno de los valores no es un número, no hace nada
        this.valorNuevo = this.calculador[this.tipoOperacion](valorAnterior, valorNuevo); // Realiza la operación y actualiza el valor nuevo
    }
}
