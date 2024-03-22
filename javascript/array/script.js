//printing multidimensional array

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
for(let x=0;x<numb.length;x++){
    console.log(numb[x]);
}

//print all element in array

let numbers=[45,67,88,78,98,89];
console.log(numbers);


//prototype

//length of array

let nu=[5,6,67,47];
console.log(nu);
console.log(nu.length);
console.log(nu[1]);

//for each

let num=[6,5,67,87,66];
num.forEach((x)=>{
    console.log(x);
})

//at

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index= 2;
let fruit=fruits.at(index);
console.log(fruit);

const f = ["Banana", "Orange", "Apple", "Mango"];
let frt=f[2];
console.log(frt);

const frui = ["Banana", "Orange", "Apple", "Mango"];
let fru=frui.at(-1);
console.log(fru);

//concat

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);
console.log(children);

const ar1 = ["Cecilie", "Lone"];
const ar2 = ["Emil", "Tobias", "Linus"];
const ar3=["robin"];
const child=ar1.concat(ar2,ar3);
console.log(child);

//copywithin

const fruity = ["Banana", "Orange", "Apple", "Mango", "Kiwi","strawberry","rhodo"];
let fuiti=fruity.copyWithin(3, 0);
console.log(fuiti);

const dui = ["Banana", "Orange", "Apple", "Mango", "Kiwi","strawberry","rhodo"];
dui.copyWithin(2, 0, 3);
console.log(dui);

//push , unshift , splice

let course=["prog12", "prog124", "prog123"];
course.push("prog125","prog126");
console.log(course);

course.unshift("prog127","prog128")
console.log(course);

course.splice(1,0,"prog129");
console.log(course);
course.splice(1,2,"prog129");
console.log(course);
course.splice(2,3,"prog129");
console.log(course);


//map ,filter ,reduce

let numbe=[10,4,5,17,50];
let newarr=[];
for(let n of numbe){
    newarr.push(n.toString());
}
console.log(newarr);

let numbe2r=[10,4,5,17,50];
let newar=[];
for(let n of numbe2r){
    if(n%2==0){
        newar.push(n);
    }
    
}
console.log(newar);

let nu2=[10,4,5,17,50];
let highest=0;
for(let n2 of nu2){
    if(n2>highest){
        highest=n2;
    }
}

console.log(highest);