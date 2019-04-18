var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");
var pl_count = document.querySelector("h5 span");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var winningScoreDisplay = document.querySelector("input");
var count1 = 0;
var count2 = 0;
var gameOver = false;
var winningScore = 5;
button1.addEventListener("click",function(){
if(!gameOver)
{	count1+=1;
if(count1 === winningScore)
	{
		gameOver = true;
		score1.classList.add("gameOver");
		alert("Player 1 wins!");
	}	
score1.textContent = count1;
}	
})


button2.addEventListener("click",function(){

if(!gameOver)
{	count2+=1;
if(count2 === winningScore)
	{
		gameOver = true;
		score2.classList.add("gameOver");
		alert("Player 2 wins!");
	}	
score2.textContent = count2;
}	
})


button3.addEventListener("click",function(){
	reset();})

function reset() {
score1.textContent = 0;
score2.textContent = 0;	
score1.classList.remove("gameOver");
score2.classList.remove("gameOver");
count1 = 0;
count2 = 0;
gameOver = false;
}

winningScoreDisplay.addEventListener("change",function(){

	pl_count.textContent = this.value;
	winningScore = Number(this.value)
	reset();
;})