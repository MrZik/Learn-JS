// All games will have the method initializeGame as **
import {
  initializeGame as reactionTime,
  removeAllGameEventListener,
} from "./reactiontime.js";

// HARDCODE THE LINKS FIRST
const selectedGame = [
  "Reaction Time",
  "Sequence Memory",
  "Aim Trainer",
  "Number Memory",
  "Verbal Memory",
  "Chimp Test",
  "Visual Memory",
  "Typing",
];

const header = document.querySelector("header");
let gameSelectedTitle = "";

export const handleOnGameClicked = function (imgUrl, title, instructions) {
  gameSelectedTitle = title;
  header.addEventListener("click", playGameEvent);
  document.querySelector(".app__header_container").innerHTML = `
        <img src="${imgUrl}" alt="img" />
        <h1 id="title">
            ${title}
        </h1>
        <p id="description">
            ${instructions}
        </p>
    `;
};

function playGameEvent() {
  switch (gameSelectedTitle) {
    case selectedGame[0]:
      reactionTime();
      break;
    case selectedGame[1]:
      break;
    case selectedGame[2]:
      break;
    case selectedGame[3]:
      break;
    case selectedGame[4]:
      break;
    case selectedGame[5]:
      break;
    case selectedGame[6]:
      break;
    case selectedGame[7]:
      break;
  }
  removeGameEvent();
}

export function removeGameEvent() {
  header.removeEventListener("click", playGameEvent);
  removeAllGameEventListener();
}

// const homeDetails = (document.querySelector("header").innerHTML = `
//     <div class="app__header_container">
//         <img src="./assets/imgs/original/cognitive-white.svg" alt="img" />
//         <h1 id="title">Ability Tester</h1>
//         <p id="description">
//         Measure your abilities with brain and cognitive tests
//         </p>
//         <button type="button">Get Started</button>
//     </div>
// `);
