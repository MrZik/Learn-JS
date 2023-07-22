import "./assets/style/main.css";
import { addNavbarContents } from "./assets/scripts/navbar.js";
import "./assets/style/header.css";
import { addHomeDetails } from "./assets/scripts/headerhome.js";
import { initializeLinks } from "./assets/scripts/links.js";
import { addFooterContents } from "./assets/scripts/footer.js";
import "./assets/scripts/gameshandler.js";

addNavbarContents();
addHomeDetails();
initializeLinks();
addFooterContents();

// **********************************************************************************
// **********************************************************************************

// QUESTIONS FOR THE GAME STRUCTURE

// How will the on click know what games was pressed?

// How will the logic for the games be stored?
// All games will have their own script and css styles

// How will this (main.js) interact with the games logic?
// by using methods rom games handler script.

// Do I use a handler/manager script or the games,
// so that this script will interact will only that script?
// Yes. Create a games handler script and that will solely
// responsible for interacting with the all the different games
// this script will onlyy interact with the games handler

// **********************************************************************************
// **********************************************************************************
