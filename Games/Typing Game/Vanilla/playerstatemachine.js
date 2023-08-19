import { PlayerIdleState } from "./playeridlestate.js";

export class PlayerStateMachine {
  currentState = null;
  playerIdleState = new PlayerIdleState(this);

  Initialize(setState) {
    this.currentState = setState;
  }

  ChangeState(newState) {
    this.currentState.Exit();
    this.currentState = newState;
    this.currentState.Enter();
  }
}
