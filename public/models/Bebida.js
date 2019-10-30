
class Bebida extends Product{
    
    constructor(data){
        this.valor;
        this.marca;
        this.tamanho;
        if(data){
            this.setBebida(data);
        }
    }
    setBebida(data){
        if(data){
            this.valor = data.valor;
            this.marca = data.marca;
            this.tamanho = data.tamanho;
        }
    }




}