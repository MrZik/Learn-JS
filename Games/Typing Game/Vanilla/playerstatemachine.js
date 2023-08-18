import { Statemachine } from "./statemachine.js";
import { PlayerIdleState } from "./playeridlestate.js";
import { PlayerLocomotionState } from "./playerlocomotionstate.js";

export class PlayerStateMachine extends Statemachine {
  playerIdleState = new PlayerIdleState(this);
  playerLocomotionState = new PlayerLocomotionState(this);

  Initialize(setState) {
    super.Initialize(setState);
  }

  ChangeState(newState) {
    super.ChangeState(newState);
  }
}
