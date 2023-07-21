import "./style.css";

const initializePage = function () {
  document.querySelector("#app").innerHTML = `
    <div id="playable">
      <div id="info">
        <img id="logo" src="./assets/imgs/rush-white.svg" alt="img"/>
        <h1 id="title">Reaction Time</h1>
        <h2 id="description">Test your visual reflexes</h2>
        <p id="instruction">- Click within the blue area to start -</p>
      </div>
    </div>
  `;

  document.querySelector("#info").addEventListener("click", startGame);
};

const startGame = function () {
  const playableArea = document.querySelector("#playable");
};

// FLOW HERE
initializePage();
