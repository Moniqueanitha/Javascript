
//variables
let rollsLeft = 3;
let diceArray = [1,2,3,4,5];

let ones = twos = threes = threes = fours = fives = sixes = 0;
let topSum = [0, 0, 0, 0, 0, 0];

function scoreAdd() {

  topSum.splice(0, 1, (document.getElementById("oneTop").value));
  topSum.splice(1, 1, (document.getElementById("twoTop").value));
  topSum.splice(2, 1, (document.getElementById("threeTop").value));
  topSum.splice(3, 1, (document.getElementById("fourTop").value));
  topSum.splice(4, 1, (document.getElementById("fiveTop").value));
  topSum.splice(5, 1, (document.getElementById("sixTop").value));

};

function calculateTotalScore() {
  const inputFields = document.querySelectorAll('.top');
  let totalScore = 0;
  inputFields.forEach((inputField) => {
    const value = parseInt(inputField.value) || 0;
    totalScore += value;
  });
  document.getElementById("topSum").innerHTML = "your score is: " + totalScore;

  return totalScore;
}


function setTopScores(multiples) {
  for (let i = 0; i < multiples.length; i++) {
    var num = multiples[i].number;
    var count = multiples[i].count;
    var inputId;
    if (num === 1) {
      inputId = `oneTop`;
    } else if (num === 2) {
      inputId = `twoTop`;
    } else if (num === 3) {
      inputId = `threeTop`;
    } else if (num === 4) {
      inputId = `fourTop`;
    } else if (num === 5) {
      inputId = `fiveTop`;
    } else if (num === 6) {
      inputId = `sixTop`;
    }
    document.getElementById(inputId).value = (num * count);
  }
  calculateTotalScore()
}


//hier word de score geteld
function addTopSum(total, num) {
  return total + num;
};

function randomDice(){
  diceArray = [];
  for (let i = 0; i < 5; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    diceArray.push(roll);
  }
  console.log("Dice Array:", diceArray);
  calculateScoreOnes();
}

function calculateScoreOnes(){
  let scoreOnes = 0;
  for (let i = 0; i < diceArray.length; i++) {
    if (diceArray[i] === 1) {
      scoreOnes += 1;
    }
  }
  console.log("Score Ones:", scoreOnes);
  return scoreOnes;
}

function detectMultiples() {
  let diceCounts = [0, 0, 0, 0, 0, 0];
  
  // Loop through all the dice images and count the occurrences of each number
  for (let i = 1; i <= 5; i++) {
    let diceImage = document.getElementById("dice-" + i);
    let diceNumber = diceImage.src.match(/dice-(\d)\.png/)[1]; // Extract the number from the image src
    diceCounts[diceNumber - 1]++; // Increment the count for the corresponding number
  }
  
  let multiples = [];
  
  // Loop through the dice counts and add any multiples to the array
  for (let i = 0; i < diceCounts.length; i++) {
    if (diceCounts[i] > 1) {
      multiples.push({number: i + 1, count: diceCounts[i]});
    }
  }
  
  return multiples;
}



document.querySelector(".addScoresButton").addEventListener("click", function () {
  calculateTotalScore()
});


//hier word de dice gerold.

document.querySelector(".rollButton").addEventListener("click", function () {

  

    if (rollsLeft > 0) {
      if (document.querySelector(".btnHoldOne").classList.contains("btn-secondary")) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        document.getElementById("dice-1").style.display = "block";
        document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
        document.querySelector("#dice-1").classList.add("roll");
      };
      if (document.querySelector(".btnHoldTwo").classList.contains("btn-secondary")) {
        var dice2 = Math.floor(Math.random() * 6) + 1;
        document.getElementById("dice-2").style.display = "block";
        document.getElementById("dice-2").src = "dice-" + dice2 + ".png";
        document.querySelector("#dice-2").classList.add("roll");
      };
      if (document.querySelector(".btnHoldThree").classList.contains("btn-secondary")) {
        var dice3 = Math.floor(Math.random() * 6) + 1;
        document.getElementById("dice-3").style.display = "block";
        document.getElementById("dice-3").src = "dice-" + dice3 + ".png";
        document.querySelector("#dice-3").classList.add("roll");
      };
      if (document.querySelector(".btnHoldFour").classList.contains("btn-secondary")) {
        var dice4 = Math.floor(Math.random() * 6) + 1;
        document.getElementById("dice-4").style.display = "block";
        document.getElementById("dice-4").src = "dice-" + dice4 + ".png";
        document.querySelector("#dice-4").classList.add("roll");
      };
      if (document.querySelector(".btnHoldFive").classList.contains("btn-secondary")) {
        var dice5 = Math.floor(Math.random() * 6) + 1;
        document.getElementById("dice-5").style.display = "block";
        document.getElementById("dice-5").src = "dice-" + dice5 + ".png";
        document.querySelector("#dice-5").classList.add("roll");
      };
    //trek 1 af van het aantal rollen
    rollsLeft--;

  } else {
//knoppen en kleuren
    document.querySelector(".rollButton").classList.toggle("btn-dark");
    document.querySelector(".rollButton").classList.toggle("btn-light");
    document.querySelector(".nextTurnButton").classList.toggle("btn-warning");
    document.querySelector(".nextTurnButton").classList.toggle("btn-light");
  }

  setTimeout(function() {
    var dice = document.querySelectorAll(".dice");
    for(var i = 0; i < dice.length; i++) {
      dice[i].classList.remove("roll");
    }
  }, 1000);


  setTopScores(detectMultiples())

});


// knop volgende beurt, waardoor meer rollen mogelijk zijn
document.querySelector('.nextTurnButton').addEventListener('click', function () {

  reset();

});


// knop new game
document.querySelector(".newGameButton").addEventListener("click", function () {
  reset();
  //score reset
});



// hold knoppen
// eerste hold knop
document.getElementById("btnHoldOne").addEventListener("click", function () {
  document.querySelector(".btnHoldOne").classList.toggle("btn-primary");
  document.querySelector(".btnHoldOne").classList.toggle("btn-secondary");
});
// eerste hold knop
document.getElementById("btnHoldTwo").addEventListener("click", function () {
  document.querySelector(".btnHoldTwo").classList.toggle("btn-primary");
  document.querySelector(".btnHoldTwo").classList.toggle("btn-secondary");
});
// tweede hold knop
document.getElementById("btnHoldThree").addEventListener("click", function () {
  document.querySelector(".btnHoldThree").classList.toggle("btn-primary");
  document.querySelector(".btnHoldThree").classList.toggle("btn-secondary");
});
// derde hold knop
document.getElementById("btnHoldFour").addEventListener("click", function () {
  document.querySelector(".btnHoldFour").classList.toggle("btn-primary");
  document.querySelector(".btnHoldFour").classList.toggle("btn-secondary");
});
// vierde hold knop
document.getElementById("btnHoldFive").addEventListener("click", function () {
  document.querySelector(".btnHoldFive").classList.toggle("btn-primary");
  document.querySelector(".btnHoldFive").classList.toggle("btn-secondary");
});


//functie om roll terug te zetten naar 3/next turn knoppen te resetten
function reset() {
  const inputFields = document.querySelectorAll('.top');
  inputFields.forEach((inputField) => {
    inputField.value = '';
  });
  document.getElementById("topSum").innerHTML = "your score is: " + 0;


  rollsLeft = 3;
//knoppen
  if (document.querySelector(".rollButton").classList.contains("btn-dark")) {
    document.querySelector(".rollButton").classList.toggle("btn-dark");
    document.querySelector(".rollButton").classList.toggle("btn-light");
    document.querySelector(".nextTurnButton").classList.toggle("btn-warning");
    document.querySelector(".nextTurnButton").classList.toggle("btn-light");
  };

  var dice1 = dice2 = dice3 = dice4 = dice5 = 6;

  document.getElementById("dice-1").style.display = "block";
  document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
  document.getElementById("dice-2").style.display = "block";
  document.getElementById("dice-2").src = "dice-" + dice2 + ".png";
  document.getElementById("dice-3").style.display = "block";
  document.getElementById("dice-3").src = "dice-" + dice3 + ".png";
  document.getElementById("dice-4").style.display = "block";
  document.getElementById("dice-4").src = "dice-" + dice4 + ".png";
  document.getElementById("dice-5").style.display = "block";
  document.getElementById("dice-5").src = "dice-" + dice5 + ".png";

  resetHoldButtons();

};

// hold knop deactivate 
function resetHoldButtons() {

  if (document.querySelector(".btnHoldOne").classList.contains("btn-primary")) {
    document.querySelector(".btnHoldOne").classList.toggle("btn-primary");
    document.querySelector(".btnHoldOne").classList.toggle("btn-secondary");
  };

  if (document.querySelector(".btnHoldTwo").classList.contains("btn-primary")) {
    document.querySelector(".btnHoldTwo").classList.toggle("btn-primary");
    document.querySelector(".btnHoldTwo").classList.toggle("btn-secondary");
  };

  if (document.querySelector(".btnHoldThree").classList.contains("btn-primary")) {
    document.querySelector(".btnHoldThree").classList.toggle("btn-primary");
    document.querySelector(".btnHoldThree").classList.toggle("btn-secondary");
  };

  if (document.querySelector(".btnHoldFour").classList.contains("btn-primary")) {
    document.querySelector(".btnHoldFour").classList.toggle("btn-primary");
    document.querySelector(".btnHoldFour").classList.toggle("btn-secondary");
  };

  if (document.querySelector(".btnHoldFive").classList.contains("btn-primary")) {
    document.querySelector(".btnHoldFive").classList.toggle("btn-primary");
    document.querySelector(".btnHoldFive").classList.toggle("btn-secondary");
  };

};