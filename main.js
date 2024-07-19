import {loadWords, checkWordNow, word_list, letterElement, randomLetter} from "./scripts/scrabble";
import {render, remove, create, addClass, hasClass, remClass, find, findAll, write, detect, undetect, style, attribs, isElement} from "./scripts/qol"

let timer = 1

async function start(){
    await loadWords()
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
}

function end(){

}

start()
game_loop()
end()
