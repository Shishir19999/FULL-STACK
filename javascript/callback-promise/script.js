function info(){
    setTimeout(function(){
        
        console.log("i am info");
    },2000)

}

function getData(){
    console.log("i am get data");

}

info();
getData();

function infos(){
    return new Promise((resolve,reject)=>{
        let task=false;
        setTimeout(()=>{
            if(task){
                resolve("task complete");
                
            }
            else{
                reject("task not complete");
            }
        },2000)
    })
}

console.log(infos());