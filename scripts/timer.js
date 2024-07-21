import { points_store, store_points } from "./cookie";
import { makeChart } from "./game-chart";
import { clear_all, formatted_words, points } from "./scrabble";
import {setGameRunning} from "../main"
import { find, remClass, write } from "./qol";

let countdown;
let real_time_left =1000;
const timerDisplay = document.querySelector('.timer');
const popup = document.getElementById("popup")
let prevSpace = 0;

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
      showPopup();
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
  const seconds = 10;
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

function generateWordFlow(){
  const flowOutput = document.getElementById("word-flow")
  flowOutput.innerHTML = '';
  
  for (let i = 0; i<formatted_words.length; i++){

      let boolHooked = false;

      for (let j = 0; j<formatted_words[i].length; j++){ //finds the length of the first formatted word -- how long is that first array? traverse through it all
          if (formatted_words[i][j].hooked){ //if any of the letters are hooked
              boolHooked = true;
          }
      }

      console.log(boolHooked)

      if (boolHooked){
        let hookedIndex = 0;
        let hookedLetter = '';
        for (let l = 0; l<formatted_words[i].length; l++){
          if (formatted_words[i][l].hooked){
            hookedIndex = l;
            hookedLetter = formatted_words[i][l].letter;
          }
        }

        let hookedPrevIndex = 0;
        for (let l = 0; l<formatted_words[i-1].length; l++){
          if (formatted_words[i-1][l].letter == hookedLetter){
            hookedPrevIndex = l;
          }
        }
        
        let spacesNeeded = hookedPrevIndex-hookedIndex;
        let spaceSpan = document.createElement('span');
        console.log(spacesNeeded)
        spaceSpan.innerHTML = '&nbsp;'.repeat(spacesNeeded+16+prevSpace);
        flowOutput.appendChild(spaceSpan);

        for (let k = 0; k<formatted_words[i].length; k++){
          let span = document.createElement('span');
          span.textContent = formatted_words[i][k].letter;
          if (formatted_words[i][k].hooked) {
            span.classList.add('hooked-letter');
          }
          flowOutput.appendChild(span);
        }
      prevSpace = spacesNeeded;
      let br = document.createElement('br');
      flowOutput.appendChild(br);

      }

      if (!boolHooked){
        let spaceSpan = document.createElement('span');
        spaceSpan.innerHTML = '&nbsp;'.repeat(Math.max(0, 16));
        flowOutput.appendChild(spaceSpan);
          for (let k = 0; k<formatted_words[i].length; k++){
              let span = document.createElement('span');
              span.textContent = formatted_words[i][k].letter;
              flowOutput.appendChild(span);
          }

          let br = document.createElement('br');
          flowOutput.appendChild(br);
          prevSpace = 0;
      }
  }
}

function showPopup(){
  setGameRunning(false);
  remClass(popup, ["hidden"])
  generateWordFlow();
  store_points(points)
  write(find(".end-points"),points)
  makeChart(points_store);
  clear_all()
}

export {startTimer, timer ,real_time_left}

