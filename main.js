import {loadWords, letterElement, randomLetter, cleanCards, formatted_words, fadeIn} from "./scripts/scrabble";
import {render, remove, create, addClass, hasClass, remClass, find, findAll, write, detect, undetect, style, attribs, isElement} from "./scripts/qol"
import { real_time_left, timer, startTimer } from "./scripts/timer";
import {makeChart} from "./scripts/game-chart"
const replay = document.getElementById("replay")
const popup = document.getElementById("popup")
const startPopup = document.getElementById("start-popup-fixed")
const startButton = document.getElementById("start-button")
const flag_buttons = find(".flag-buttons")


let loop = ""
let game_running = false;

detect(replay, 'click', function() {
    popup.classList.add("hidden")
    startTimer();
    game_running = true;
})

detect(startButton, 'click', () => {
    console.log("sss")
   startPopup.classList.add("hidden")
   popup.classList.add("hidden") 
   flag_buttons.classList.add("hidden") 
   startButton.classList.add("hidden") 
   startTimer()
   game_running = true;
})


async function start(){
    await loadWords()
    
    //startPopup.style.display = 'block';
    if (loop === ""){
        loop = setInterval(game_loop, 1000);
    }
   
    if (real_time_left <= 1){
        clearInterval(loop)
    }

}


const game_loop = () => {
    fadeIn(find(".letter-spawns"),letterElement(randomLetter()))
    cleanCards()
    //console.log(getEventListeners(document.querySelectorAll('.tile')));
}

function end(){

}

function setGameRunning(boolean){
    game_running = boolean;
}

start()
game_loop()
end()

export{game_running, setGameRunning}
