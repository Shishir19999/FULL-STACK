function studentTask(){
    return new Promise((resolve,reject)=>{
        let task=true;
        setTimeout(()=>{
            if(task){
                resolve("task is done");
                
            }
            else{
                reject("task is not done");
            }
        },2000)
    })
}

async function getDatas(){
    let data=await studentTask();
    console.log(data);
    console.log("i am  datas");

}

getDatas();