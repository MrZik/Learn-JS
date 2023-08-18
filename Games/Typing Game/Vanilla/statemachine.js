export class Statemachine {
  currentState = null;

  Initialize(setState) {
    this.currentState = setState;
  }

  ChangeState(newState) {
    this.currentState.Exit();
    this.currentState = newState;
    this.currentState.Enter();
  }
}
