
  
   let hands = ["rock", "paper", "scissors"];
let randomItem = () => {
  const randomHands = Math.floor(Math.random() * hands.length);
  return hands[randomHands];
};

const playButton = document.getElementById("playButton");
const hand1Div = document.getElementById("hand1-btn");
const hand2Div = document.getElementById("hand2-btn");
const resultMessage = document.getElementById("resultMessage");

const rockPaperScissors = (hand1, hand2) => {
  // Check for tie
  if (hand1 === hand2) {
    return "It's a tie!";
  }
  // Determine the winner
  if (
    (hand1 === "rock" && hand2 === "scissors") ||
    (hand1 === "scissors" && hand2 === "paper") ||
    (hand1 === "paper" && hand2 === "rock")
  ) {
    return "Hand one wins!";
  } else if (
    (hand2 === "rock" && hand1 === "scissors") ||
    (hand2 === "scissors" && hand1 === "paper") ||
    (hand2 === "paper" && hand1 === "rock")
  ) {
    return "Hand two wins!";
  } else {
    return "Invalid input!";
  }
};

playButton.addEventListener("click", () => {
  let hand1Formatted = randomItem();
  let hand2Formatted = randomItem();
  hand1Div.textContent = hand1Formatted;
  hand2Div.textContent = hand2Formatted;
  let result = rockPaperScissors(hand1Formatted, hand2Formatted);
  resultMessage.textContent = result;
});
