export class PlayerInputState {
  stateMachine = null;

  constructor(stateMachine) {
    this.stateMachine = stateMachine;
  }
  Enter() {
    console.log("Entered Player Input State.");
  }

  Update() {
    console.log("Player Input State update running.");
  }

  Exit() {
    console.log("Exiting Player Input State.");
  }
}
