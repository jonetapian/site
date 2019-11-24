class PizzasService{
    constructor(){

    }
    addPizza(obj){
        DataOp.set("pizzas" , obj);
    }
    updatePizza(obj){
        Dataop.set("pizzas" , obj);
    }
    deletePizza(obj){
        let path = "pizzas/" + obj.name
        DataOp.delete(path).then(val =>{
            console.log(val);
            return val;
        });
    }
}