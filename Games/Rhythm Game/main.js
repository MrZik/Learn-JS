const playbtn = document.getElementById("playbtn");
let audio = new Audio("MAX300.mp3");
const audioCtx = new window.AudioContext();
let audioSource;
let analyser;

playbtn.addEventListener("click", (e) => {
  e.preventDefault();
  audio.volume = 0.1;
  audio.play();
  audioSource = audioCtx.createMediaElementSource(audio);
  analyser = audioCtx.createAnalyser();
  audioSource.connect(analyser);
  analyser.connect(audioCtx.destination);
});
