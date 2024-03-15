// alert('hello world');

// var UserName='admin';
// var pass='admin002';

// console.log(UserName,pass);
// alert(UserName);
// document.getElementById('result').innerHTML="username:admin";
// document.getElementById('result').innerHTML=UserName;
// document.getElementById('username').innerHTML="username:admin";
// document.getElementById('password').innerHTML="password:admin002";

// var box=document.getElementById('box').style.background='green';

// setTimeout(function(){
//     box.style.background='green';

// },5000)

// function showmodel(){
//     box.style.display='block';
// }

// setTimeout(showmodel,5000);

// function hidemodel(){
//     box.style.display='none';
// }

//  id=document.getElementById("ID").innerHTML="id:0001";
//  id=document.getElementById("name").innerHTML="name:shishir";
//  id=document.getElementById("email").innerHTML="email:shishir3fjfj";
//  id=document.getElementById("address").innerHTML="add:torroof";
//  id=document.getElementById("phone").innerHTML="phone:2343546466";

let full_Name="Shishir sharma";
let email="shishir@yahoo.com";
let address="balkuty";
let phone=65576676767;
let city="ktm";

// console.log(full_Name , email,address , phone, city);
// console.log("Full NAme:",full_Name );
// console.log("Email:",email);
// console.log("address:",address);
// console.log("Phone:", phone);
// console.log("City:" ,city);
let output=`
<h1>Full Name: ${full_Name}</h1>
<p>Email: ${email}</p>
<p>Address: ${address}</p>
<p>Phone: ${phone}</p>
<p>City: ${city}</p>

`;

document.getElementById("info").innerHTML=output;