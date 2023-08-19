import { Statemachine } from "./statemachine.js";
import { PlayerIdleState } from "./playeridlestate.js";

export class PlayerStateMachine extends Statemachine {
  playerIdleState = new PlayerIdleState(this);

  Initialize(setState) {
    super.Initialize(setState);
  }

  ChangeState(newState) {
    super.ChangeState(newState);
  }
}
