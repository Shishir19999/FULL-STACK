
for(let x=1;x<=10;x++){
    console.log(x);
}

let output=" ";
for(let x=1;x<=20;x++)
{
    output+=`<div class="box"></div>`;
}

{
    if(x%2==0){
        output+=`<div class="even"></div>`;
    }
    else{
        output+=`<div class="odd"></div>`;
    }
}

console.log(output);

document.getElementById("container").innerHTML=output;

let numbers=[45,67,78,98,89];
let add=0;
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);

    add+=numbers[i];
}
console.log(add);