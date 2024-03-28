let students = {
  name: 'ram',
  age: 34,
  info: {
    phone: 4578578674,
    address: 'ktm',
  },
};

console.log(students.name);
console.log(students.age);
console.log(students.info.address);

let student = [
  { name: 'ram', age: 34, phone: 34536667,gender:"male" },
  { name: 'sita', age: 23, phone: 35436363 ,gender:"female"},
  { name: 'hari', age: 12, phone: 453636773,gender:"male" },
  { name: 'gita', age: 56, phone: 35253534646,gender:"female" },
];

console.log(student[0].name);
console.log(student[1].age);

for (let x = 0; x < student.length; x++) {
  console.log(student[x].name);
  console.log(student[x].age);
  console.log(student[x].phone);
  console.log(student[x].gender);
}

student.forEach((s) => {
  console.log(s.name);
  console.log(s.age);
  console.log(s.phone);
  console.log(s.gender);
});

let output = '';
student.forEach((s, index) => {
  output += `<tr>
    <td>${++index}</td>
    <td>${s.name}</td>
    <td>${s.age}</td>
    <td>${s.phone}</td>
    <td>${s.gender}</td>
    </tr>`;
});

console.log(output);
const std=document.getElementById("students-list").innerHTML=output;

let mcount=0;
let fcount=0;
if(s.gender==male){
  mcount++;
}
else if(s.gender==female){
  fcount++;
}
document.getElementById("totalmale").innerHTML=mcount;
document.getElementById("totalfemale").innerHTML=fcount;