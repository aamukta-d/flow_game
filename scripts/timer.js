let countdown;
let real_time_left =1000;
const timerDisplay = document.querySelector('.timer');
//const endTime = document.querySelector('.display__end-time');
//const buttons = document.querySelectorAll('[data-time]');


function timer(seconds) {
  // Clear any existing timers
  clearInterval(countdown);


  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);


  // Update the countdown every second
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    real_time_left = secondsLeft
    // Stop the timer when it reaches zero
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}


function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}


function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
}


function startTimer() {
  // Start a 1-minute countdown (60 seconds)
  const seconds = 60;
  timer(seconds);
}

/*
buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  // Start a 1-minute countdown (60 seconds)
  const seconds = 60;
  timer(seconds);
  this.reset();
});
*/

export {startTimer, timer ,real_time_left}