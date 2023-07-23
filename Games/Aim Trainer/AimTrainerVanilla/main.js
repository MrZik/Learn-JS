const maxheight = 400;
const aimcount = 30;
const app = document.getElementById("app");

let currentcount = aimcount;
let firstclick = true;
let starttime;
let clickcount;
let target;
let count;

const rndxpos = (() => {
  // 600 is the app width, 100 is the target width
  const maxwidth = 500;
  return function () {
    return Math.floor(Math.random() * maxwidth);
  };
})();

const rndypos = (() => {
  // 600 is the app width, 100 is the target width, header takes 50
  const maxheight = 400;
  return function () {
    return Math.floor(Math.random() * maxheight);
  };
})();

const showinstructions = function () {
  app.innerHTML = `
    <p id="gametitle">Aim Trainer</p>
    <img src="target.svg" alt="img" id="instructionimg"/>
    <p id="instruction">Hit 30 targets as quickly as you can</p>
    <button type="button" id="startbtn">
        <p id="btnstarttext">Start</p>
    </button>
    `;

  const startbtn = document.getElementById("startbtn");
  startbtn.addEventListener("click", tryagainlogic);
};

const tryagainlogic = function () {
  showgame();
  initializetarget();
};

const showresult = function (time) {
  app.innerHTML = `
    <img id="resultimg" src="target.svg" alt="img"/>
    <p id="resulttitle">Average time per target</p>
    <p id="resulttime">${time}ms</p>
    <button type="button" id="tryagainbtn">
        <p id="btntext">Try again</p>
    </button>
    `;

  const tryagainbtn = document.getElementById("tryagainbtn");
  tryagainbtn.addEventListener("click", tryagainlogic);
};

const showgame = function () {
  currentcount = aimcount;
  firstclick = true;
  app.innerHTML = `
        <div id="header">
            <p id="headertitle">Remaining <span id="count">${currentcount}</span></p>
        </div>
        <div id="container">
            <div id="target">
                <img id="targeticon"src="target.svg" alt="img"/>
            </div>
        </div>
    `;

  target = document.getElementById("target");
  count = document.getElementById("count");
};

const updatecount = (function () {
  return function () {
    currentcount -= 1;
    return currentcount;
  };
})();

const targetclickevent = function () {
  if (firstclick) {
    starttime = new Date().getTime();
    firstclick = false;
  }

  clickcount = updatecount();
  count.innerText = `${clickcount}`;

  if (clickcount <= 0) {
    // finished
    const endtime = new Date().getTime();
    const avgtime = Math.floor((endtime - starttime) / aimcount);
    showresult(avgtime);
    return;
  }

  target.style.top = `${rndypos()}px`;
  target.style.left = `${rndxpos()}px`;
};

const initializetarget = function () {
  target.style.top = "200px";
  target.style.left = "250px";

  target.addEventListener("click", targetclickevent);
};

showinstructions();
