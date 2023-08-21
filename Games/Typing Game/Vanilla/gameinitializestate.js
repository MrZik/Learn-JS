export class GameInitializeState {
  stateMachine = null;

  constructor(stateMachine) {
    this.stateMachine = stateMachine;
  }
  Enter() {
    console.log("Entered Initialize state.");
  }

  Update(deltaTime) {
    console.log("Initialize state update running.");
  }

  Exit() {
    console.log("Exiting Initialize state.");
  }
}
