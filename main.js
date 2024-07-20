import {loadWords, letterElement, randomLetter, cleanCards, formatted_words} from "./scripts/scrabble";
import {render, remove, create, addClass, hasClass, remClass, find, findAll, write, detect, undetect, style, attribs, isElement} from "./scripts/qol"
import { real_time_left, timer, startTimer } from "./scripts/timer";

let loop = ""
let game_running = false

async function start(){
    await loadWords()
    startTimer()
    if (loop === ""){
        loop = setInterval(game_loop, 1000);
    }
    if (real_time_left <= 1){
        clearInterval(loop)
    }
}


const game_loop = () => {
    render(find(".letter-spawns"),letterElement(randomLetter()))
    cleanCards()
    //console.log(getEventListeners(document.querySelectorAll('.tile')));
}

function end(){

}

start()
game_loop()
end()

export{game_running}