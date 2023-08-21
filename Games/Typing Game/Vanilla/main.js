import { GameStateMachine } from "./gamestatemachine.js";
const fps = 60;
const updateInterval = 1000 / fps;
const playerStateMachine = new GameStateMachine();
const RANDOM_QUITE_API_URL = "https://api.quotable.io/quotes/random";

let textDisplayElement = "";

//"https://api.quotable.io/quotes/random?minLength=350&maxLength=500";

//let qoute = "";
//const updateLoop = setInterval(() => {}, updateInterval);

async function getRandomQuote() {
  const response = await fetch(RANDOM_QUITE_API_URL);
  const data = await response.json();
  return data.content;
}

async function getNextQuote() {
  const qoute = await getRandomQuote();
  textDisplayElement.innerHTML = "";
  qoute.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    textDisplayElement.appendChild(characterSpan);
  });
  console.log(qoute);
}

getNextQuote();

window.addEventListener("load", (e) => {
  playerStateMachine.Initialize();
  textDisplayElement = document.getElementById("text-to-type");
});
