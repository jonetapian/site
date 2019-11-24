 class DataOp{
    constructor(){
    }
    static set(url,obj){
        firebase.database().ref(url).set(obj);
    }
    static async get(url,child_filter){
        if(child_filter){
            firebase.database().ref(url)
                .child(child_filter).on('value',function(snapshot){
            });
        }
        return new Promise((resolve, reject) => {
            console.log('Initial');
            
            firebase.database().ref(url).on('value',function(snapshot){
                console.log(snapshot.val())
                resolve(snapshot.val());                
            });
            
        });

    }
    static delete(url){
        return firebase.database().ref(url).remove().then(val => {
            return val;
        });
    }

}