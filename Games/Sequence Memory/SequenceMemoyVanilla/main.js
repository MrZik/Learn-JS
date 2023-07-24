const containerwidth = window.innerWidth;
const containerheight = window.innerHeight;
const app = document.getElementById("app");
let gridcont;
let sequencecount = 1;
let finalcount;
let currentsequenceindex = 0;
let sequencearray = [];
let counter = 0;
let previousbox;
let currentbox;

const generaterandomindex = (function () {
  return function () {
    let index = Math.floor(Math.random() * 9);

    while (index === sequencearray[sequencearray.length - 1]) {
      index = Math.floor(Math.random() * 9);
    }

    return index;
  };
})();

const showpattern = (function () {
  return function () {
    setTimeout(function () {
      if (counter !== 0) {
        previousbox.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
      }

      currentbox = document.getElementById(`box${sequencearray[counter]}`);

      if (currentbox === null) {
        addboxclickevent();
        return;
      }

      currentbox.style.backgroundColor = "white";

      previousbox = currentbox;

      counter++;
      if (counter <= sequencearray.length) {
        showpattern();
      }
    }, 950);
  };
})();

const showgameview = (function () {
  return function () {
    app.innerHTML = `
        <div id="gamecontainer">
            <div id="level">
                <p id="leveltext">Level <span id="currentlevel">1</span></p>
            </div>
        </div>
    `;
    document.getElementById("currentlevel").innerText = sequencecount;

    // this generates the sequence every level
    sequencearray.push(generaterandomindex());

    initializegrid();
  };
})();

const addboxclickevent = function () {
  gridcont = document.getElementById("gridcontainer");
  gridcont.addEventListener("click", boxevent);
};

const boxevent = function (event) {
  event.stopPropagation();
  event.preventDefault();
  const box = event.target;

  if (box.className !== "gamebox") return;

  if (box.id !== `box${sequencearray[currentsequenceindex]}`) {
    finalcount = sequencecount;
    sequencearray.length = 0;
    sequencecount = 1;
    resetvariables();
    gameoverscreen();
    return;
  }

  box.style.backgroundColor = "white";

  setTimeout(function () {
    box.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
  }, 450);

  currentsequenceindex += 1;

  if (currentsequenceindex === sequencecount) {
    onsequencefinished();
  }
};

const resetvariables = (function () {
  return function () {
    counter = 0;
    currentsequenceindex = 0;
  };
})();

const onsequencefinished = (function () {
  return function () {
    gridcont.removeEventListener("click", boxevent);
    sequencecount += 1;
    resetvariables();

    document.getElementById("currentlevel").innerText = sequencecount;
    sequencearray.push(generaterandomindex());
    showpattern();
  };
})();

const gameoverscreen = (function () {
  return function () {
    app.innerHTML = `
        <div id="instructioncontainer">
            <img src="visualization.svg" alt="img" id="gameicon"/>
            <p id="gameovertitle">Sequence Memory</p>
            <h1 id="finallevel">Level ${finalcount}</h1>
            <button type="button" id="restartbtn">
                    <p id="startbtntext">Restart</p>
            </button>
        </div>
    `;
    document.getElementById("restartbtn").addEventListener(
      "click",
      (e) => {
        e.stopPropagation();
        e.preventDefault();
        showgameview();
      },
      { once: true }
    );
  };
})();

const initializegrid = (function () {
  return function () {
    const gamecont = document.getElementById("gamecontainer");
    gamecont.innerHTML += `
        <div id="gridcontainer">
            <div id="column">
                <div class="gamebox" id="box0"></div>
                <div class="gamebox" id="box1"></div>
                <div class="gamebox" id="box2"></div>
            </div>
            <div id="column">
                <div class="gamebox" id="box3"></div>
                <div class="gamebox" id="box4"></div>
                <div class="gamebox" id="box5"></div>
            </div>
            <div id="column">
                <div class="gamebox" id="box6"></div>
                <div class="gamebox" id="box7"></div>
                <div class="gamebox" id="box8"></div>
            </div>
        </div>
    `;

    showpattern();
  };
})();

const showinstruction = (function () {
  return function () {
    app.innerHTML = `
        <div id="instructioncontainer">
            <img src="visualization.svg" alt="img" id="gameicon"/>
            <h1 id="gametitle">Sequence Memory</h1>
            <p id="gamedescription">Memorize the pattern</p>
            <button type="button" id="startbtn">
                <p id="startbtntext">Start</p>
            </button>
        </div>
    `;
    const startbtn = document.getElementById("startbtn");
    startbtn.addEventListener("click", showgameview);
  };
})();

showinstruction();
