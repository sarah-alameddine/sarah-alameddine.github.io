import { playAudioMsg } from "../utils.js";
import {
  getCountdownDate,
  replayCountdown,
  startCountdown,
} from "./countdownCalc.js";

const appInit = () => {
  // TODO: CHANGE TIME TO 9:30
  // const LombokCountdownDate = getCountdownDate(
  //   new Date("Wed Jan 1 2025 09:30:00")
  // );
  const LombokCountdownDate =  getCountdownDate(new Date("Wed Dec 31 2024 9:30:00"));

  let intervalID = startCountdown(LombokCountdownDate);
  const currentDate = new Date();

  const oneMinAddedDate = currentDate.setMinutes(currentDate.getMinutes() + 1);

  replayCountdown(intervalID, oneMinAddedDate);
  playAudioMsg("audioMsg", "audio-btn");
  playAudioMsg("nonStop", "music-btn");
};

appInit();
