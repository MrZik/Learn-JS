import "../style/navbar.css";
import { removeGameEvent } from "./gameshandler";

export const addNavbarContents = function () {
  document.querySelector("nav").innerHTML = `
    <div class="app__navbar_container">
        <div class="home_button" id="home">
            <p>ABILITY TESTER</p>
        </div>
        <div class="home_button" id="dashboard">
            <p>DASHBOARD</p>
        </div>
    </div>
`;

  homebtn();
};

const returnTohome = function () {
  const header = document.querySelector("header");
  header.innerHTML = `
    <div class="app__header_container">
        <img src="./assets/imgs/original/cognitive-white.svg" alt="img" />
        <h1 id="title">
            Ability Tester
        </h1>
        <p id="description">
            Measure your abilities with brain and cognitive tests
        </p>
        <button type="button">Get Started</button>
    </div>
  `;
  header.className = "app__header";
  header.id = "none";
};

const homebtn = function () {
  const btn = document.querySelector(".home_button");
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    returnTohome();
    removeGameEvent();
  });
};
