const dotElem = document.querySelector(".dot");
const BPM = 100;
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

mainLoopVolume.gain.value = 0.25; // 20%
croschetVolume.gain.value = 0.35;

track.connect(mainLoopVolume).connect(CTX.destination);
clipTrack.connect(croschetVolume).connect(CTX.destination);

// The number of seconds each beat
// this is also equal to the duration of a quarter note
let crotchet = 60 / BPM;

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

const startUpdate = () => {
  // for some reason, it will not work if
  // I just add it all to the total offset??
  offset += CTX.outputLatency;
  offset += startTime;

  totalOffset += offset;
  console.log(`total offset: ${offset}`, `start time: ${startTime}`);
  update = setInterval(loop, 1000 / FPS);
};

const songEnd = () => {
  clearInterval(update);
  lastbeat = 0;
  songPosition = 0;
  window.addEventListener("keydown", play, { once: true });
};

const loop = () => {
  songPosition = CTX.currentTime - totalOffset;
  songPosInBeats = songPosition / crotchet;

  if (songPosition >= lastbeat + crotchet) {
    // console.log(
    //   `time: ${t}`,
    //   `last beat: ${lastbeat}`,
    //   `songPos: ${songPosition}`
    // );
    lastbeat += crotchet;
    croschetAudio.play();
  }
};

const showDot = () => {
  dotElem.classList.remove("hidden");
  setTimeout(() => {
    dotElem.classList.add("hidden");
  }, crotchet);
};

const play = () => {
  audioElem.play();
  startTime = CTX.currentTime;
  startUpdate();
  audioElem.addEventListener("ended", songEnd);
};

window.addEventListener("keydown", play, { once: true });
