import "./style.css";
import gameStyle from "./game.module.css";
import rushUrl from "./src/rush-white.svg";
import dotsUrl from "./src/dots.svg";
import exclamationUrl from "./src/exclamation.svg";
let playableArea;
let info;
let timeout;
let waiting = false;
let startTime;

const initializePage = function () {
  document.querySelector("#app").innerHTML = `
    <div class="playable" id="playable">
      <div id="info">
        <img id="logo" src=${rushUrl} alt="img"/>
        <h1 id="title">Reaction Time</h1>
        <h2 id="description">Test your visual reflexes</h2>
        <p id="instruction">- Click within the blue area to start -</p>
      </div>
    </div>
  `;

  playableArea = document.querySelector(".playable");
  info = document.querySelector("#info");
  info.addEventListener("click", startGame);
};

const generateRandomNumber = function () {
  return Math.floor(Math.random() * 5750) + 2500;
};

const startGame = function () {
  info.innerHTML = `
  <img id="logo" src=${dotsUrl} alt="img"/>
  <h1 id="title">Wait for green color</h1>
  `;

  waiting = true;
  playableArea.className = gameStyle.waiting;

  info.removeEventListener("click", startGame);
  const waitTime = generateRandomNumber();

  timeout = setTimeout(clickBox, waitTime);
  info.addEventListener("click", gameRunning);
};

const gameRunning = function () {
  info.removeEventListener("click", gameRunning);
  info.addEventListener("click", startGame);
  if (!waiting) {
    clickedCorrectly();
    return;
  }

  clearTimeout(timeout);
  waiting = false;
  clickedEarly();
};

const clickBox = function () {
  waiting = false;
  playableArea.className = gameStyle.clickNow;
  startTime = new Date().getTime();

  info.innerHTML = `
  <img id="logo" src=${dotsUrl} alt="img"/>
  <h1 id="title">Click now!</h1>
  `;
};

const clickedEarly = function () {
  playableArea.className = gameStyle.result;

  info.innerHTML = `
  <img id="logo" src=${exclamationUrl} alt="img"/>
  <h1 id="title">Clicked too early!</h1>
  <p id="instruction">Click to try again</p>
  `;
};

const clickedCorrectly = function () {
  const getClickTime = new Date().getTime();
  const time = getClickTime - startTime;
  playableArea.className = gameStyle.result;

  info.innerHTML = `
  <img id="logo" src=${exclamationUrl} alt="img"/>
  <h1 id="title">${time} ms</h1>
  <p id="instruction">Click to keep going</p>
  `;
};

// FLOW
initializePage();
