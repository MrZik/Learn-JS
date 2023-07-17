import "../css/headerhome.css";

export const homeDetails = (document.querySelector("header").innerHTML = `
    <div class="app__header_container">
    <img src="imgs/original/cognitive-white.svg" alt="img" />
    <h1 id="title">Ability Tester</h1>
    <p id="description">
    Measure your abilities with brain and cognitive tests
    </p>
    <button type="button">Get Started</button>
    </div>
`);
