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


infos().then((res)=>{
    console.log(res);
    
})
.catch((err)=>{
    console.log(err);
});



function studentTask(){
    
    return "i am a student Task "
}

function getDatas(){
    let data=studentTask();
    console.log(data);
    console.log("i am  datas");

}

getDatas();