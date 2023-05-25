
const dayElements = document.querySelectorAll('.time-day');
const hoursElements = document.querySelectorAll('.time-hours');
const minutesElements = document.querySelectorAll('.time-minutes');
const secondsElements = document.querySelectorAll('.time-seconds');


const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 3); 
countdownDate.setHours(countdownDate.getHours() + 16); 
countdownDate.setMinutes(countdownDate.getMinutes() + 59); 
countdownDate.setSeconds(countdownDate.getSeconds()); 

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = countdownDate - currentDate;


  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);


  dayElements[0].textContent = Math.floor(days / 10); 
  dayElements[1].textContent = days % 10; 
  hoursElements[0].textContent = Math.floor(hours / 10); 
  hoursElements[1].textContent = hours % 10; 

  minutesElements[0].textContent = Math.floor(minutes / 10); 
  minutesElements[1].textContent = minutes % 10; 

  secondsElements[0].textContent = Math.floor(seconds / 10); 
  secondsElements[1].textContent = seconds % 10; 
}



