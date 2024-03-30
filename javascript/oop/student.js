class student{
    x=10;
    info(){
        console.log("student info");
    }
}

let s=new student();
console.log(s.x);
s.info();


class calculator{
    add(a,b){
        return a+b;
    }
    sub(a,b){
        return a-b;
    }
    mul(a,b){
        return a*b;
    }
    div(a,b){
        return a/b;
    }
}
let cal= new calculator();
console.log(cal.add(10,20));
console.log(cal.sub(10,20));
console.log(cal.mul(10,20));
console.log(cal.div(10,20));


class students{
    constructor(){
        console.log("i am constructor");
    }
    infos(){
        console.log("i am information");
    }
    static getStudent(){
        console.log("i am static");
    }
}


students.getStudent();
let std=new students();


//inheritance

class Dell{
    brand(){
        console.log("dell");
    }
}

class Toshiba{
    brand(){
        console.log("toshiba");
    }
}

let d= new Dell();
d.brand();
let t= new Toshiba();
t.brand();


class Laptop{
    brand(name){
        console.log(`i am ${name} Laptop`);
    }
}

class Dells extends Laptop{
    price(){

    }
}
class Toshibas extends Laptop{
 RAM(){

 }   
}
let dl= new Dells();
dl.brand("Dell");
let tl= new Toshibas();
tl.brand("Toshiba");


