var dog = true
var not_clicked = true //This is a global varible// 




document.getElementById('one').onclick=clickStuff;
document.getElementById('two').onclick=clickStuff;
document.getElementById('three').onclick=clickStuff;
document.getElementById('four').onclick=clickStuff;
document.getElementById('five').onclick=clickStuff;
document.getElementById('six').onclick=clickStuff;
document.getElementById('seven').onclick=clickStuff;
document.getElementById('eight').onclick=clickStuff;
document.getElementById('nine').onclick=clickStuff;



// if 
//     	alert("Hello")
//             // {this.value=symbol;
//         // numMoves ++;
//         // document.secondForm.currentmove.value= currentmove;

//          }

//      else {

//       alert("This square is occupied");

//     };


function clickStuff(){
if (this.innerHTML=="")
{
	if (dog)
	{ 
	  this.innerHTML='<img src="skatedog.jpeg" />';
	  dog = false;
	}
	else 
	{ 
	  this.innerHTML='<img src="UndieSkate.jpg" />';
	    dog = true;
	}
 }
 else
 {
 	alert("This space is occupied")
 }
 };
    










