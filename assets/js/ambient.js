document.addEventListener("DOMContentLoaded", () => {
  const sounds = [
    "assets/audio/ambient_hum.mp3",
    "assets/audio/low_wind.mp3",
    "assets/audio/subtle_whisper.mp3"
  ];

  document.addEventListener("click", startAmbientOnce, { once: true });

  function startAmbientOnce() {
    playRandomAmbient();
  }

});
