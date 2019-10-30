
class Esfiha extends Product{
    
    constructor(data){
        this.valor;
        this.ingredientes;
        if(data){
            this.setEsfiha(data);
        }
    }
    setEsfiha(data){
        if(data){
            this.valor = data.valor;
            this.ingredientes = data.ingredientes;
        }
    }




}