var dog = true
var nums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var moves = [[null, null, null], [null, null, null], [null, null, null]];
for(var i in nums)
	document.getElementById(nums[i]).onclick=clickStuff;

var counter = 0;



function clickStuff(){
	counter++;
	if (counter == 9)
	{
		console.log("Game End");
		alert("Road Rash - Game End!")
	}

if (this.innerHTML=="")
{
	if (dog)
	{ 

	  this.innerHTML='<img src="skatedog.jpeg" />';
	for(var i in nums)	
	if (this.id==nums[i]) 
		moves [Math.floor(i / 3)] [i % 3] = "x";

			dog = false;
	}
	else 
	{ 
	  this.innerHTML='<img src="UndieSkate.jpg" />';

	  for(var i in nums)	
	if (this.id==nums[i]) 
		moves [Math.floor(i / 3)] [i % 3] = "o";
	    dog = true;
	}
 }
 else
 {
 	alert("TOO GNARCORE") 
 }


checkWin();
}



function checkWin(){
if (moves [0][0]=="x" && moves [1][0]=="x" && moves [2][0]=="x")
	alert("You Win - So Stoked!");

else if (moves [0][1]=="x" && moves [1][1]=="x" && moves [2][1]=="x")
	alert("You Win - So Stoked!");

else if (moves [0][2]=="x" && moves [1][2]=="x" && moves [2][2]=="x")
	alert("You Win - So Stoked!");

else if (moves [1][0]=="x" && moves [1][1]=="x" && moves [1][2]=="x")
	alert("You Win - So Stoked!");

else if (moves [2][0]=="x" && moves [2][1]=="x" && moves [2][2]=="x")
	alert("You Win - So Stoked!");

else if (moves [0][0]=="x" && moves [1][1]=="x" && moves [2][2]=="x")
	alert("You Win - So Stoked!");

else if (moves [2][0]=="x" && moves [1][1]=="x" && moves [0][2]=="x")
	alert("You Win - So Stoked!");

else if (moves [0][0]=="x" && moves [0][1]=="x" && moves [0][2]=="x")
	alert("You Win - So Stoked!");

else

if (moves [0][0]=="o" && moves [1][0]=="o" && moves [2][0]=="o")
	alert("You Win - So Stoked!");

 if (moves [0][1]=="o" && moves [1][1]=="o" && moves [2][1]=="o")
	alert("You Win - So Stoked!");

 if (moves [0][2]=="o" && moves [1][2]=="o" && moves [2][2]=="o")
	alert("You Win - So Stoked!");

 if (moves [1][0]=="o" && moves [1][1]=="o" && moves [1][2]=="o")
	alert("You Win - So Stoked!");

 if (moves [2][0]=="o" && moves [2][1]=="o" && moves [2][2]=="o")
	alert("You Win - So Stoked!");

 if (moves [0][0]=="o" && moves [1][1]=="o" && moves [2][2]=="o")
	alert("You Win - So Stoked!");

 if (moves [2][0]=="o" && moves [1][1]=="o" && moves [0][2]=="o")
	alert("You Win - So Stoked!");

 if (moves [0][0]=="o" && moves [0][1]=="o" && moves [0][2]=="o")
	alert("You Win - So Stoked!");


}


function reset(){
	var cells = document.getElementsByClassName("tile");
	for(var i=0; i<cells.length; i++) 
{
		cells[i].innerHTML="";
	}
	moves= [[null, null, null], [null, null, null], [null, null, null]];
}





 /*function gameHasEnded(){
return horizontalWin() || verticalWin() || diagonalWin() || boardFull();
 }
function horizontalWin(){}
function verticalWin(){}
function diagonalWin(){}
function boardFull(){}
 */