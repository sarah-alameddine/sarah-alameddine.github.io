import { playAudioMsg } from "../utils.js";
import {
  getCountdownDate,
  replayCountdown,
  startCountdown,
} from "./countdownCalc.js";

const appInit = () => {
  const LombokCountdownDate = getCountdownDate(
    new Date("Wed Jan 1 2025 09:30:00")
  );

  let intervalID = startCountdown(LombokCountdownDate);
  const currentDate = new Date();

  const oneMinAddedDate = currentDate.setMinutes(currentDate.getMinutes() + 1);

  replayCountdown(intervalID, oneMinAddedDate);
  playAudioMsg("audioMsg", "audio-btn");
  playAudioMsg("nonStop", "music-btn");
};

appInit();
