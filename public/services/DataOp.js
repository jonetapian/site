class DataOp{
    constructor(){
    }
    set(url,obj){
        firebase.database().ref(url).set(obj);
    }
    get(url,child_filter){
        if(child_filter){
            firebase.database().ref(url)
                .child(child_filter).on('value',function(snapshot){
            });
        }
        firebase.database().ref(url).on('value',function(snapshot){
            return snapshot;
        });


        

    }

}