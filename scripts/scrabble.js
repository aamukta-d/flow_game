let word_list = []
let letter_flow_list = []
let loaded_letters = []
let slots = []
let holds = []
let words_submitted = []
let word_modifiers = []
let held_letters = []
import {render, remove, create, addClass, hasClass, remClass, find, findAll, write, detect, undetect, style, attribs, isElement} from "./qol"


async function loadWords(){
    detect(find(".submit"),"click",submitWord)
    findAll(".blank").forEach((slot) =>{
        slots.push(slot)
    })
    findAll(".hold").forEach((slot) =>{
        holds.push(slot)
    })

    const fileUrl = 'https://raw.githubusercontent.com/jmlewis/valett/master/scrabble/sowpods.txt' // provide file location

    const response = await fetch(fileUrl)
    const data = await response.text()
    const word_list_temp = data.split("\r\n");
    word_list = word_list_temp.map((word) => {
        return word.toLowerCase()
    })

}

const submitWord = () => {
    let word = ''
    loaded_letters.map((letter, index) => {
        word = word + letter.textContent
        remove(slots[index], letter);
        word_modifiers.push(letter.dataset.modifier)
    })
    let score = checkWordNow(word.toLowerCase())
    if (score === 0){
        for (let i = 0; i < word.length; i++) {
            render(find(".letter-spawns"),letterElement(word[i], [word_modifiers[i]]))
          }
    }
    else{
        const points = find(".points")
        write(points, parseInt(points.textContent)+score)
        words_submitted.push(word)
        held_letters.map((letter, index) => {
            remove(find(`.hold-${index}`), letter)
        })
        held_letters = []
        loaded_letters.map((letter, index)=>{
            held_letters.push(letter)
            render(find(`.hold-${index}`), letter)
            detect(letter, "click", letterHook)
            undetect(letter, "click", letterRem)
        })        
    }
    word_modifiers = []
    loaded_letters = []
}

const letterHook = (e) => {
    console.log("hook")
    const index = loaded_letters.map((letter)=>{return letter.dataset.hooked}).indexOf("true");
    if (index != -1 && e.target.dataset.hooked === "false"){
        console.log(3)
        const index2 = held_letters.indexOf("hooked")
        const index3 = held_letters.indexOf(e.target)
        const letter = loaded_letters[index]
        letter.dataset.hooked = "false"
        held_letters[index2] = letter
        render(holds[index2], letter)
        remove(slots[index], letter)
        held_letters[index3] = "hooked"
        render(slots[index], e.target)
        loaded_letters[index] = e.target
        e.target.dataset.hooked = "true"
    }
    else{
        if (e.target.dataset.hooked === "false"){
            console.log(1)
            if (loaded_letters.length < 8){
                let index = held_letters.indexOf(e.target)
                remove(holds[index], e.target)
                held_letters[index] = "hooked"
                loadLetter(e.target)
                e.target.dataset.hooked = "true"
            }
        } else{
            console.log(2)
            const index = loaded_letters.indexOf(e.target)
            const index2 = held_letters.indexOf("hooked")    
            held_letters[index2] = e.target
            e.target.dataset.hooked = "false"
            render(holds[index2], e.target)
            remove(slots[index], e.target)
            for (let i = index + 1; i<loaded_letters.length; i++){
                const temp = loaded_letters[i]
                remove(find(`.slot-${i}`),temp)
                render(find(`.slot-${i-1}`),temp)
                loaded_letters[i-1] = temp
            }
            loaded_letters.pop()
        }
    }
}

function checkWordNow(word){
    let myword = word.toUpperCase()
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

function letterElement(lett, modifier = []){
    let letter = lett.toUpperCase()
    let ele = create("span")
    ele.dataset.score = getLetterScore(letter)
    ele.dataset.hooked = false
    write(ele, letter)
    addClass(ele,["tile","inflow"])
    let rotation = Math.floor(Math.random()*60)-30
    let translation = Math.floor(Math.random()*200)
    let top = Math.floor(Math.random()*-40)-25
    let tile_type = Math.floor(Math.random()*15*15)
    let tile_mod = "single-letter"
    if ((modifier.length===0 & tile_type < 8) || modifier.includes("triple-word")){
        tile_mod = "triple-word"
    }
    else if ((modifier.length===0 &tile_type < 8+16) || modifier.includes("double-word")){
        tile_mod = "double-word"
    }
    else if ((modifier.length===0 &tile_type < 8+16+12) || modifier.includes("triple-letter")){
        tile_mod = "triple-letter"
    }
    else if ((modifier.length===0 &tile_type < 8+16+12+24) || modifier.includes("double-letter")){
        tile_mod = "double-letter"
    }
    addClass(ele,[tile_mod])
    ele.dataset.modifier = tile_mod
    style(ele, `
        position: absolute; 
        left: 5vw; 
        top: ${top}px;
        transform: rotate(${rotation}deg) translate(-${translation}px,0px);
    `)
    detect(ele, "click", letterTouch)
    letter_flow_list.push(ele)
    return ele
}

const letterTouch = (e)=>{
    console.log ("touch")
    if (loaded_letters.length < 8){   
        undetect(e.target, "click", letterTouch) 
        remove(find(".letter-spawns"), e.target)
        letter_flow_list = letter_flow_list.filter(letter => letter === e.target);
        loadLetter(e.target)
        detect(e.target, "click", letterRem)
    }
}


const letterRem = (e) =>{
    console.log ("rem")
    const index = loaded_letters.indexOf(e.target)
    remove(find(`.slot-${index}`),e.target)
    for (let i = index + 1; i<loaded_letters.length; i++){
        const temp = loaded_letters[i]
        remove(find(`.slot-${i}`),temp)
        render(find(`.slot-${i-1}`),temp)
        loaded_letters[i-1] = temp
    }
    loaded_letters.pop()
    render(find(".letter-spawns"),letterElement(e.target.textContent, [e.target.dataset.modifier]))
}

function randomLetter(){
    let result = '';
    const characters = 'AAAAAAAAABBCCDDDDEEEEEEEEEEEEFFGGGHHIIIIIIIIIJKLLLLMMNNNNNNOOOOOOOOPPQRRRRRRSSSSTTTTTTUUUUVVWWXYYZ'
    const charactersLength = characters.length;
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}

function loadLetter(letele){
    render(find(`.slot-${loaded_letters.length}`),letele)
    remClass(letele,["inflow"])
    addClass(letele,["loaded"])
    style(letele, `
        transform:rotate(0deg);
        transform: translate(-1px,-1px);
    `)
    loaded_letters.push(letele)
}

function cleanCards(){
    for (let i = letter_flow_list.length-1; i >= 0; i--) {
        if (checkOffScreen(letter_flow_list[i])){
            remove(find(".letter-spawns"), letter_flow_list[i])
            letter_flow_list.splice(i, 1);
        }
    }
}

function checkOffScreen(el) {
    return (
            (el.offsetLeft > document.body.offsetWidth + 200)
           )
  }

export {loadWords, letterElement, checkWordNow, word_list, randomLetter, cleanCards, words_submitted}