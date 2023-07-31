import { showGameOverPage, resetBtnEvent } from "/gameover.js";
const containerwidth = window.innerWidth;
const containerheight = window.innerHeight;

const startingLevel = 1;
const startingLife = 3;
const startingBoxToMemorizeCount = 3;
const startingClickableBoxes = 9;
const clickablBoxBaseIncrease = 7;

let app;
let boxGrid;
let clickableBoxIncreament = 0;
let levelFeedback;
let currentBoxesToMemorizeCount = startingBoxToMemorizeCount;
let currentLevel = startingLevel;
let currentLife = startingLife;
let clickableBoxToCreate = startingClickableBoxes;
let boxesToMemorize = [];
let boxesId = [];
let lives = [];
let boxes = [];
let boxesCopy = [];
let wrongBoxes = [];
let wrongBoxesCount = 0;
let maxWrongCount = currentBoxesToMemorizeCount;
let gridColumns = 3;

if (containerwidth < 320) {
  gridColumns = 2;
}

let boxDimension = 300;
let boxDimensionIncreament = 50;

const getRndIndex = function () {
  return Math.floor(Math.random() * boxesCopy.length);
};

const getLives = function () {
  lives = document.querySelectorAll("#life");
  currentLife = startingLife;
  UpdateLives();
};

const UpdateLives = function () {
  switch (currentLife) {
    case 3:
      for (let i = 0; i < currentLife; i++) {
        lives[i].style.filter = "none";
        lives[i].style.opacity = "1";
      }
      break;
    case 2:
      lives[2].style.filter = "invert(1)";
      lives[2].style.opacity = "0.4";
      break;
    case 1:
      lives[1].style.filter = "invert(1)";
      lives[1].style.opacity = "0.4";
      break;
    case 0:
      lives[0].style.filter = "invert(1)";
      lives[0].style.opacity = "0.4";
      break;
  }
};

const getBoxes = function () {
  boxes = document.querySelectorAll("div.clickable-box");
  boxesCopy = [...boxes];
};

const generateBoxesToMemorize = function () {
  let index = 0;

  for (let i = 0; i < currentBoxesToMemorizeCount; i++) {
    index = getRndIndex();
    boxesToMemorize.push(boxesCopy[index]);
    boxesId.push(boxesCopy[index].id);
    boxesCopy.splice(index, 1);
  }
};

const changeBoxesColor = function (show) {
  boxesToMemorize.forEach((box) => {
    box.style.backgroundColor = show ? "white" : "rgb(9, 9, 9, 0.25)";
  });
};

const showBoxesToMemorize = function () {
  changeBoxesColor(true);

  setTimeout(() => {
    changeBoxesColor(false);
    const grid = document.querySelector(".box-grid");
    grid.addEventListener("click", gridEvent);
  }, 1500);

  //******* */
  // DEBUG
  boxesToMemorize.forEach((box) => {
    box.style.border = "4px solid red";
  });
  //******* */
};

const gridEvent = function (event) {
  event.preventDefault();
  event.stopPropagation();
  const t = event.target;

  if (t.className !== "clickable-box") return;

  if (!boxesToMemorize.includes(t)) {
    if (boxesId.includes(t.id)) {
      return;
    }
    wrongBoxes.push(t);
    wrongBoxesCount++;
    const b = boxesCopy.indexOf(t);

    boxesCopy[b].style.backgroundColor = "rgb(9, 9, 9, 0.5)";
    boxesCopy.splice(b, 1);
  }

  if (wrongBoxesCount === currentBoxesToMemorizeCount) {
    onLevelLose();
    return;
  }

  boxesToMemorize.forEach((box) => {
    if (box.id === t.id) {
      const b = boxesToMemorize.indexOf(box);
      boxesToMemorize[b].style.backgroundColor = "white";
      //******* */
      // DEBUG
      box.style.border = "none";
      //******* */

      boxesToMemorize.splice(b, 1);
    }
  });

  if (boxesToMemorize.length === 0) {
    onLevelWon();
    return;
  }
};

const removeGridEvent = function () {
  const grid = document.querySelector(".box-grid");
  grid.removeEventListener("click", gridEvent);
};

const resetArrays = function () {
  boxesToMemorize.length = 0;
  boxesCopy.length = 0;
  boxesId.length = 0;
  wrongBoxes.length = 0;
  boxesCopy = [...boxes];
};

const onLevelLose = function () {
  removeGridEvent();
  currentLife--;
  wrongBoxesCount = 0;
  UpdateLives();

  const wrapper = document.querySelector(".game-wrapper");
  wrapper.style.backgroundColor = "rgb(182, 37, 37)";

  function showLoseFeedback() {
    boxes.forEach((box) => {
      box.style.backgroundColor = "rgb(9, 9, 9, 0.25)";
    });

    resetArrays();

    if (currentLife === 0) {
      showGameOverPage()(app, currentLevel);
      resetBtnEvent(showGame);
      return;
    }

    generateBoxesToMemorize();
    wrapper.style.backgroundColor = "transparent";
    setTimeout(showBoxesToMemorize, 500);
  }

  setTimeout(showLoseFeedback, 900);
};

const onLevelWon = function () {
  removeGridEvent();
  currentBoxesToMemorizeCount++;
  currentLevel++;
  wrongBoxesCount = 0;

  const wrapper = document.querySelector(".game-wrapper");
  wrapper.style.backgroundColor = "rgb(42, 218, 71)";

  resetArrays();

  function reset() {
    if (currentBoxesToMemorizeCount > Math.floor(clickableBoxToCreate / 2)) {
      if (gridColumns === 8) {
        if (containerwidth < 600) {
          maxWrongCount--;
          maxWrongCount <= 0 && (maxWrongCount = 0);
        }
      } else if (gridColumns === 6) {
        if (containerwidth < 470) {
          maxWrongCount--;
          maxWrongCount <= 0 && (maxWrongCount = 0);
        }
      } else if (gridColumns === 4) {
        if (containerwidth < 420) {
          maxWrongCount--;
          maxWrongCount <= 0 && (maxWrongCount = 0);
        }
      } else if (gridColumns === 3) {
        if (containerwidth < 370) {
          maxWrongCount--;
          maxWrongCount <= 0 && (maxWrongCount = 0);
        }
      } else if (gridColumns === 2) {
        if (containerwidth < 320) {
          maxWrongCount--;
          maxWrongCount <= 0 && (maxWrongCount = 0);
        }
      } else {
        boxGrid.innerHTML = ``;

        clickableBoxToCreate +=
          clickablBoxBaseIncrease + clickableBoxIncreament;

        clickableBoxIncreament += 2;
        maxWrongCount -= 2;
        gridColumns++;
        boxGrid.style.gridTemplateColumns = `repeat(${gridColumns}, 1fr)`;
        boxGrid.style.width = boxDimension + boxDimensionIncreament;
        boxGrid.style.height = boxDimension + boxDimensionIncreament;
        boxDimensionIncreament += 50;
      }

      createBoxes();
      getBoxes();
    } else {
      boxes.forEach((box) => {
        box.style.backgroundColor = "rgb(9, 9, 9, 0.25)";
      });
    }

    levelFeedback.innerText = `${currentLevel}`;
    generateBoxesToMemorize();
    wrapper.style.backgroundColor = "transparent";
    setTimeout(showBoxesToMemorize, 500);
  }

  setTimeout(reset, 900);
};

const createBoxes = function () {
  for (let i = 0; i < clickableBoxToCreate; i++) {
    boxGrid.innerHTML += `<div class="clickable-box" id="${i}"></div>`;
  }
};

export const showGame = function () {
  app = document.getElementById("app");
  app.innerHTML = `
        <div class="game-wrapper">
            <header class="game-header">
                <p class="level-text">
                    Level <span id="current-level">1</span>
                </p>
                <p class="life-text">
                    Lives
                </p>
                <img src="heart.svg" alt="heart" id="life"/>
                <img src="heart.svg" alt="heart" id="life"/>
                <img src="heart.svg" alt="heart" id="life"/>
            </header>
            <section class="box-grid"></section>
        </div>`;

  boxGrid = document.querySelector(".box-grid");
  clickableBoxToCreate = startingClickableBoxes;
  boxDimension = 300;
  boxDimensionIncreament = 50;
  createBoxes();
  levelFeedback = document.getElementById("current-level");
  currentLevel = startingLevel;
  maxWrongCount = currentBoxesToMemorizeCount;
  getLives();
  UpdateLives();
  getBoxes();
  generateBoxesToMemorize();
  setTimeout(showBoxesToMemorize, 900);
};
