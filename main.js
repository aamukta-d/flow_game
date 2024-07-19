import {loadWords, checkWordNow, word_list} from "./scripts/scrabble";

async function main_loop(){
    await loadWords()
    checkWordNow("funky")
}

main_loop()