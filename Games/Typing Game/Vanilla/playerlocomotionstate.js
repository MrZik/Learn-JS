import { PlayerBaseState } from "./playerbasestate.js";

export class PlayerLocomotionState extends PlayerBaseState {
  constructor(stateMachine) {
    super(stateMachine);
  }

  Enter() {
    super.Enter();
    console.log("Entered player locomotion state.");
  }

  Update(deltaTime) {
    super.Update(deltaTime);
    console.log("Updating player locomotion state.");
  }

  Exit() {
    super.Exit();
    console.log("Exiting player locomotion state.");
  }
}
