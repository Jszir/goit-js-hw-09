
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
const form = document.querySelector(".form")

form.addEventListener("submit", (e) => { 
  e.preventDefault()
const delay = document.querySelector('[name="delay"]') 
const step = document.querySelector('[name="step"]') 
const amount = document.querySelector('[name="amount"]') 

const delayValue = (delay.value);
const stepValue = (step.value);
const amountValue = (amount.value);

for (let i = 0; i < amountValue; i++ ) { 
  
const acumulate =+ delayValue + i * stepValue
  createPromise(i+1, acumulate)  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }

}
)


