const ctx = new AudioContext();
let audio;

const audioElem = document.querySelector("audio");
audioElem.src = "./Let the beat hit em! (CLASSIC R&B STYLE).mp3";
const track = ctx.createMediaElementSource(audioElem);

const mainLoopVolume = ctx.createGain();
mainLoopVolume.gain.value = 0.2; // 20%

track.connect(mainLoopVolume).connect(ctx.destination);

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

let offset = 0.00109833; // ms
let totalOffset = 0;
let addOffset;

let interval = (crotchet + offset) * 1000;
let startTime;

let hasSongStarted = false;
let songPosInBeats;
let secPerBeat;
let lastbeat = 0;
