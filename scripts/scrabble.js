import {render, remove, create, addClass, hasClass, remClass, find, findAll, write, detect, undetect, style, attribs, isElement} from "./qol"
import { game_running } from "../main"

let word_list = []
let letter_flow_list = []
let loaded_letters = []
let slots = []
let holds = []
let words_submitted = []
let word_modifiers = []
let held_letters = []
const hook_icon = create("img")
let replace_icon_list = []
let formatted_words = []
let points = 0


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

    hook_icon.src = "./hook.png"
    addClass(hook_icon, ["hook-icon"])
    for(let i = 0; i < 8; i++){
        replace_icon_list.push(create("img"))
        replace_icon_list[i].src = "./replace.png"
        addClass(replace_icon_list[i], ["replace-icon"])
    }
}

const submitWord = () => {
    let word = ''
    let formatted_word = []
    loaded_letters.map((letter, index) => {
        word = word + letter.textContent
        remove(slots[index], letter);
        remove(slots[index], hook_icon);
        word_modifiers.push(letter.dataset.modifier)
        formatted_word.push({
            letter: letter.textContent,
            modifier: letter.dataset.modifier,
            hooked: letter.dataset.hooked === "true" ? true : false
        })
    })
    let score = checkWordNow(word.toLowerCase(), formatted_word)
    if (score === 0){
        for (let i = 0; i < word.length; i++) {
            render(find(".letter-spawns"),letterElement(word[i], [word_modifiers[i]]))
          }
    }
    else{
        const point_text = find(".points")
        points += score
        write(point_text, points)
        words_submitted.push(word)
        formatted_words.push(formatted_words)
        held_letters.map((letter, index) => {
            remove(find(`.hold-${index}`), letter)
            remove(holds[index], hook_icon);
            remove(holds[index], replace_icon_list[index]);
        })
        held_letters = []
        loaded_letters.map((letter, index)=>{
            held_letters.push(letter)
            letter.dataset.hooked = "false"
            render(find(`.hold-${index}`), letter)
            detect(letter, "click", letterHook)
            undetect(letter, "click", letterRem)
        })        
    }
    word_modifiers = []
    loaded_letters = []
    remove_replaces()
}

function remove_replaces(){
    held_letters.map((letter, index) => {
        remove(holds[index], replace_icon_list[index]);
    })
}

function add_replaces(){
    held_letters.map((letter, index) => {
        if (letter !== "hooked"){
            render(holds[index], replace_icon_list[index]);
        }
    })   
}

function upgrade_letter(ele){
    let new_modifier = ele.dataset.modifier
    remClass(ele, [new_modifier])
    switch(ele.dataset.modifier){
        case "single-letter":
            new_modifier = "double-letter"
            break
        case "double-letter":
            new_modifier = "triple-letter"
            break
        case "triple-letter":
            new_modifier = "quad-letter"
            break
        case "double-word":
            new_modifier = "triple-word"
            break
        case "triple-word":
            new_modifier = "quad-word"
            break
    }
    addClass(ele, [new_modifier])
    ele.dataset.modifier = new_modifier
}


function downgrade_letter(ele){
    let new_modifier = ele.dataset.modifier
    remClass(ele, [new_modifier])
    switch(ele.dataset.modifier){
        case "triple-letter":
            new_modifier = "double-letter"
            break
        case "quad-letter":
            new_modifier = "triple-letter"
            break
        case "double-letter":
            new_modifier = "single-letter"
            break
        case "triple-word":
            new_modifier = "double-word"
            break
        case "quad-word":
            new_modifier = "triple-word"
            break
    }
    addClass(ele, [new_modifier])
    ele.dataset.modifier = new_modifier
}


const letterHook = (e) => {
    console.log("hook")
    const index = loaded_letters.map((letter)=>{return letter.dataset.hooked}).indexOf("true");
    if (index != -1 && e.target.dataset.hooked === "false"){
        const index2 = held_letters.indexOf("hooked")
        const index3 = held_letters.indexOf(e.target)
        const letter = loaded_letters[index]
        letter.dataset.hooked = "false"
        held_letters[index2] = letter
        render(holds[index2], letter)
        downgrade_letter(letter)
        remove(slots[index], letter)
        remove(slots[index], hook_icon)
        held_letters[index3] = "hooked"
        render(slots[index], e.target)
        upgrade_letter(e.target)
        render(slots[index], hook_icon)
        loaded_letters[index] = e.target
        e.target.dataset.hooked = "true"
        remove_replaces()
        add_replaces()
    }
    else{
        if (e.target.dataset.hooked === "false"){
            if (loaded_letters.length < 8){
                let index = held_letters.indexOf(e.target)
                remove(holds[index], e.target)
                held_letters[index] = "hooked"
                loadLetter(e.target)
                render(slots[loaded_letters.length-1], hook_icon)
                e.target.dataset.hooked = "true"
                upgrade_letter(e.target)
                remove_replaces()
                add_replaces()
            }
        } else{
            const index = loaded_letters.indexOf(e.target)
            const index2 = held_letters.indexOf("hooked")    
            held_letters[index2] = e.target
            e.target.dataset.hooked = "false"
            render(holds[index2], e.target)
            downgrade_letter(e.target)
            remove(slots[index], e.target)
            remove(slots[index], hook_icon)
            for (let i = index + 1; i<loaded_letters.length; i++){
                const temp = loaded_letters[i]
                remove(find(`.slot-${i}`),temp)
                render(find(`.slot-${i-1}`),temp)
                loaded_letters[i-1] = temp
            }
            loaded_letters.pop()
            remove_replaces()
        }
    }
}

function checkWordNow(word, formatted_word){
    let myword = word.toUpperCase()
    let total_score = 0
    let multipler = 1
    if (word_list.includes(word)){
        formatted_word.forEach((lett) => {
            let letter = lett.letter;
            let score = getLetterScore(letter)
            switch(lett.modifier){
                case "triple-letter":
                    score = score * 3
                    break
                case "quad-letter":
                    score = score * 4
                    break
                case "double-letter":
                    score = score * 2
                    break
                case "triple-word":
                    multipler = multipler * 3
                    break
                case "quad-word":
                    multipler = multipler * 4
                    break
                case "double-word":
                    multipler = multipler * 2
                    break
            }
            total_score += score
        })
        return total_score * multipler
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
    if (game_running === true){   
    console.log ("touch")
    if (loaded_letters.length < 8){   
        undetect(e.target, "click", letterTouch) 
        remove(find(".letter-spawns"), e.target)
        letter_flow_list = letter_flow_list.filter(letter => letter === e.target);
        loadLetter(e.target)
        detect(e.target, "click", letterRem)
    }
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

function clear_all(){
    console.log("clear")
    submitWord()
    points = 0
    const point_text = find(".points")
    write(point_text, points)
    formatted_words = []
    held_letters.map((letters,index) => {
        remove(holds[index], letters)
        remove(holds[index], replace_icon_list[index])
    })
    loaded_letters.map((letters,index) => {
        remove(slots[index], letters)
        remove(slots[index], hook_icon)
    })
    held_letters = []
    loaded_letters = []
    words_submitted = []
}

export {loadWords, letterElement, checkWordNow, word_list, randomLetter, cleanCards, words_submitted, formatted_words, points, clear_all}