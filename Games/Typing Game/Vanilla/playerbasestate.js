export class PlayerBaseState {
  constructor(stateMachine) {
    this.stateMachine = stateMachine;
  }
  Enter() {
    console.log("Entered base state.");
  }

  Update(deltaTime) {
    console.log("Base state update running.");
  }

  Exit() {
    console.log("Exiting base state.");
  }
}
