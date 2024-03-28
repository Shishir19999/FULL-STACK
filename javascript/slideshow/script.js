let slideindex = 0;

function customimageslider() {
  let box = document.getElementsByClassName('sliderbox');
  for (let i = 0; i < box.length; i++) {
    box[i].style.display = 'none';
  }
  slideindex++;
  if (slideindex > box.length) {
    slideindex = 1;
  }
  box[slideindex - 1].style.display = 'block';
  console.log(slideindex);
  setTimeout(customimageslider, 2000);
}

customimageslider();
