//TODO: when done convert to typesscrtp
const countdownToLom = () => {
    // alert("hello maaam ");
    console.log("@ Date.now()",Date.now());
    
    const currentDate = new Date();
    const lombokDate = new Date("Wed Jan 1 2025 00:00:50");
    console.log(currentDate);
    console.log(lombokDate);
    const lomMS = lombokDate.getTime() - currentDate.getTime();
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const lomDay = Math.ceil(lomMS / (1000 * 60 * 60 * 24));
    console.log("lomDay",Math.abs(lomDay));

    return lomDay;
};

function startCountdown(endTime) {
    const countdownDay= document.getElementById('countdownDay');
    const countdownHour = document.getElementById('countdownHour');
    const countdownMin= document.getElementById('countdownMin');
    const countdownSec = document.getElementById('countdownSec');


    function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = endTime - now;

      if (timeLeft <= 0) {
        //TODO: FIX THIS ?
        countdownDay.textContent = "HOLIDAY TIME";
        // TODO: ADDD THE CONFETTI HERE 
        clearInterval(interval);
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
 
      countdownDay.textContent = `${days}`;
      countdownHour.textContent = `${hours}`;
      countdownMin.textContent = `${minutes}`;
      countdownSec.textContent = `${seconds}`;

    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
  }

  // Set the countdown date (example: 1 minute from now)
  const lombokDate = new Date("Wed Jan 1 2025 10:00:00");

  const countdownDate = lombokDate.getTime() + 1 * 60 * 1000; // Change the duration as needed
  startCountdown(countdownDate);
  
// document.getElementById("myButton").addEventListener("click", countdownToLom);
// document.getElementById("displayCountDown").textContent = `Days left : ${countdownToLom()}`
