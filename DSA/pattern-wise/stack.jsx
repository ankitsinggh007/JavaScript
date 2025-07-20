let proto={
        //method
        push(value){
            this.arr.push(value);
            return;
        },
        pop(){
            this.arr.pop();
        },
    isEmpty(){
        return this.arr.length==0;
    },
    top(){
      return this.arr.slice(-1);
    }

    }
 function Stack(){
    this.arr=[];  
 }
 Stack.prototype=proto;
    
    // ------------------------------------------------------------------------------------------
    
var isValid = function(s) {
    let arr=[];

    for(let symbol of s ){
        
        if(symbol===")" && arr[arr.length-1]=="("){
            arr.pop();
            continue;
        }
        if(symbol==="]" && arr[arr.length-1]=="["){
            arr.pop();
            continue;

        }
        if(symbol==="}" && arr[arr.length-1]=="{"){
            arr.pop();
            continue;
        }
        arr.push(symbol);
        
    }

    return (arr.length)!=0 ?false:true;

};