import { PlayerBaseState } from "./playerbasestate.js";

export class PlayerIdleState extends PlayerBaseState {
  constructor(stateMachine) {
    super(stateMachine);
  }

  Enter() {
    super.Enter();
    console.log("Entered player idle state.");
  }

  Update(deltaTime) {
    super.Update(deltaTime);
    console.log("Update player idle state.");
  }

  Exit() {
    super.Exit();
    console.log("Exiting player idle state.");
  }
}
