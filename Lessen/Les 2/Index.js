
let Rockhtml = document.getElementById("Rock");
let Paperhtml = document.getElementById("Paper");
let Scissorshtml = document.getElementById("Scissors");


let lefthand = document.getElementById("left");
let righthand = document.getElementById("right");


Rockhtml.setAttribute("src","Images/rock.png");
Scissorshtml.setAttribute("src","Images/scissors.png");
Paperhtml.setAttribute("src","Images/paper.png");

let winner = document.getElementById("winner");
let choice = 0;
let cpuChoice = 0;


let imgs = ["Images/rock.png", "Images/paper.png" , "Images/scissors.png"];
Rockhtml.onclick = function(){
    console.log(this.id);
    choice = 1;
    select(choice); 
    cpuTurn();
    checkWinner();
}

Paperhtml.onclick = function(){
    console.log(this.id);
    choice = 2;
    select(choice);
    cpuTurn();
    checkWinner();
}

Scissorshtml.onclick = function(){
    console.log(this.id);
    choice = 3;
    select(choice);
    cpuTurn();
    checkWinner();
}

let isPlayerTurn=true;
function select(choice){
    lefthand.setAttribute("src", imgs[choice-1]);
}
function cpuTurn(){
    let value = Math.floor(Math.random() * imgs.length);
    console.log(value);
    righthand.setAttribute("src", imgs[value]);
    cpuChoice = value + 1;
}

function checkWinner(){
 //1 steen
 //2 papier
//3 schaar
if(choice == cpuChoice){
    console.log("draw");
    return;
     }
 if(choice == 1){
     if (cpuChoice ==3){
        console.log("player 1 wins");
    }
    else{
        console.log("player 2 wins");
      }
     }
    

    if(choice == 2){
        if (cpuChoice == 1){
    console.log("player 1 wins");
    winner.innerHTML = "WIN";
    }
    else{
    console.log("player 2 wins");
    }
    }
    
    if(choice == 3){
        if (cpuChoice ==2){
    console.log("player 1 wins");
    }
    else{
    console.log("player 2 wins");
    }
    }
    }
    