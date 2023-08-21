import { GameFinishState } from "./gamefinishstate.js";
import { PlayerInputState } from "./playerinputstate.js";
import { GameInitializeState } from "./gameinitializestate.js";

export class StateFactory {
  stateMachine = null;

  constructor(stateMachine) {
    this.stateMachine = stateMachine;
  }

  GameInitialize() {
    return new GameInitializeState(this.stateMachine);
  }

  PlayerInput() {
    return new PlayerInputState(this.stateMachine);
  }

  GameFinish() {
    return new GameFinishState(this.stateMachine);
  }
}
