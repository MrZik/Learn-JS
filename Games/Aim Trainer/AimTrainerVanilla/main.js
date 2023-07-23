// 600 is the app width, 100 is the target width
const maxwidth = 500;
const maxheight = 400;
const app = document.getElementById("app");

const rndxpos = () => Math.floor(Math.random() * maxwidth);
const rndypos = () => Math.floor(Math.random() * maxheight);

app.innerHTML = `
    <div id="header">
        <p id="headertitle">Remaining <span id="count">30</span></p>
    </div>
    <div id="container">
        <div id="target">
            <img id="targeticon"src="target.svg" alt="img"/>
        </div>
    </div>
`;

const count = document.getElementById("count");

const updatecount = (function () {
  let currentcount = 30;
  return function () {
    currentcount -= 1;
    return currentcount;
  };
})();

const target = document.getElementById("target");

target.style.top = "200px";
target.style.left = "250px";

target.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();

  let clickcount = updatecount();

  if (clickcount <= 0) {
    // finished

    return;
  }

  count.innerText = `${clickcount}`;
  target.style.top = `${rndypos()}px`;
  target.style.left = `${rndxpos()}px`;
});
