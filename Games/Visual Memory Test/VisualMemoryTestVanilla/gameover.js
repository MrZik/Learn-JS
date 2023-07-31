export const showGameOverPage = function () {
  return function (app, currentLevel) {
    return (app.innerHTML = `
        <div class="wrapper">
            <img class="icon" src="visualization.svg" alt="game-icon"/>
            <p class="game-title">Visual Memory Test</p>
            <p class="last-level">Level ${currentLevel}</p>
            <button type="button" class="btn">
                <p class="btn-text">Restart</p>
            </button>
        </div>
    `);
  };
};

export const resetBtnEvent = function (gameView) {
  const restartbtn = document.querySelector(".btn");
  restartbtn.addEventListener("click", gameView);
};
