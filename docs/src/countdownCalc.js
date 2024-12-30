import { Fireworks } from "fireworks-js";
import.meta.hot;
const countdownDay = document.getElementById("countdownDay");
const countdownHour = document.getElementById("countdownHour");
const countdownMin = document.getElementById("countdownMin");
const countdownSec = document.getElementById("countdownSec");

const fireworksContainer = document.getElementById("fireworks-container");
const fireworks = new Fireworks(fireworksContainer, {
  autoresize: true,
  opacity: 0.5,
  acceleration: 1.05,
  friction: 0.98,
  gravity: 1.5,
  particles: 50,
  traceLength: 3,
  explosion: 5,
  fireworks: 10,
  intensity: 50,
});

export const startCountdown = (endTime) => {
  const updateCountdown = () => {
    const now = new Date().getTime();
    const lombokDate = endTime - now;

    if (lombokDate <= 0) {
      timerDone(intervalID);
      return;
    }

    const days = Math.floor(lombokDate / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (lombokDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((lombokDate % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((lombokDate % (1000 * 60)) / 1000);

    countdownDay.textContent = `${days}`;
    countdownHour.textContent = `${hours}`;
    countdownMin.textContent = `${minutes}`;
    countdownSec.textContent = `${seconds}`;
  };

  const intervalID = setInterval(updateCountdown, 1000);
  return intervalID;
};

export const getCountdownDate = (date) => {
  return date.getTime() + 1 * 60 * 1000;
};

const timerDone = (intervalID) => {
  const title = document.getElementById("pageTitle");
  title.textContent = "LOMBOK TIME PERHAPS!";
  //Aadd strikethrough for each element
  countdownDay.style.textDecoration = "line-through";
  countdownHour.style.textDecoration = "line-through";
  countdownMin.style.textDecoration = "line-through";
  countdownSec.style.textDecoration = "line-through";

  document.getElementById("button-container").classList.remove("hidden");
  document.getElementById("button-container").classList.add("show");
  document.getElementById("replayBtn").classList.remove("hidden");

  getFireworks();
  clearInterval(intervalID);
};

const getFireworks = () => {
  fireworksContainer.classList.remove("hidden");
  fireworks.start();
  return fireworks;
};

export const replayCountdown = (oldCountdownId, newDate) => {
  const replayElement = document.getElementById("replayBtn");

  replayElement.addEventListener("click", () => {
    console.log("here set time ot");
    clearInterval(oldCountdownId);

    const title = document.getElementById("pageTitle");
    title.textContent = "LOMBOK COUNTDOWN";

    document.getElementById("button-container").classList.add("hidden");
    document.getElementById("button-container").classList.remove("show");

    fireworks.stop();

    // Remove line-through for each countdown element
    countdownDay.style.textDecoration = "none";
    countdownHour.style.textDecoration = "none";
    countdownMin.style.textDecoration = "none";
    countdownSec.style.textDecoration = "none";
    startCountdown(newDate);
  });
};
