import { PlayerStateMachine } from "./playerstatemachine.js";
const app = document.querySelector(".container");
const fps = 60;
const updateInterval = 1000 / fps;
const playerStateMachine = new PlayerStateMachine();

const updateLoop = setInterval(() => {}, updateInterval);

playerStateMachine.Initialize(playerStateMachine.playerIdleState);
playerStateMachine.currentState.Enter();

document.addEventListener("keydown", (e) => {
  if (e.code == "Space") {
  }
});
