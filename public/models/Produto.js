class Produto{
 

    
    constructor(data){

        this.nome = '';
        this.cliente = '';
        this.quantidade = 0;
        this.bebidas = '';
        this.endereco = '';
        this.sem = '';
        this.data = '';
        this.tamanho = '';
        this.borda = '';
        this.tipoPagamento = '';
        this.tipoEntrega = '';
        this.preco = 0;
        this.favorito = '';
        this.extras = '';
        this.tipo = '';
        this.precoTotal = 0;
        if(data){
            this.createProduto(data);
        }
    }
    createProduto(data){
        this.nome = data.nome;
        this.cliente = data.cliente;
        this.quantidade = data.quantidade;
        this.bebidas = data.bebidas;
        this.endereco = data.endereco;
        this.sem = data.sem;
        this.data = data.data;
        this.tamanho = data.tamanho;
        this.borda = data.borda;
        this.tipoPagamento = data.tipoPagamento;
        this.tipoEntrega = data.tipoEntrega;
        this.preco = data.preco;
        this.favorito = data.favorito;
        this.extras = data.extras;
        this.tipo = data.tipo;
        this.precoTotal = data.precoTotal;
    }
    getTipo(){
        return this.tipoPagamento;
    }
    hasExtras(){
        if(this.extras){
            return this.extras
        }else{
            return "sem extras"
        }
    }
    hasSem(){
        if(this.sem){
            return this.sem
        }else{
            return "nenhum ingrediente foi retirado"
        }
    }
    getArrayData(array){
        console.log(array.toString())
        if(array){
            return this.array.join();
        }else{
            return this.array;
        }
    }

}