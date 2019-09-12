
document.addEventListener("DOMContentLoaded", () => {
//create HTML

let initialhtml = '';
initialhtml += `<h2>Bitte Anzahl der Spieler wählen</h2>`;
initialhtml += `<div id="start_game">`; // begin start_game
initialhtml += `<label><ul><li><input type="radio" name="Players" checked value="1">1 Spieler</li></ul></label>`;
initialhtml += `<label><ul><li><input type="radio" name="Players" value="2">2 Spieler</li></ul></label>`;
initialhtml += `<label><ul><li><input type="radio" name="Players" value="3">3 Spieler</li></ul></label>`;
initialhtml += `<label><ul><li><input type="radio" name="Players" value="4">4 Spieler</li></ul></label>`;
initialhtml += `</div>`; // end start_game
initialhtml += `<button onclick="howManyPlayers()">Weiter geht´s, Namen eingeben</button>`;
initialhtml += `</container>`; // end main_game

// Add all the divs to the HTML
document.querySelector('#initial_load').innerHTML = initialhtml;

// end creation of HTML
});
//first game function
let choosePlayerNumber = ``;
function howManyPlayers(){
    var checkboxes = document.querySelectorAll('input');
    for (let i=0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked === true) {
            choosePlayerNumber = parseInt(checkboxes[i].value);
        }
    } 
    let choosePlayerhtml =`<div id="start_game">`;
    choosePlayerhtml +=`<form>`;
    choosePlayerhtml +=`<label form="selectedplayers">Bitte Spielername eingeben (max. 25 Zeichen)</label><br><br>`;
    for (let j = 1; j <= parseInt(choosePlayerNumber); j++) {
        choosePlayerhtml +=`<label>Spieler ${j}</label>`;
        choosePlayerhtml +=`<input type="text" id="player_${j}" maxlength="25"><br>`;
    }
    choosePlayerhtml +=`<br><button onclick="writePlayersAndStartGame()">Spiel starten</button>`;
    choosePlayerhtml +=`</form>`;
    choosePlayerhtml +=`</div>`;
    document.querySelector('#initial_load').innerHTML = choosePlayerhtml;
}
// read playernames from input and handover to game
let playersNames = [];
function writePlayersAndStartGame() {
    for (let k=1; k <= parseInt(choosePlayerNumber); k++) {
        playersNames.push(document.getElementById(`player_${k}`).value);
    }
    startGame(playersNames); //start maingame 
}

//popup window for next players
function createPopupObjectFromID(id) { //handover "mypopup" id
    return document.getElementById(id);
} 

let orgPlayerText = "";
let newPlayerText ="";

function showPopup(id, name) {
    orgPlayerText = document.getElementById("playertext"); //read string from popup html
    newPlayerText = document.createTextNode(`Nächster Spieler: ${name}`); //create new string with playername
    orgPlayerText.appendChild(newPlayerText); //create new text
    createPopupObjectFromID(id).style.display ='block'; // show popup and block background(game)
    
}
function hidePopup(id) {
    createPopupObjectFromID(id).style.display ='none'; // hide popup and reactivate background(game)
    orgPlayerText.removeChild(newPlayerText); //reset string in popup
}