let coinFlip = Math.round(Math.random());
let choice = window.prompt("Select 'Heads' or 'Tails'");

if (coinFlip === 0 && choice === "Heads") {
  window.alert("The flip was heads and you chose heads...you win!");
} else if (coinFlip === 0 && choice === "Tails") {
  window.alert("The flip was heads but you chose tails...you lose!");
} else if (coinFlip === 1 && choice === "Heads") {
  window.alert("The flip was tails but you chose heads...you lose!");
} else if (coinFlip === 1 && choice === "Tails") {
  window.alert("The flip was tails and you chose tails...you win!");
}
