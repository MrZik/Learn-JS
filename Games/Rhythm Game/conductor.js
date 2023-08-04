const BPM = 102;
const FPS = 360;
const CTX = new AudioContext();

const audioElem = document.querySelector("audio");
audioElem.src = "./Let the beat hit em! (CLASSIC R&B STYLE).mp3";
const track = CTX.createMediaElementSource(audioElem);

const volume = CTX.createGain();
volume.gain.value = 0.2; // 20%
track.connect(volume).connect(CTX.destination);

let crotchet = 60 / BPM;
let secPerBeat = 0;
let audio;
let songPosition = 0;
let songPosInBeats = 0;
let offset = 0.00109833; // ms
let totalOffset = 0;
let startTime = 0;
let lastbeat = 0;
let update;

function startUpdate() {
  // for some reason, it will not work if
  // I just add it all to the total offset??
  offset += CTX.outputLatency;
  offset += startTime;

  totalOffset += offset;
  //console.log(`total offset: ${offset}`, `start time: ${startTime}`);
  update = setInterval(loop, 1000 / FPS);
}

function songEnd() {
  clearInterval(update);
  window.addEventListener("keydown", play, { once: true });
}

function loop() {
  let t = CTX.currentTime;
  songPosition = t - totalOffset;
  songPosInBeats = songPosition / secPerBeat;

  if (songPosition >= lastbeat + crotchet) {
    // console.log(
    //   `time: ${t}`,
    //   `last beat: ${lastbeat}`,
    //   `songPos: ${songPosition}`
    // );
    lastbeat += crotchet;
  }
}

function play() {
  audioElem.play();
  startTime = CTX.currentTime;
  startUpdate();
  audioElem.addEventListener("ended", songEnd);
}

window.addEventListener("keydown", play, { once: true });
