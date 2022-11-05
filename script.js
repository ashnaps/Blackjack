// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
// 2. Create a variable, sum, and set it to the sum of the two cards

let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardsEl=document.querySelector("#cards-el");
let firstCard=getRandomCard();
let secondCard=getRandomCard();
let cards=[firstCard, secondCard]
let sum = firstCard+secondCard;
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


function renderGame(){
    let message;

    cardsEl.textContent="Cards: ";
    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent +=cards[i]+" ";
    }

if(sum<=20){
    message="Do you want to draw a new card? 🙂";
}
else if(sum===21){
    message="Wohoo! You've got Blackjack! 🥳";
}
else{
    message="You're out of the game! 😭";
}
    messageEl.textContent=message;
    sumEl.textContent="Sum: "+sum;
    //carsdEl.textContent="Card: "+firstCard+" "+secondCard;
    //carsdEl.textContent="Card: "+cards[0]+" "+cards[1];
    
}
function getRandomCard() {
    return Math.floor(Math.random() * 13) + 1
}



function newCard(){
    let card=getRandomCard();
    cards.push(card);
    console.log(cards);
    sum=sum+card;
    renderGame();
}

function startGame(){
    renderGame();
}