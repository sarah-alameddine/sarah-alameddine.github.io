export const playAudioMsg = (audioId,btnId) => {
  const audioElement = document.getElementById(audioId);
  const audioBtn = document.getElementById(btnId);
  let isPlaying = false;
  audioBtn.addEventListener("click", () => {

    if (isPlaying === false) {
      audioElement
        .play()
        .then(console.log("audio is playing now"))
        .catch((error) => console.error("Failed to play:", error));
      isPlaying = true;
      audioBtn.textContent = audioBtn.textContent.replace("Play", "Pause");
    } else {
      audioElement
      .pause()
      isPlaying = false;
      audioBtn.textContent = audioBtn.textContent.replace("Pause","Play");

    }
  });
};