// metronome.js
let intervalId = null;
let isPlaying = false;
let currentBpm = 60;
let volume = 20;
let timeSignature = "4/4";
let beatValue = 1;
let wholeNoteDuration;
let halfNoteDuration;
let quarterNoteDuration;
let sixteenthNoteDuration;

const startStopButton = document.getElementById("startStopButton");
const bpmSlider = document.getElementById("bpmSlider");
const bpmValue = document.getElementById("bpm-value");
const volumeSlider = document.getElementById("volumeSlider");
const timeSignatureSelect = document.getElementById("timeSignatureSelect");
const beatSelect = document.getElementById("beatSelect");

const timeSignatureBeats = {
  "4/4": 4,
  "3/4": 3,
  "6/8": 6,
  // Add more time signatures here if needed
};

function CalculateNoteDurations() {
  // Calculate the durations of notes based on the known BPM
  wholeNoteDuration = 240 / currentBpm; // 4 beats per whole note
  halfNoteDuration = wholeNoteDuration / 2;
  quarterNoteDuration = wholeNoteDuration / 4;
  sixteenthNoteDuration = wholeNoteDuration / 16;
}

function playTick() {
  // Calculate the tick duration based on the selected beat and time signature
  const beatsPerMeasure = parseInt(timeSignature.split("/")[0], 10);
  const beatDuration = (60 / currentBpm) * (4 / beatsPerMeasure) * 1000;

  // Create an oscillator for generating the tick sound
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.frequency.setValueAtTime(1000, audioContext.currentTime); // Adjust the frequency for a suitable click sound.

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  gainNode.gain.setValueAtTime(volume / 100, audioContext.currentTime); // Set the gain (volume) based on the user-selected volume.

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.05); // Play the click sound for 0.05 seconds (adjust as needed).

  // Determine the next tick time based on the selected beat value
  let nextTickTime;
  switch (beatValue) {
    case 1:
      nextTickTime = audioContext.currentTime + beatDuration * 4; // Whole note
      break;
    case 2:
      nextTickTime = audioContext.currentTime + beatDuration * 2; // Half note
      break;
    case 4:
      nextTickTime = audioContext.currentTime + beatDuration; // Quarter note
      break;
    case 16:
      nextTickTime = audioContext.currentTime + beatDuration / 4; // Sixteenth note
      break;
    default:
      nextTickTime = audioContext.currentTime + beatDuration; // Default to quarter note
  }

  // Schedule the next tick
  intervalId = setTimeout(playTick, nextTickTime - audioContext.currentTime);
}

function updateBpm() {
  currentBpm = parseInt(bpmSlider.value, 10);
  bpmValue.textContent = currentBpm;
  if (isPlaying) {
    clearInterval(intervalId);
    playTick(); // Restart the metronome with the updated BPM
  }
}

function updateVolume() {
  volume = parseInt(volumeSlider.value, 10);
}

function updateTimeSignature() {
  timeSignature = timeSignatureSelect.value;
}

function updateBeat() {
  beatValue = parseInt(beatSelect.value, 10);
  CalculateNoteDurations();
}

function startMetronome() {
  clearInterval(intervalId);
  isPlaying = true;
  playTick();
  intervalId = setInterval(updateVisualAid, (60 / currentBpm) * 1000);
}

function stopMetronome() {
  clearInterval(intervalId);
  clearInterval(leftLineIntervalId);
  clearInterval(rightLineIntervalId);
  stopVisualAidAnimation();
  isPlaying = false;
  updateVisualAid();
}

function toggleMetronome() {
  if (isPlaying) {
    stopMetronome();
    startStopButton.textContent = "Start";
  } else {
    startMetronome();
    startStopButton.textContent = "Stop";
  }
}

let leftLineIntervalId = null;
let rightLineIntervalId = null;

function moveLeftLineToCenter(duration, nextBeatTime) {
  const visualAidWidth = document.querySelector(
    ".visual-aid-container"
  ).offsetWidth;
  const halfWidth = visualAidWidth / 2;

  const leftLineElement = document.querySelector(".left-line");
  const startPosition =
    parseFloat(leftLineElement.style.transform.replace("translateX(", "")) || 0;

  const targetPosition = halfWidth - startPosition;

  let startTime;

  function animate(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const currentPosition = startPosition + targetPosition * progress;

    leftLineElement.style.transform = `translateX(${currentPosition}px)`;

    if (progress < 1) {
      leftLineIntervalId = requestAnimationFrame(animate);
    } else {
      setTimeout(() => {
        if (!isPlaying) {
          leftLineElement.style.transform = `translateX(0)`;
        }
      }, nextBeatTime / 2); // Stay at the center for half the time of the next beat
    }
  }

  leftLineIntervalId = requestAnimationFrame(animate);
}

function moveRightLineToCenter(duration, nextBeatTime) {
  const visualAidWidth = document.querySelector(
    ".visual-aid-container"
  ).offsetWidth;
  const halfWidth = visualAidWidth / 2;

  const rightLineElement = document.querySelector(".right-line");
  const startPosition =
    parseFloat(rightLineElement.style.transform.replace("translateX(", "")) ||
    0;

  const targetPosition = halfWidth - startPosition;

  let startTime;

  function animate(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const currentPosition = startPosition + targetPosition * progress;

    rightLineElement.style.transform = `translateX(-${currentPosition}px)`;

    if (progress < 1) {
      rightLineIntervalId = requestAnimationFrame(animate);
    } else {
      setTimeout(() => {
        if (!isPlaying) {
          rightLineElement.style.transform = `translateX(0)`;
        }
      }, nextBeatTime / 2); // Stay at the center for half the time of the next beat
    }
  }

  rightLineIntervalId = requestAnimationFrame(animate);
}

function calculateNextBeatTime(beatsPerMeasure, noteType) {
  const wholeNoteDuration = (60 / currentBpm) * 1000;
  const beatDuration = wholeNoteDuration / beatsPerMeasure;
  const nextBeatTime = (beatDuration * (4 / noteType)) / 2;

  return nextBeatTime;
}

function updateVisualAid() {
  const beatsPerMeasure = parseInt(timeSignature.split("/")[0], 10);
  const noteType = parseInt(timeSignature.split("/")[1], 10);
  const nextBeatTime = calculateNextBeatTime(beatsPerMeasure, noteType);

  const visualAidSpeed = 2; // Adjust this value for controlling the speed (higher value = slower animation)

  const duration = ((60 / currentBpm) * 1000 * (4 / noteType)) / visualAidSpeed;

  moveLeftLineToCenter(duration, nextBeatTime);
  moveRightLineToCenter(duration, nextBeatTime);
}

function stopVisualAidAnimation() {
  if (leftLineIntervalId) {
    cancelAnimationFrame(leftLineIntervalId);
    leftLineIntervalId = null;
    const leftLineElement = document.querySelector(".left-line");
    leftLineElement.style.transform = "translateX(0)";
  }
  if (rightLineIntervalId) {
    cancelAnimationFrame(rightLineIntervalId);
    rightLineIntervalId = null;
    const rightLineElement = document.querySelector(".right-line");
    rightLineElement.style.transform = "translateX(0)";
  }
}

// Attach event listeners
bpmSlider.addEventListener("input", updateBpm);
volumeSlider.addEventListener("input", updateVolume);
timeSignatureSelect.addEventListener("change", updateTimeSignature);
beatSelect.addEventListener("change", updateBeat);
startStopButton.addEventListener("click", toggleMetronome);

// Initialize the audio context
let audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Initial setup
bpmValue.textContent = currentBpm;
updateVolume();
updateTimeSignature();
updateBeat();
