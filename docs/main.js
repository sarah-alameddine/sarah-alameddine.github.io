//TODO: when done convert to typesscrtp
const countdownToLom = () => {
    // alert("hello maaam ");
    console.log("@ Date.now()",Date.now());
    
    const currentDate = new Date();
    const lombokDate = new Date("Wed Jan 1 2025 20:09:50");
    console.log(currentDate);
    console.log(lombokDate);
    const lomMS = lombokDate.getTime() - currentDate.getTime();
    const lomDay = Math.ceil(lomMS / (1000 * 60 * 60 * 24));
    console.log("lomDay",Math.abs(lomDay));

    return lomDay;
};

// document.getElementById("myButton").addEventListener("click", countdownToLom);
document.getElementById("displayCountDown").textContent = `Days left : ${countdownToLom()}`
