// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
// 2. Create a variable, sum, and set it to the sum of the two cards
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardsEl=document.getElementById("cards-el");


//console.log(sum);

// if (sum<21){
//     console.log("Do you want to draw a new card? 🙂");
// }

// else if(sum === 21){
//     console.log("Wohoo! You've got a blackjack 🥳");
// }

// else {
//     console.log("You're out of the game 😭");
// }

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

/*let age = 22
if(age<=20){
    console.log("You can not enter the club!");
}
else{
    console.log("Welcome!");
}*/


// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " "
// }

function getRandomCard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
   // return Math.floor(Math.random() * 13) + 1
}

function startGame(){
    isAlive = true
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard, secondCard]
    sum = firstCard+secondCard;
    renderGame();
}

function renderGame(){
    let message;
    cardsEl.textContent="Cards: ";
    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent +=cards[i]+" ";
    }
    sumEl.textContent="Sum: "+sum;

if(sum<=20){
    message="Do you want to draw a new card? 🙂";
}
else if(sum===21){
    message="Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true
}
else{
    message="You're out of the game! 😭";
    isAlive = false
}
    messageEl.textContent=message;
    
    //carsdEl.textContent="Card: "+firstCard+" "+secondCard;
    //carsdEl.textContent="Card: "+cards[0]+" "+cards[1];
    
}

function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }

}

