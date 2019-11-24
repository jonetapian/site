
class Product{
    
    constructor(data){
        this.nome;
        this.qtdCompras = 0;
        if(data){
            this.setProduct(data);
            this.nome = data.nome;
            this.id = data.id;
            this.qtdCompras = data.qtdCompras;
        }
    }
    setProduct(data){
        if(data){
            this.nome = data.nome;
            this.id = data.id;
            this.qtdCompras = data.qtdCompras;
        }
    }




}