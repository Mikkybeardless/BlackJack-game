
  var cards = [];
  var sum = 0;
  var hasBlackjack = false;
  var isAlive = false;
  var message = "";

  var player = {
     name: "Per",
     chips: 300
  };

  var playerEl = document.querySelector(".player-el");
  var messageEl = document.querySelector(".message-el");
  var sumEl = document.querySelector(".sum-el");
  var cardEl = document.querySelector(".card-el");
  var startBtn = document.querySelector(".start");
  var newBtn = document.querySelector(".new");


function getRandomCard(){

  var randomCard = Math.floor(Math.random() * 13) + 1;
  if(randomCard === 1){
    return 11;
  } else if (randomCard >= 11){
    return 10;
  } else {
    return randomCard;
  }

}

// the initiating function
   startBtn.addEventListener("click", startGame);
   function startGame(){
     var firstCard = getRandomCard();
     var secondCard = getRandomCard();
      cards = [firstCard, secondCard];
      sum = firstCard + secondCard;
     isAlive = true;
     renderGame();
}

function renderGame(){
   cardEl.textContent = "Cards: "
   // loop rendering all the cards
   for(var i = 0; i < cards.length; i++){
     cardEl.textContent += " " + cards[i] + " ";
    }
   // changing the text content of sum element
    sumEl.textContent = "Sum: " + sum;
  if (sum <= 20){
    message = "Do you want to draw another card? ";

    }
  else if (sum === 21){
    message = "You've got Blackjack";
    hasBlackjack = true;
    }
  else {
    message = "You are out of the game!";
    isAlive = false;
    }
 messageEl.textContent = message;


}

 newBtn.addEventListener("click", newCard);
function newCard(){
// checking wether player is eligible to draw a new card
if (isAlive === true && hasBlackjack === false){
  var card = getRandomCard();
    cards.push(card);
    sum += card;

  renderGame();
    }

}

  playerEl.textContent = player.name + ": $" + player.chips
