const icon = "visualization.svg";
const app = document.querySelector("#app");
let playable;

const lobbyhtml = function () {
  const html = `
        <div id="playable">
            <div id="info">
                <img src=${icon} alt="img" type="img/svg.xml" id="logo" />
                <h1 id="title">Are you smarter than a chimpanzee?</h1>
                <h2 id="description">Click the squares in ascending order.</h2>
                <button type="button" id="startbtn">
                    <p id="btntext">Start</p>
                </button>
            </div>
        </div>
    `;

  return html;
};

function startGame(event) {
  event.stopPropagation();
  alert("Start Game");
}

const once = {
  once: true,
};

const initializePage = function () {
  app.innerHTML = lobbyhtml();
  playable = document.querySelector("#playable");
  const btn = document.querySelector("#startbtn");
  btn.addEventListener("click", startGame, once);
};

initializePage();
