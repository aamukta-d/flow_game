//Not associated with SCRABBLE or Hasbro.
//This page is for educational puposes only.

var inputField = document.getElementById("scrabble-word");
var inputForm = document.getElementById("scrabble-form");
var scrabbleTiles = document.getElementById("scrabble-tiles");
var titleEl = document.getElementById("response-title");
var messageEl = document.getElementById("response-message");

var validateInput = function(e) {
   //we only want to accept key codes staring with "Key" (letters)
   //eg, won't accept "Period" or "Digit1"
   //but do allow "Enter" since that submits forms
   //if it doesn't starty with "Key" and it's not Enter, then cancel the event
   if(e.code.lastIndexOf("Key", 0) != 0 && (e.code != "Enter" && e.which != 13)) {
      e.preventDefault();
   }
};

//keypress only fires if there is an associated character
//eg, doesn't fire for shift key
inputField.addEventListener("keypress", validateInput);


//on form submit, get the value submitted and create dancing scrabble tiles of the word

var submitWord = function(e) {
   //prevent the default form submit action
   e.preventDefault();
   
   //clear out the previous tiles
   scrabbleTiles.innerHTML = '';
   //clear out the previous message
   titleEl.innerHTML = '';
   messageEl.innerHTML = '';
   //clear out the previous api information
   wordInfo.clearWord();
   
   //put the word to uppercase so don't need to write double the cases for each upper/lower case letter
   var inputText = inputField.value.toUpperCase();
   //check to see if the string is null
   if (inputText == "") {
      messageEl.textContent = "Enter a word.";
      return;
   }
   
   //set off the api call chain of events
   wordInfo.word = inputText;
   messageEl.textContent = "Checking the dictionary...";
   wordInfo.checkWordNow();
   
   //style the input as scrabble tiles
   //for each letter in the word:
   for(var i = 0; i < inputText.length; i++) {
      var letter = inputText[i];
      var score = 0;
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
      
      var letterTile = document.createElement("span");
      letterTile.setAttribute("class", "tile");
      letterTile.setAttribute("data-index", i);
      letterTile.setAttribute("data-score", score);
      letterTile.textContent = letter;
      scrabbleTiles.appendChild(letterTile);
   }
   //clear out the value in the form
   inputForm.reset();
}

inputForm.addEventListener("submit", submitWord);




var API = {
   
   //CORS: 'https://cors-anywhere.herokuapp.com/', //needed to get around HTTPS vs HTTP conflict
   CORS: 'https://cryptic-headland-94862.herokuapp.com/', //alternative
   baseURL: 'http://www.wordgamedictionary.com/api/v1/references/scrabble/',
   key: '7.304453775081076e29',
   
   generateURL: function(wordToCheck) {
      //takes in a word and returns a properly formatted URL for the API
      return this.CORS + this.baseURL + wordToCheck + '?key=' + this.key;
   },
   callAPI: function(word) {
      //generate a URL for the specified word, then call the fetch API
      return fetch(API.generateURL(word), { method: 'get' })
      //get the response in a string format
      .then(response => response.text())
      //parse the response to XML
      .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
      //store the response in the wordInfo object
      .then(data => wordInfo.apiResponse = data)
      //check the response xml for whether it's a scrabble word
      .then(() => wordInfo.checkValidScrabble())
      //error to trigger if no successful response
      .catch(error => {
         console.log("API error: cannot contact the dictionary");
         API.displayError();
      })
   },
   displayError: function() {
      //display an error to the user on screen if can't get API response
      messageEl.textContent = "Sorry, cannot contact the dictionary at this time.";
   }
}

var wordInfo = {
   //the xml response received from the API for this word
   //<?xml version="1.0"?>
   //  <entry>
   //    <word>test</word>
   //    <scrabble>1</scrabble>  1 if valid, 0 if not valid official Scrabble word
   //    <scrabblescore>1</scrabblescore>
   //    <sowpods>1</sowpods>
   //    <sowpodsscore>1</sowpodsscore>
   //    <wwf>1</wwf>
   //    <wwfscore>1</wwfscore>
   //  </entry>
   
   //the current word under consideration
   word: '',
   apiResponse: null,
   isValidScrabble: null,
   
   checkWordNow: function() {
      //method to call the API for the current word
      return API.callAPI(this.word);
   },
   
   checkValidScrabble: function() {
      //check the API response to see if it's a valid scrabble word
      if(this.apiResponse) {
         //pull the 0 or 1 value from the xml
         this.isValidScrabble = this.apiResponse.getElementsByTagName("scrabble")[0].textContent;
         if(this.isValidScrabble == 0) {
            titleEl.textContent = "Sorry";
            messageEl.textContent = "This isn't a valid SCRABBLE word.";
         } else if(this.isValidScrabble == 1) {
            titleEl.textContent = "Nice!";
            messageEl.textContent = "This is a valid SCRABBLE word.";
         }
      }
   },
   
   clearWord: function() {
      //clears out all info from the previous word
      this.word = '';
      this.apiResponse = null;
      this.isValidScrabble = null;
   }
   
}
