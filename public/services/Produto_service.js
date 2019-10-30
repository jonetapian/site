
class Produto_service{
    
    constructor(){

    }

    colocarBanco(){
        
    }
    updateBanco(obj){
        firebase.database().ref('compras/' + obj.data).set((obj), function(error) {
            if (error) {
                console.log("nao foi");
              // The write failed...
            } else {
              // Data saved successfully!
                console.log("foi");
            }
          });
    }

    deleteBanco(){

    }
    pegarBanco(){
        var strEmail = localStorage.getItem("email");
        var email = strEmail.split("@",1);
        email = btoa(email);
        let consulta = firebase.database().ref('compras').orderByChild('cliente').equalTo(email);        
        var thing = new Array();
        consulta.on('value', function(snapshot) {
            //console.log(snapshot.val())
            snapshot.forEach(function(data) {
                thing.push(data.val());
              });

            
          });
        return thing;


    }
}