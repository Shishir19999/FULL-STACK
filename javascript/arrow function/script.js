function info(){
    console.log("I am function");

}
info();

let infos=()=>{
    console.log("I am arrow Function");
}

infos();

setTimeout(function(){
    console.log("function");
},1000)


setTimeout(()=>{
    console.log("Arrow function");
},2000)