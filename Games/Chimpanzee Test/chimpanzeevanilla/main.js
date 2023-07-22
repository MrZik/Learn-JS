const rowcount = 8;
const columncount = 5;
const icon = "visualization.svg";
const app = document.querySelector("#app");
let playable;

const lobbyhtml = function (element) {
  element.innerHTML = `
    <div class="home" id="playable">
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
};

const gamehtml = function (element) {
  element.innerHTML = `
  <div id="game">
    <div class="grid">
        <div class="gamebtn" id="btn01"></div>
        <div class="gamebtn" id="btn02"></div>
        <div class="gamebtn" id="btn03"></div>
        <div class="gamebtn" id="btn04"></div>
        <div class="gamebtn" id="btn05"></div>
        <div class="gamebtn" id="btn06"></div>
        <div class="gamebtn" id="btn07"></div>
        <div class="gamebtn" id="btn08"></div>
        <div class="gamebtn" id="btn11"></div>
        <div class="gamebtn" id="btn12"></div>
        <div class="gamebtn" id="btn13"></div>
        <div class="gamebtn" id="btn14"></div>
        <div class="gamebtn" id="btn15"></div>
        <div class="gamebtn" id="btn16"></div>
        <div class="gamebtn" id="btn17"></div>
        <div class="gamebtn" id="btn18"></div>
        <div class="gamebtn" id="btn21"></div>
        <div class="gamebtn" id="btn22"></div>
        <div class="gamebtn" id="btn23"></div>
        <div class="gamebtn" id="btn24"></div>
        <div class="gamebtn" id="btn25"></div>
        <div class="gamebtn" id="btn26"></div>
        <div class="gamebtn" id="btn27"></div>
        <div class="gamebtn" id="btn28"></div>
        <div class="gamebtn" id="btn31"></div>
        <div class="gamebtn" id="btn32"></div>
        <div class="gamebtn" id="btn33"></div>
        <div class="gamebtn" id="btn34"></div>
        <div class="gamebtn" id="btn35"></div>
        <div class="gamebtn" id="btn36"></div>
        <div class="gamebtn" id="btn37"></div>
        <div class="gamebtn" id="btn38"></div>
        <div class="gamebtn" id="btn41"></div>
        <div class="gamebtn" id="btn42"></div>
        <div class="gamebtn" id="btn43"></div>
        <div class="gamebtn" id="btn44"></div>
        <div class="gamebtn" id="btn45"></div>
        <div class="gamebtn" id="btn46"></div>
        <div class="gamebtn" id="btn47"></div>
        <div class="gamebtn" id="btn48"></div>
    </div>
  </div>
    `;
};

function startGame(event) {
  event.stopPropagation();
  event.preventDefault();
  gamehtml(playable);
}

const once = {
  once: true,
};

const initializePage = function () {
  lobbyhtml(app);
  playable = document.querySelector("#playable");
  const btn = document.querySelector("#startbtn");
  btn.addEventListener("click", startGame, once);
};

initializePage();
