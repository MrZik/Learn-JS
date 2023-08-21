export class GameInitializeState {
  stateMachine = null;

  constructor(stateMachine) {
    this.stateMachine = stateMachine;
  }
  Enter() {
    console.log("Entered Initialize state.");
    const app = document.querySelector("#container");
    app.innerHTML = `
      <h1 id="title">Typing Test</h1>
      <p id="description">How many words per minute can you type?</p>
      <div class="text-box-container" id="text-box">
        <p id="text-to-type">
        Democracy's premise rests on the notion that the collective wisdom of the majority will prove right more often than it's wrong; that given sufficient opportunity in the pursuit of happiness, your population will develop its talents, its intellect, its better judgment; that over time its capacity for discernment and self-correction will be enlarged
        </p>
      </div>
      <p id="instructions">Start typing to begin</p>
    `;
  }

  Update() {
    console.log("Initialize state update running.");
  }

  Exit() {
    console.log("Exiting Initialize state.");
  }

  SwitchState(newState) {
    this.Exit();
    this.stateMachine.currentState = newState;
    newState.Enter();
  }
}
