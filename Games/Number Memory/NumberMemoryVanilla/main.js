const containerwidth = window.innerWidth;
const containerheight = window.innerHeight;
const app = document.getElementById("app");

let level = 1;
let question;
let suffix = 1;
let initialstart = 0;
let answer;
let width = 200;
let timerinterval;
console.log(width);
const getrandomnumber = (function () {
  return function () {
    return Math.floor(Math.random() * (10 * suffix)) + initialstart;
  };
})();

const resetvariables = (function () {
  return function () {
    level = 1;
    // remember to put it back suffix = 1 and initial start = 0!
    suffix = 1;
    initialstart = 0;
    question = 0;
    answer = 0;
  };
})();

const showgameover = (function () {
  return function () {
    clearInterval(timerinterval);
    app.innerHTML = `
        <div id="container">
            <p id="number">Number</p>
            <p id="lastnumber">${question}</p>
            <p id="feedback">Your answer</p>
            <p id="answer">${answer}</p>
            <h1 id="level">Level ${level}</h1>
            <button type="button" id="btn">
                <p id="btntext">Restart</p>
            </button>
        </div>
    `;

    const btn = document.getElementById("btn");
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      showinstructions();
    });
  };
})();

const showanswerform = (function () {
  return function () {
    app.innerHTML = `
        <div id="container">
            <p id="questionreminder">
                What was the number shown?
            </p>
            <input required type="text"
            placeholder="Answer" min="0"
            autocomplete="off" id="userinput"/> 
            <button type="button" id="btn">
                <p id="btntext">Submit</p>
            </button>
        </div>
    `;
    const input = document.getElementById("userinput");
    input.addEventListener("keydown", (e) => {
      e.stopPropagation();
      var k = input.value;
      k = k.replace(/\s/g, "");
      input.value = k;
    });
    const btn = document.getElementById("btn");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      const nonletterregex = /\W+/g;
      const spaceregex = /\s/g;
      const regex = /\D+\s/g;
      answer = input.value;
      answer = answer.trim();
      answer = answer.replaceAll(nonletterregex, "");
      const result = regex.test(answer);

      if (spaceregex.test(answer)) {
        document.getElementById("userinput").value = "";
        return;
      }

      if (answer === "") {
        return;
      }

      if (result) {
        // non-number
        showgameover();
        return;
      }

      if (Number(answer) !== question) {
        showgameover();
        return;
      }
      initialstart === 0 ? 10 : (initialstart *= 10);

      suffix *= 10;
      level += 1;
      showquestion();
    });
  };
})();

const showquestion = (function () {
  return function () {
    clearInterval(timerinterval);
    question = getrandomnumber();

    app.innerHTML = `
        <div id="container">
            <h1 id="instruction">Level ${level}<h1>
            <h1 id="question">${question}</h1>
            <div class="timercontainer">
              <div class="apptimer" id="timer"></div>
            </div>
        </div>
    `;

    const timer = function () {
      timerinterval = setInterval(() => {
        document.getElementById("timer").style.width = `${width}px`;
        width--;
        if (width <= 0) {
          showanswerform();
          clearInterval(timerinterval);
          width = 200;
        }
      }, 0);
    };

    timer();
  };
})();

const showinstructions = (function () {
  return function () {
    resetvariables();
    app.innerHTML = `
        <div id="container">
            <img src="cubes.svg" alt="img" id="gameicon"/>
            <h1 id="gametitle">
                Number Memory
            </h1>
            <p id="gamedescription">
                The average person can remember 7 numbers at once.<br> Can you do more?
            </p>
            <button type="button" id="btn">
                <p id="btntext">
                    Start
                </p>
            </button>
        </div>
    `;

    const btn = document.getElementById("btn");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      showquestion();
    });
  };
})();

showinstructions();
