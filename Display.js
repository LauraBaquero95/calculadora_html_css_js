// clase display que interactura y muestra resultado
class Display{
    constructor(displayValorAnterior,displayValorNuevo){
        this.displayValorAnterior=displayValorAnterior;
        this.displayValorNuevo=displayValorNuevo;
        this.calculador= new Calculadora();
        this.valorNuevo='';
        this.ValorAnterior='';
        this.tipoOperacion= undefined;
    }

    borrar(){
        this.valorNuevo=this.valorNuevo.toString().slice(0,-1)
        this.ImprimirValores();
    }
    borrarTodo(){
        this.valorNuevo='';
        this.ValorAnterior='';
        this.tipoOperacion=undefined;
        this.ImprimirValores();
    }
    agregarNumero(numero){
        if (numero==='.' && this.valorNuevo.includes('.'))return
        this.valorNuevo=this.valorNuevo.toString()+numero.toString();
        this.ImprimirValores();
        }

        ImprimirValores(){
            this.displayValorNuevo.textContent=this.valorNuevo;
            this.displayValorAnterior.textContent=this.ValorAnterior;
        }

}