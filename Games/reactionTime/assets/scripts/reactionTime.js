// import styles from "../style/reactiontime.module.css";
// let header = "";
// let waiting = false;
// let endTime = 0;
// let timeOut;

// // since the header will not change, we'll just get it already at the start.
// header = document.querySelector("header");

// const clickedCorrectly = function () {
//   const timeClicked = new Date().getTime();

//   header.innerHTML = `
//     <img class="${
//       styles.img_waiting
//     }" src="./assets/imgs/original/white/exclamation.svg" alt="img" />
//     <h1 id="${styles.container_h1}">${timeClicked - endTime} ms</h1>
//     <p id="${styles.p_id}">Click to keep going.</p>
//   `;

//   header.addEventListener("click", initializeGame);
// };

// const clickedEarly = function () {
//   waiting = false;

//   header.innerHTML = `
//     <img class="${styles.img_waiting}" src="./assets/imgs/original/white/exclamation.svg" alt="img" />
//     <h1 id="${styles.container_h1}">Clicked too soon!</h1>
//     <p id="${styles.p_id}">Click to try again.</p>
//   `;
//   header.addEventListener("click", initializeGame);
// };

// const waitingColorChangeEvent = function () {
//   header.id = styles.result;
//   removeGameEvent();
//   if (waiting) {
//     clearTimeout(timeOut);
//     clickedEarly();
//   } else {
//     clickedCorrectly();
//   }
// };

// const addGameDetails = function () {
//   header.innerHTML = `
//     <img class="${styles.img_waiting}" src="./assets/imgs/original/white/dots.svg" alt="img" />
//     <h1 id="${styles.container_h1}">Wait for green color</h1>
//   `;
//   header.className = styles.game;
//   header.id = styles.waiting;

//   header.addEventListener("click", waitingColorChangeEvent);
//   console.log("added waiting for color change event");
// };

// const clickBox = function () {
//   waiting = false;
//   header.innerHTML = `
//     <img class="${styles.img_waiting}" src="./assets/imgs/original/white/dots.svg" alt="img" />
//     <h1 id="${styles.container_h1}">Click!</h1>
//   `;
//   header.id = styles.clickNow;

//   endTime = new Date().getTime();
// };

// // This uses milliseconds
// const startTimeout = function () {
//   waiting = true;
//   timeOut = setTimeout(clickBox, 3000);
// };

// function removeGameEvent() {
//   header.removeEventListener("click", waitingColorChangeEvent);
// }

// export const removeReactionTImeEvents = function () {
//   clearTimeout(timeOut);
//   header.removeEventListener("click", initializeGame);
//   header.removeEventListener("click", waitingColorChangeEvent);
//   console.log("removed timeout and all reaction time events");
// };

// export const initializeGame = function () {
//   header.removeEventListener("click", initializeGame);
//   console.log("removed initializeGame event");
//   addGameDetails();
//   startTimeout();
// };
