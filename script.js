let firstCard = 1;
let secondCard = 1;
let sum = firstCard + secondCard;
let hasBlackJack = false;

if (sum <= 20) {
    console.log("Do you want to draw a new card?");
} else if (sum === 21) {
    console.log("You've got a Blackjack!");
    hasBlackJack = true;
} else {
    console.log("You're out of the game!");
}