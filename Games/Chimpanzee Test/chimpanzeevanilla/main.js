const maxstrikecount = 3;
const btns = [];
const icon = "visualization.svg";
const app = document.querySelector("#app");

let initialsequencecount = 3;
let playable;
let currentsequencenumber = 1;
let strikecount = 0;
let rowcount = 4;
let columncount = 5;

const widthsizesmall = window.matchMedia("(max-width: 390px)");
const widthsizesmallextra = window.matchMedia("(max-width: 300px)");
if (widthsizesmallextra.matches) {
  rowcount = 2;
  columncount = 6;
} else if (widthsizesmall.matches) {
  rowcount = 3;
  columncount = 6;
} else {
  rowcount = 4;
  columncount = 5;
}

const gridtotal = rowcount * columncount;
// debug
// initialsequencecount = rowcount * columncount;
let currentsequencecount = initialsequencecount;
const once = {
  once: true,
};

const lobbyhtml = function (element) {
  element.innerHTML = `
      <div class="home" id="playable">
          <div id="info">
              <img src=${icon} alt="img" type="img/svg.xml" id="logo" />
              <h1 id="title">Are you smarter than a chimpanzee?</h1>
              <h2 id="description">Click the squares in ascending order</h2>
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
    if (currentsequencenumber === 1) {
      // cover with white background all other sequences
      const sequencebtns = document.querySelectorAll(".gamebtn");
      sequencebtns.forEach((x) => x.classList.add("visible"));
    }

    currentsequencenumber++;

    // because we know that we always put "gamebtn" as the first index in the class name"
    if (event.target.classList[0] === "gamebtn") {
      event.srcElement.children[0].className = "hidden";
    } else if (event.target.className === "number") {
      event.srcElement.parentElement.className = "hidden";
    }

    event.target.className = "hidden";

    if (currentsequencenumber > currentsequencecount) {
      currentsequencecount++;
      currentsequencecount > gridtotal && (currentsequencecount = gridtotal);
      startGame();
    }
  } else {
    // incorrect sequence
    ++strikecount;
    strikecount === maxstrikecount ? gameover() : wrongsequence();
  }
};

const initializegame = function () {
  getIndexes();
  playable.innerHTML = `
    <div id="game">
        <div class="grid"></div>
    </div>
    `;

  const grid = document.querySelector(".grid");
  grid.addEventListener("click", gridevent);
  let divs = "";

  for (let i = 0; i < gridtotal; i++) {
    if (btns.includes(i)) {
      const btnid = btns.indexOf(i) + 1;
      divs += `
        <div class="gamebtn" id="${btnid}">
            <p class="number" id="${btnid}">
                ${btnid}
            </p>
        </div>
        `;
    } else {
      divs += `<div class="hidden"></div>`;
    }
  }

  grid.innerHTML += divs;
};

function startGame(event) {
  if (event !== undefined) {
    event.stopPropagation();
    event.preventDefault();
  }

  btns.length = 0;
  currentsequencenumber = 1;

  initializegame();
}

const initializePage = function (event) {
  if (event !== undefined) {
    event.stopPropagation();
    event.preventDefault();
  }

  lobbyhtml(app);

  playable = document.querySelector("#playable");
  const btn = document.querySelector("#startbtn");

  btn.addEventListener("click", startGame, once);

  currentsequencecount = initialsequencecount;
  strikecount = 0;
};

initializePage();
