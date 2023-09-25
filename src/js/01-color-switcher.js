
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  
const body = document.body
const startButton = document.querySelector("[data-start]")
const stopButton = document.querySelector('[data-stop]');
let interval

startButton.addEventListener("click", (e) => { 
    startButton.disabled = true
    stopButton.disabled= false

    interval= setInterval(() => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
  }, 1000);
     
   
})

stopButton.addEventListener("click", (e) => { 
    startButton.disabled = false
    stopButton.disabled= true
    clearInterval(interval);
})

