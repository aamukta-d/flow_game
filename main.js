import {loadWords, checkWordNow, word_list, letterElement, randomLetter} from "./scripts/scrabble";
import {render, remove, create, addClass, hasClass, remClass, find, findAll, write, detect, undetect, style, attribs, isElement} from "./scripts/qol"

let timer = 1

async function start(){
    await loadWords()
    console.log(checkWordNow("aah"))
}

const game_loop = () => {


    if (timer !== 0){
        render(find(".letter-spawns"),letterElement(randomLetter()))
        setTimeout(game_loop, 2000)
    }
}

function end(){

}

start()
game_loop()
end()