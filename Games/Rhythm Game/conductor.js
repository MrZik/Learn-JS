const BPM = 102;
const FPS = 300;
const CTX = new AudioContext();
const HI_HAT_CLIP = "./179757__mike624__vermona-hi-hat-1.mp3";
const BPM_100_AUDIO = "./drums_100bpm.mp3";

const audioElem = document.querySelector(".looping-audio");
const croschetAudio = document.querySelector(".croschet-audio");

//audioElem.src = "./Let the beat hit em! (CLASSIC R&B STYLE).mp3";
audioElem.src = BPM_100_AUDIO;
croschetAudio.src = HI_HAT_CLIP;
const track = CTX.createMediaElementSource(audioElem);
const clipTrack = CTX.createMediaElementSource(croschetAudio);

const mainLoopVolume = CTX.createGain();
const croschetVolume = CTX.createGain();

mainLoopVolume.gain.value = 0.2; // 20%
croschetVolume.gain.value = 0.3;

track.connect(mainLoopVolume).connect(CTX.destination);
clipTrack.connect(croschetVolume).connect(CTX.destination);

let crotchet = 60 / BPM;

//The number of seconds for each song beat
let secPerBeat = 0;
let audio;

//Current song position, in seconds
let songPosition = 0;
let songPosInBeats = 0;
let offset = 0; // ms
let totalOffset = 0;

//How many seconds have passed since the song started
let startTime = 0;
let lastbeat = 0;
let update;

function startUpdate() {
  // for some reason, it will not work if
  // I just add it all to the total offset??
  offset += CTX.outputLatency;
  offset += startTime;

  totalOffset += offset;
  console.log(`total offset: ${offset}`, `start time: ${startTime}`);
  update = setInterval(loop, 1000 / FPS);
}

function songEnd() {
  clearInterval(update);
  lastbeat = 0;
  window.addEventListener("keydown", play, { once: true });
}

function loop() {
  songPosition = CTX.currentTime - totalOffset;
  songPosInBeats = songPosition / secPerBeat;

  if (songPosition >= lastbeat + crotchet) {
    // console.log(
    //   `time: ${t}`,
    //   `last beat: ${lastbeat}`,
    //   `songPos: ${songPosition}`
    // );
    lastbeat += crotchet;
    croschetAudio.play();
  }
}

function play() {
  audioElem.play();
  startTime = CTX.currentTime;
  startUpdate();
  audioElem.addEventListener("ended", songEnd);
}

window.addEventListener("keydown", play, { once: true });
