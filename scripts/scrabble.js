let word_list = []
let letter_flow_list = []
let loaded_letters = []
import {render, remove, create, addClass, hasClass, remClass, find, findAll, write, detect, undetect, style, attribs, isElement} from "./qol"


async function loadWords(){
    const fileUrl = 'https://raw.githubusercontent.com/jmlewis/valett/master/scrabble/sowpods.txt' // provide file location

    const response = await fetch(fileUrl)
    const data = await response.text()
    const word_list_temp = data.split("\r\n");
    word_list = word_list_temp.map((word) => {
        return word.toLowerCase()
    })

}

function checkWordNow(word){
    let myword = word.toUpperCase()
    console.log(myword)
    let total_score = 0
    if (word_list.includes(word)){
        for(let i = 0; i < myword.length; i++) {
            let letter = myword[i];
            let score = getLetterScore(letter)
            total_score += score
        }
        return total_score
    }
    else{
        return 0 
    }
}

function getLetterScore(letter){
    let score = 0
    switch(letter) {
        case "E":
        case "A":
        case "I":
        case "O":
        case "N":
        case "R":
        case "T":
        case "L":
        case "S":
        case "U":
           score = 1;
           break;
        case "D":
        case "G":
           score = 2;
           break;
        case "B":
        case "C":
        case "M":
        case "P":
           score = 3;
           break;
        case "F":
        case "H":
        case "V":
        case "W":
        case "Y":
           score = 4;
           break;
        case "K":
           score = 5;
           break;
        case "J":
        case "X":
           score = 8;
           break;
        case "Q":
        case "Z":
           score = 10;
           break;
     }
     return score
}

function letterElement(lett){
    let letter = lett.toUpperCase()
    let ele = create("span")
    ele.dataset.score = getLetterScore(letter)
    write(ele, letter)
    addClass(ele,["tile","inflow"])
    let rotation = (Math.random()*90)-45
    style(ele, `
            transform:rotate(${rotation}deg);
        `)
    detect(ele, "click", letterTouch)
    letter_flow_list.push(ele)
    return ele
}

const letterTouch = (e)=>{
    remove(find(".letter-spawns"), e.target)
    letter_flow_list = letter_flow_list.filter(letter => letter === e.target);
    loadLetter(e.target)
}

function randomLetter(){
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const charactersLength = characters.length;
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}

function loadLetter(letele){
    render(find(`.slot-${loaded_letters.length}`),letele)
    remClass(letele,["inflow"])
    style(letele, `
        transform:rotate(0deg);
    `)
    loaded_letters.push(letele)
}

export {loadWords, letterElement, checkWordNow, word_list, randomLetter}