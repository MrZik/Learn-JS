export class GameFinishState {
  stateMachine = null;

  constructor(stateMachine) {
    this.stateMachine = stateMachine;
  }
  Enter() {
    console.log("Entered Game Finish state.");
  }

  Update() {
    console.log("Game Finish state update running.");
  }

  Exit() {
    console.log("Exiting Game Finish state.");
  }
}
