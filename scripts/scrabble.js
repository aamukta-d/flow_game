let word_list = []

async function loadWords(){
    
    const fileUrl = 'https://raw.githubusercontent.com/jmlewis/valett/master/scrabble/sowpods.txt' // provide file location

    const response = await fetch(fileUrl)
    const data = await response.text()
    word_list = data.split("\r\n");

    console.log(word_list)

}

function checkWordNow(word){
    if (word_list.includes(word)){
        console.log("yeah")
    }
    else{
        console.log("nah")
    }
}


export {loadWords, checkWordNow, word_list}