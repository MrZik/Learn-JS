import "./reactiontime.js";
const header = document.querySelector("header");

const handleOnGameClicked = function (imgUrl, title, instructions) {
  header.addEventListener("click", playGameEvent);
  document.querySelector(".app__header_container").innerHTML = `
        <img src="${imgUrl}" alt="img" />
        <h1 id="title">
            ${title}
        </h1>
        <p id="description">
            ${instructions}
        </p>
    `;
};

function playGameEvent() {
  alert("Play game");
}

function removeGameEvent() {
  header.removeEventListener("click", playGameEvent);
}

// const homeDetails = (document.querySelector("header").innerHTML = `
//     <div class="app__header_container">
//         <img src="./assets/imgs/original/cognitive-white.svg" alt="img" />
//         <h1 id="title">Ability Tester</h1>
//         <p id="description">
//         Measure your abilities with brain and cognitive tests
//         </p>
//         <button type="button">Get Started</button>
//     </div>
// `);

export { handleOnGameClicked, removeGameEvent };
