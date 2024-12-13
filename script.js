const computerArray=["ROCK","PAPER","SCISSOR"];
const winnerArray=["computer","Human"];
function getComputerChoice(){
    return computerArray[(Math.floor(Math.random()*3))].toLowerCase();
}
function playGame(){
    const humanChoice=document.querySelector(".humanChoice");
const roundNumber=document.querySelector(".round");
let humanValue;
let computerValue;

let computerScore=0;
let humanScore=0;

let winner;
const roundWinner=document.createElement("div");
roundNumber.parentNode.appendChild(roundWinner);
let i=1;
//listen for human choice
function resetGame() {
    computerScore = 0;
    humanScore = 0;
    i = 1;
    roundWinner.innerHTML = "";
    roundNumber.innerHTML = "Round: 1";
    humanChoice.addEventListener("click", playRound);
    humanChoice.addEventListener("click", getHumanChoice);
}



humanChoice.addEventListener("click",getHumanChoice)
function getHumanChoice(event){
    if(event.target.tagName==="BUTTON")
        humanValue= event.target.firstChild.textContent.toLowerCase();
    else {
        humanValue=null;
    return;
    }
}
//listen for computer choice and play round

humanChoice.addEventListener("click",playRound)

function playRound(){
    let flag=0;

    if(humanValue)
        computerValue=getComputerChoice();
    else 
    return;
    if(humanValue!==computerValue)
        getRoundWinner();
    else
    {
        flag=1;
        computerScore+=.5;
        humanScore+=.5;
    }
    if(winner=terminateGame())
    {
        alert(`Winner is ${winner}!`)
        if(confirm("Play Again?")){
            resetGame();
return;
        }
            else{
        humanChoice.removeEventListener("click",playRound);
        humanChoice.removeEventListener("click",getHumanChoice)
        const doc=document.querySelector(".container");
        const thanks=document.createElement("div");
        thanks.textContent="Thanks!";
        thanks.style.fontSize="200px";
        thanks.style.textAlign="center";
        document.body.style.backgroundColor="rgb(46, 67, 67)";

        document.body.replaceChild(thanks,doc);
            }}
    roundNumber.innerHTML=`Round: ${++i}`;
    roundWinner.innerHTML=`Computer: ${computerScore}<br>Human: ${humanScore}`;
    if(flag===1)
        roundWinner.innerHTML="Game Tied<br>"+roundWinner.innerHTML


}
function getRoundWinner(){
    if((computerValue==="paper"&&humanValue==="rock")||(computerValue==="scissor" && humanValue==="paper")||(computerValue==="rock" && humanValue==="scissor"))
        computerScore++;
    else
        humanScore++;
    }
    function terminateGame(){
        console.log(`computer score is: ${computerScore} and human score is : ${humanScore}`);
        if(humanScore!=computerScore){
            if((humanScore>=5 || computerScore>=5))
               { 
                return getGameWinner();
               }
              
        }
        else if(humanScore===5)
            return winnerArray[Math.floor(Math.random()*2)];
    }
    function getGameWinner(){
        if(humanScore===Math.max(humanScore,computerScore))
            return "human";
        else 
            return "computer";
    }
}




playGame();