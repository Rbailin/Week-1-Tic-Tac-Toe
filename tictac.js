var dog = true



document.getElementById('one').onclick=clickStuff;
document.getElementById('two').onclick=clickStuff;
document.getElementById('three').onclick=clickStuff;
document.getElementById('four').onclick=clickStuff;
document.getElementById('five').onclick=clickStuff;
document.getElementById('six').onclick=clickStuff;
document.getElementById('seven').onclick=clickStuff;
document.getElementById('eight').onclick=clickStuff;
document.getElementById('nine').onclick=clickStuff;


function clickStuff(){
if (dog)
{ 
  this.innerHTML='<img src="skatedog.jpeg" />';
  dog = false;
}
else 
{ 
  this.innerHTML='<img src="skateboard.jpeg" />';
    dog = true;
}
  
  };