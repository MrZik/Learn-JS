const containerwidth = window.innerWidth;
const containerheight = window.innerHeight;
const app = document.getElementById("app");

const showinstruction = function () {
  return function () {
    app.innerHTML = `
        <div id="instructioncontainer">
            <img src="visualization.svg" alt="img" id="gameicon"/>
            <h1 id="gametitle">Sequence Memory</h1>
            <p id="gamedescription">Memorize the pattern</p>
            <button type="button" id="startbtn">
                <p id="startbtntxt">Start</p>
            </button>
        </div>
    `;
  };
};

showinstruction();
