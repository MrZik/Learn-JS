let boxesToMemorize = [];
let lives = [];
let boxes = [];
const getLives = function () {
  lives = document.querySelectorAll("#life");
};

const getBoxes = function () {
  boxes = document.querySelectorAll("div.clickable-box");
};

export const showGame = function () {
  const app = document.getElementById("app");
  app.innerHTML = `
        <div class="wrapper">
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
            <section class="box-grid">
                <div class="clickable-box" id="0"></div>
                <div class="clickable-box" id="1"></div>
                <div class="clickable-box" id="2"></div>
                <div class="clickable-box" id="3"></div>
                <div class="clickable-box" id="4"></div>
                <div class="clickable-box" id="5"></div>
                <div class="clickable-box" id="6"></div>
                <div class="clickable-box" id="7"></div>
                <div class="clickable-box" id="8"></div>
            </section>
        </div>
    `;
  getLives();
  getBoxes();
  // CREATE THE BOXES TO MEMORIZE FIRST BEFORE QUERY
  const grid = document.querySelector(".box-grid");
  grid.addEventListener("click", gridEvent);
};

const gridEvent = function (event) {
  event.preventDefault();
  event.stopPropagation();

  if (boxesToMemorize.includes(Number(event.target.id))) {
  }
};
