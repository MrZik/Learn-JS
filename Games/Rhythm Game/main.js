const ctx = new AudioContext();
let audio;

fetch("./Let the beat hit em! (CLASSIC R&B STYLE).mp3")
  .then((data) => data.arrayBuffer())
  .then((arrayBuffer) => ctx.decodeAudioData(arrayBuffer))
  .then((decodedAudio) => {
    audio = decodedAudio;
  });

const bpm = 102;

let crotchetsPerBar;
let crotchet = 60 / bpm;

let songPosition;
let deltaSongPos;

let lastHit;
let actualLastHit;

let beatNumber;
let beatBar;
let nextBeatTime;
let nextBarTime;

let offset = 0.000117; // ms
let addOffset;

let interval = (crotchet + offset) * 1000;
let startTime;

function playback() {
  const playSound = ctx.createBufferSource();
  let gainNode = ctx.createGain();
  gainNode.gain.value = 0.2; // 20%
  gainNode.connect(ctx.destination);
  playSound.buffer = audio;
  playSound.connect(gainNode);
  playSound.start(ctx.currentTime);
  startTime = ctx.currentTime;
  startInterval(ctx.currentTime);
}

const startInterval = function () {
  console.log(startTime);
  setInterval(() => {
    songPosition = ctx.currentTime - startTime - offset;
    console.log("tick");
    console.log(songPosition);
  }, interval + startTime);
};

window.addEventListener("keydown", playback, { once: true });
