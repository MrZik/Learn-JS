import { GameFinishState } from "./gamefinishstate.js";
import { PlayerInputState } from "./playerinputstate.js";
import { GameInitializeState } from "./gameinitializestate";

export class StateFactory {
  stateMachine = null;
  constructor(stateMachine) {
    this.stateMachine = stateMachine;
  }

  GameInitialize() {
    return new GameInitializeState(stateMachine);
  }

  PlayerInput() {
    return new PlayerInputState(stateMachine);
  }

  GameFinish() {
    return new GameFinishState(stateMachine);
  }
}
