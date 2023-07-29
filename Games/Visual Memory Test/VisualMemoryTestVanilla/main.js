const app = document.getElementById("app");

const showHomePage = (function () {
  return function () {
    return (app.innerHTML = `
            <div class="wrapper">
                <img class="icon" src="visualization.svg" alt="game-icon"/>
                <h1 class="title">Visual Memory Test</h1>
                <p class="description">Memorize the squares</p>
                <button class="btn">
                    <p class="btn-text">Start</p>
                </button>
            </div>
        `);
  };
})();

showHomePage();
