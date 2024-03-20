//alerts

alert('hello world');

var UserName='admin';
var pass='admin002';

console.log(UserName,pass);
alert(UserName);

//innerhtml usuage

document.getElementById('result').innerHTML="username:admin";
document.getElementById('result').innerHTML=UserName;
document.getElementById('username').innerHTML="username:admin";
document.getElementById('password').innerHTML="password:admin002";
var box=document.getElementById('box').style.background='green';

document.getElementById("ID").innerHTML="id:0001";
document.getElementById("name").innerHTML="name:shishir";
document.getElementById("email").innerHTML="email:shishir3fjfj";
document.getElementById("address").innerHTML="add:torroof";
document.getElementById("phone").innerHTML="phone:2343546466";

//form filling

let full_Name="Shishir sharma";
let email="shishir@yahoo.com";
let address="balkuty";
let phone=65576676767;
let city="ktm";

console.log(full_Name , email,address , phone, city);
console.log("Full NAme:",full_Name );
console.log("Email:",email);
console.log("address:",address);
console.log("Phone:", phone);
console.log("City:" ,city);
let output=`
<h1>Full Name: ${full_Name}</h1>
<p>Email: ${email}</p>
<p>Address: ${address}</p>
<p>Phone: ${phone}</p>
<p>City: ${city}</p>

`;

document.getElementById("info").innerHTML=output;


// addition with function

console.log(5+7);
console.log(53+72);

function add(x,y){
 console.log(x+y);
}

add(45,67);
add(43,7);


let a=5;
let b=6;
let c=67;

console.log(a);
console.log(b);
console.log(c);