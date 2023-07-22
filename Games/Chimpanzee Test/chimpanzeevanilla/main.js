const maxstrikecount = 3;
const rowcount = 8;
const columncount = 5;
const initialsequencecount = 3;
const gridtotal = rowcount * columncount;
const btns = [];
const icon = "visualization.svg";
const app = document.querySelector("#app");

let playable;
let currentsequencecount = initialsequencecount;
let currentsequencenumber = 1;
let strikecount = 0;

const once = {
  once: true,
};

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

const wrongsequence = function () {
  playable.innerHTML = `
        <p id="outroinfo">NUMBERS</p>
        <p id="outro">${currentsequencecount}</p>
        <p id="outroinfo">STRIKES</p>
        <p id="outro">${strikecount} of ${maxstrikecount}</p>
        <button type="button" id="outrobtn">
            <p id="btntext">Continue</p>
        </button>
    `;
  document.getElementById("btntext").addEventListener("click", startGame, once);
};

const gameover = function () {
  playable.innerHTML = `
        <div id="info">
            <img src=${icon} alt="img" type="img/svg.xml" id="logo" />
            <p id="outroinfo">SCORE</p>
            <p id="outro">${currentsequencecount}</p>
            <button type="button" id="tryagain">
                <p id="btntext">Try again</p>
            </button>
        </div>
    `;

  document
    .getElementById("tryagain")
    .addEventListener("click", initializePage, once);
};

const generateRandomNumber = function () {
  return Math.floor(Math.random() * gridtotal);
};

const getIndexes = function () {
  let rndindex;

  // this only works because we have little count to iterate!
  for (let i = 0; i < currentsequencecount; i++) {
    rndindex = generateRandomNumber();

    while (btns.includes(rndindex)) {
      rndindex = generateRandomNumber();
    }

    btns.push(rndindex);
  }
};

const gridevent = function (event) {
  event.preventDefault();
  event.stopPropagation();

  if (event.target.className === "hidden") {
    return;
  }

  if (Number(event.target.id) === currentsequencenumber) {
    currentsequencenumber++;

    if (event.target.className === "gamebtn") {
      event.srcElement.children[0].className = "hidden";
    } else if (event.target.className === "number") {
      event.srcElement.parentElement.className = "hidden";
    }

    event.target.className = "hidden";

    if (currentsequencenumber === currentsequencecount) {
      currentsequencecount++;
      // create new grid with additional sequence
    }
  } else {
    // incorrect sequence
    ++strikecount;

    strikecount === maxstrikecount ? gameover() : wrongsequence();
  }
};

const initializegame = function (element) {
  getIndexes();
  element.innerHTML = `
    <div id="game">
        <div class="grid"></div>
    </div>
    `;

  const grid = document.querySelector(".grid");
  grid.addEventListener("click", gridevent);
  let divs = "";

  for (let i = 0; i < gridtotal; i++) {
    if (btns.includes(i)) {
      divs += `
        <div class="gamebtn" id="${btns.indexOf(i) + 1}">
            <p class="number" id="${btns.indexOf(i) + 1}">${
        btns.indexOf(i) + 1
      }</p>
        </div>
        `;
    } else {
      divs += `<div class="hidden"></div>`;
    }
  }

  grid.innerHTML += divs;
};

function startGame(event) {
  event.stopPropagation();
  event.preventDefault();

  btns.length = 0;
  currentsequencenumber = 1;

  initializegame(playable);
}

const initializePage = function () {
  lobbyhtml(app);
  playable = document.querySelector("#playable");
  const btn = document.querySelector("#startbtn");
  btn.addEventListener("click", startGame, once);
  currentsequencecount = initialsequencecount;
  strikecount = 0;
};

initializePage();
