import { StateFactory } from "./statefactory.js";

export class GameStateMachine {
  currentState = null;
  factory = null;

  Initialize() {
    this.factory = new StateFactory(this);
    this.currentState = this.factory.GameInitialize();
    this.currentState.Enter();
  }
}
