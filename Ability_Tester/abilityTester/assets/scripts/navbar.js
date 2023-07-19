import "../style/navbar.css";
import { removeGameEvent } from "./gameshandler";

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

const returnTohome = function () {
  document.querySelector("header").innerHTML = `
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
};

const homebtn = document.querySelector(".home_button");
homebtn.addEventListener("click", (e) => {
  e.stopPropagation();
  returnTohome();
  removeGameEvent();
});
