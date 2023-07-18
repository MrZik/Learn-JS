import "../style/navbar.css";

export const navbar = (document.querySelector("nav").innerHTML = `
    <div class="app__navbar_container">
    <div class="home_button" id="home">
    <p>ABILITY TESTER</p>
    </div>
    <div class="home_button" id="dashboard">
    <p>DASHBOARD</p>
    </div>
    </div>
`);
