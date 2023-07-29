export const showHomePage = function () {
  return function (app) {
    return (app.innerHTML = `
              <div class="wrapper">
                  <img class="icon" src="visualization.svg" alt="game-icon"/>
                  <h1 class="title">Visual Memory Test</h1>
                  <p class="description">Memorize the squares</p>
                  <button type="button" class="btn">
                      <p class="btn-text">Start</p>
                  </button>
              </div>
          `);
  };
};

export const startBtnEvent = function (gameView) {
  const startbtn = document.querySelector(".btn");
  startbtn.addEventListener("click", gameView);
};
