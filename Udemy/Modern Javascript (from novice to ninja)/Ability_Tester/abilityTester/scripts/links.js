import "../css/links.css";
const maxItemsPerContainer = 3;
let gamesArray = "";
let linksCount = 8;
let totalSubcontainerCount = 0;
let subcontainers = [];

const getGamesAvailable = async function () {
  const response = await fetch("/games.json");

  if (response.status != 200) {
    throw new Error("Fetch data failed.");
  }

  return await response.json();
};

const createItem = function (title, description, imgUrl, href = "#") {
  let item = `
        <a class="item" href="${href}">
            <img src="${imgUrl}" alt="img" />
            <div class="item_description">
            <h1>${title}</h1>
            <p>${description}</p>
            </div>
        </a>
    `;

  return item;
};

const createSubContainers = function () {
  const container = document.querySelector("#links_container");

  const containerCount = linksCount / maxItemsPerContainer;
  let countFloor = Math.floor(containerCount);

  for (let i = 0; i < countFloor; ++i) {
    totalSubcontainerCount++;

    container.innerHTML += `
          <div class="app__link_subcontainer" id="subcontainer${i}">
          </div>
      `;

    subcontainers.push(`subcontainer${i}`);
  }

  if (containerCount % 1 != 0) {
    totalSubcontainerCount++;

    container.innerHTML += `
          <div class="app__link_subcontainer" id="subcontainer${countFloor}">
          </div>
      `;

    subcontainers.push(`subcontainer${countFloor}`);
  }
};

const addtems = function () {
  let currentContainerCount = 0;

  let container = document.querySelector(
    `#${subcontainers[currentContainerCount]}`
  );

  for (let i = 0; i < linksCount; i++) {
    let component = createItem(
      gamesArray[i].title,
      gamesArray[i].description,
      gamesArray[i].imgUrl,
      gamesArray[i].href
    );

    container.innerHTML += `${component}`;

    if (i % maxItemsPerContainer == 0) {
      currentContainerCount += 1;
      if (currentContainerCount > subcontainers.length) continue;

      console.log(`current container count updated: ${currentContainerCount}`);

      container = document.querySelector(
        `#${subcontainers[currentContainerCount]}`
      );

      console.log(`${container.id}`);
    }
  }
};

const initializeLinks = function () {
  createSubContainers();
  getGamesAvailable()
    .then((data) => {
      gamesArray = data;
      linksCount = data.length;

      addtems();
    })
    .catch((err) => console.log(err.message));
};

export { initializeLinks };

// let linksContainer = (document.querySelector("#links_container").innerHTML = `
//     <div class="app__link_subcontainer">
//         <div class="item">
//             <img src="./assets/imgs/original/rush-blue.svg" alt="img" />
//             <div class="item_description">
//             <h1>Reaction Time</h1>
//             <p>Test your visual reflexes.</p>
//             </div>
//         </div>
//         <div class="item">
//             <img src="./assets/imgs/original/visualization-blue.svg" alt="img" />
//             <div class="item_description">
//             <h1>Sequence Memory</h1>
//             <p>Remember and increasingly long pattern of button presses.</p>
//             </div>
//         </div>
//         <div class="item">
//             <img src="./assets/imgs/original/target-blue.svg" alt="img" />
//             <div class="item_description">
//             <h1>Aim Trainer</h1>
//             <p>How quickly can you hit all targets?</p>
//             </div>
//         </div>
//     </div>
//     <div class="app__link_subcontainer">
//         <div class="item">
//             <img src="./assets/imgs/original/cubes-blue.svg" alt="img" />
//             <div class="item_description">
//             <h1>Number Memory</h1>
//             <p>Remember the longest number you can.</p>
//             </div>
//         </div>
//         <div class="item">
//             <img src="./assets/imgs/original/dictionary-blue.svg" alt="img" />
//             <div class="item_description">
//             <h1>Verbal Memory</h1>
//             <p>Keep as many words in short term memory as possible.</p>
//             </div>
//         </div>
//         <div class="item">
//             <img src="./assets/imgs/original/visualization-blue.svg" alt="img" />
//             <div class="item_description">
//             <h1>Chimp Test</h1>
//             <p>Are you smarter than a chimpanzee?</p>
//             </div>
//         </div>
//     </div>
//     <div class="app__link_subcontainer">
//         <div class="item_end item">
//             <img src="./assets/imgs/original/cubes-blue.svg" alt="img" />
//             <div class="item_description">
//             <h1>Visual Memory</h1>
//             <p>Remember an increasingly large broad of squares.</p>
//             </div>
//         </div>
//         <div class="item_end item" id="typingitem">
//             <img src="./assets/imgs/Original/gamer-blue.svg" alt="img" />
//             <div class="item_description">
//             <h1>Typing</h1>
//             <p>How many words per minute can you write?</p>
//             </div>
//         </div>
//     </div>
// `);
