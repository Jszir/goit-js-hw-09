import flatpickr from "flatpickr";
// Importación adicional de estilos
import "flatpickr/dist/flatpickr.min.css";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] <= new Date()) {
        window.alert("Please choose a date in the future");
        startButton.disabled = true;
      } else {
        startButton.disabled = false;
      }
    },
  };
  
  const datetime = flatpickr("#datetime-picker", options);
  const startButton = document.querySelector("[data-start]")
  const dayValue = document.querySelector("[data-days]")
  const hoursValue = document.querySelector("[data-hours]")
  const minutesValue = document.querySelector("[data-minutes]")
  const secondsValue = document.querySelector("[data-seconds]")

  startButton.addEventListener("click", () => { 

    const selectDate = datetime.selectedDates[0]
    const currentDay = new Date() 
    let count = selectDate - currentDay 

    countdownInterval = setInterval(() => { 
        const {days, hours, minutes, seconds} = convertMs(count) 
     
        secondsValue.textContent = addLeadingZero(seconds)  
        minutesValue.textContent = addLeadingZero(minutes) 
        hoursValue.textContent = addLeadingZero(hours) 
        dayValue.textContent = addLeadingZero(days)

        if (count <= 0) { 
            clearInterval(countdownInterval) 
        } else { 
            count -= 1000
        }
     }, 1000);

     function addLeadingZero(value) {
        return value.toString().padStart(2, "0");
      }
     ;
  })

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

  