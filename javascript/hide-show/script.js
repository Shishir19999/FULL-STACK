var box=document.getElementById('box').style.background='green';

setTimeout(function(){
    box.style.background='green';

},5000)

function showmodel(){
    box.style.display='block';
}

setTimeout(showmodel,5000);

function hidemodel(){
    box.style.display='none';
}