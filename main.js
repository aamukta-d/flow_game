import {loadWords, checkWordNow, word_list, letterElement, randomLetter, cleanCards} from "./scripts/scrabble";
import {render, remove, create, addClass, hasClass, remClass, find, findAll, write, detect, undetect, style, attribs, isElement} from "./scripts/qol"
import { real_time_left, timer, startTimer } from "./scripts/timer";

let loop = ""

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

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting === false) { // When the element is out of the viewport
            entry.target.remove(); // Remove the element
        }
    });
}, {
    root: null, // Use the viewport as the root
    threshold: 0.1 // Trigger when 100% of the element is out of the viewport
});

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
