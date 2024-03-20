//number compare

let x=20;
let y=20;
console.log(x+y);

if(x>y){
    console.log("x is greater");
}
else if(x==y){
    console.log("both are equal");

}
else{
    console.log("y is greater");
    
}

//authentication

let username="admin";
let password="admin002";

if(username=='admin' && password=='admin0025'){
    console.log("welcome to", username);
}
else{
    console.log("invalid");
}
if(username=='admin' || password=='admin0025'){
    console.log("welcome to", username);
}
else{
    console.log("invalid");
}

//marks comparision

let nep=52;
let mat=52;
let soc=0;
let sci=0;
let bio=0;
let total=nep+mat+soc+sci+bio;
let per=total/5;

console.log("total marks", total);
console.log("total percent", per);
if(per>35 && per<45){
    console.log("third division");
}
else if(per>45 && per<60){
    console.log("second division");
}
else if(per>60 && per<75){
    console.log("first division");
}
else if(per>75){
    console.log(" distinction");
}
else{
    console.log("fail")
}

let n=5;
if(n%2==0){
    console.log("even");
}
else{
    console.log("odd");

}

//condition check

let std_name="ram";
let dep="education";
if(std_name=="ram"){
    if(dep=="education"){
        console.log("welcome", std_name,"in", dep,"department");
        console.log(`welcome ${std_name} in ${dep} department`)
    }
    else{
        console.log("invalid depart");
    }
}
else{
    console.log("invalid std name");
}
//sorting

x=8
y=60
z=100

if (x>y){
    if (x>z){
        if (y>z){
            console.log(x,y,z);
        }
        else{
            console.log(x,z,y);
        }
    }
    else{
        console.log(z,x,y);
    }
}
else{
    if (y>z){
        if (x>z){
            console.log(y,x,z);
        }
        else{
            console.log(y,z,x);
        }
    }
    else{
        console.log(z,y,x);
    }
}


// greatest number

if (x>y){
     if (x>z){
         console.log("x is greater");
     }
     else{
         console.log("z is greater");
     }
    }

 else{
     if (y>z){
         console.log("y is greater");
     }
     else
     {
         console.log("z is greater");
     }
    }