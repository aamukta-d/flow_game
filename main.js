import {loadWords, checkWordNow, word_list, letterElement} from "./scripts/scrabble";
import {render, remove, create, addClass, hasClass, remClass, find, findAll, write, detect, undetect, style, attribs, isElement} from "./scripts/qol"

let timer = 1

async function start(){
    await loadWords()
    console.log(checkWordNow("aah"))
}

function game_loop(){

    if (timer !== 0){
        render(find(".letter-spawns"),letterElement("E"))
        console.log("pl")
    }
}

function end(){

}

start()
game_loop()
end()