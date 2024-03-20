// odd / even boxes different color

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


//addition of each element in array

let n=[45,67,78,98,89];
let add=0;
for(let i=0;i<n.length;i++){
    console.log(n[i]);

    add+=n[i];
}
console.log(add);

//printing array using loop

let num=[6,5,67,87,66];
for(let x=0;x<num.length;x++){
    console.log(num[x])
}

//for in/ for of

for(let x in num){
  console.log(x)
}
for(let x of num){
    console.log(x)
  }


//printing multidimensional array using loop

number=[
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]
for(let x=0;x<number.length;x++){
    for(let a=0;a<number[x].length;a++){
        console.log(number[x][a])
    }
}

//printing all element in array using loop

let numb=[6,5,67,87,66]
for(let x=0;x<=numb.length;x++){
    console.log(numb[x]);
}

//print all element in array

let numbers=[45,67,88,78,98,89];
console.log(numbers);