console.log(new Date());

let dt = new Date();
let ld = dt.toLocaleDateString();
let lt = dt.toLocaleTimeString();
console.log(lt);
console.log(ld);

setInterval(function () {
  let dt = new Date();
  let lt = dt.toLocaleTimeString();
  console.log(lt);
  document.getElementById('container').innerHTML = lt;
}, 1000);

function myclock() {
  let dt = new Date();
  let lt = dt.toLocaleTimeString();
  document.getElementById('container').innerHTML = lt;
}

setInterval(myclock, 1000);
