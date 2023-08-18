import { State } from "./state.js";

export class PlayerBaseState extends State {
  constructor(stateMachine) {
    super();
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
