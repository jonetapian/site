
class Pizzas extends Product{
    
    constructor(data){
        this.valor_grande;
        this.valor_broto;
        this.ingredientes;
        this.tipo;
        this.product_type;
        if(data){
            this.setPizza(data);
        }
    }
    setPizza(data){
        if(data){
            this.valor_grande = data.valor_grande;
            this.valor_broto = data.valor_broto ;
            this.ingredientes = data.ingredientes;
            this.product_type = data.product_type;
        }
    }




}