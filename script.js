//your JS code here. If required.
document.getElementById('submit').onclick=function(){
	document.querySelector('.input-section').style.display='none';
	document.querySelector('.game-section').style.display='block';


const player1=document.getElementById("player-1").value;
const player2=document.getElementById("player-2").value;

let turn='X';
let currPlayer=player1;

const cell=document.querySelectorAll(".cell");

document.querySelector(".message").textContent=player1+" you're up";

cell.forEach(cell => {
	cell.onclick=function(){
		if(cell.textContent===''){
			cell.textContent=turn;
			if(turn==='X'){
				turn='O';
				currPlayer=player2;
			}else{
				turn='X';
				currPlayer=player1;
			}
			document.querySelector(".message").textContent=currPlayer+" you're up.";
		}
	}
});
}