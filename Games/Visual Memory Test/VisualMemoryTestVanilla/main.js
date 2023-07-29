import { showHomePage, startBtnEvent } from "/lobby.js";
import { showGame } from "/game.js";

const app = document.getElementById("app");

const ShowLobby = (() => {
  return () => {
    showHomePage()(app);
    startBtnEvent(showGame);
  };
})();

ShowLobby();
