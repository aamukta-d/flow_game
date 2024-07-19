import {loadWords, checkWordNow, word_list, letterElement, randomLetter} from "./scripts/scrabble";
import {render, remove, create, addClass, hasClass, remClass, find, findAll, write, detect, undetect, style, attribs, isElement} from "./scripts/qol"
import { real_time_left, timer, startTimer } from "./scripts/timer";



async function start(){
    await loadWords()
    startTimer()
    let loop = setInterval(game_loop, 2000);
    if (real_time_left <= 1){
        clearInterval(loop)
    }
}

const game_loop = () => {
    render(find(".letter-spawns"),letterElement(randomLetter()))
}

function end(){

}

start()
end()