import {loadWords, checkWordNow, word_list, letterElement, randomLetter} from "./scripts/scrabble";
import {render, remove, create, addClass, hasClass, remClass, find, findAll, write, detect, undetect, style, attribs, isElement} from "./scripts/qol"
import { real_time_left, timer, startTimer } from "./scripts/timer";



async function start(){
    await loadWords()
<<<<<<< HEAD
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
    if (timer !== 0){
        const newLetter = letterElement(randomLetter())
        render(find(".letter-spawns"), newLetter)
        setTimeout(game_loop, 2000)
    }
=======
    startTimer()
    let loop = setInterval(game_loop, 2000);
    if (real_time_left <= 1){
        clearInterval(loop)
    }
}

const game_loop = () => {
    render(find(".letter-spawns"),letterElement(randomLetter()))
>>>>>>> 9bedb155d05deefd905d8dad3f951111b3ec79a7
}

function end(){

}

start()
<<<<<<< HEAD
game_loop()
end()
=======
end()
>>>>>>> 9bedb155d05deefd905d8dad3f951111b3ec79a7
