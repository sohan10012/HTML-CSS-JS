const choices = ["rock", "paper", "scissor"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
let pcount = 0;
let ccount = 0;

function playgame(playerchoice) {
  const computerchoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerchoice);

  if (playerchoice === computerchoice) {
    resultdisplay.textContent = "It's a tie!";
    resultdisplay.style.color = "orange";
  } else if (
    (playerchoice === "rock" && computerchoice === "scissor") ||
    (playerchoice === "scissor" && computerchoice === "paper") ||
    (playerchoice === "paper" && computerchoice === "rock")
  ) {
    resultdisplay.textContent = `${
      playerchoice.charAt(0).toUpperCase() + playerchoice.slice(1)
    } beats ${computerchoice}! You win!`;
    resultdisplay.style.color = "green";
    pcount++;
  } else {
    resultdisplay.textContent = `${
      computerchoice.charAt(0).toUpperCase() + computerchoice.slice(1)
    } beats ${playerchoice}! You lose!`;
    resultdisplay.style.color = "tomato";
    ccount++;
  }

  playerdisplay.textContent = `PLAYER: ${playerchoice.toUpperCase()}`;
  computerdisplay.textContent = `COMPUTER: ${computerchoice.toUpperCase()}`;

  document.querySelector("#pscore .scorecount").textContent = pcount;
  document.querySelector("#cscore .scorecount").textContent = ccount;
}
