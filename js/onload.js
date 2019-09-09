
document.addEventListener("DOMContentLoaded", () => {
                        //create HTML

let initialhtml = '';
initialhtml += `<div id="start_game">`; // begin start_game
initialhtml += `<label><ul><li><input type="radio" name="Players" checked value="1">1 Spieler</li></ul></label>`;
initialhtml += `<label><ul><li><input type="radio" name="Players" value="2">2 Spieler</li></ul></label>`;
initialhtml += `<label><ul><li><input type="radio" name="Players" value="3">3 Spieler</li></ul></label>`;
initialhtml += `<label><ul><li><input type="radio" name="Players" value="4">4 Spieler</li></ul></label>`;
initialhtml += `</div>`; // end start_game
initialhtml += `<button onclick="howManyPlayers()">Namen eingeben</button>`;
initialhtml += `</container>`; // end main_game

// Add all the divs to the HTML
document.querySelector('#initial_load').innerHTML = initialhtml;

  // end creation of HTML
});
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
    choosePlayerhtml +=`<label form="selectedplayers">Bitte Spielername eingeben</label><br><br>`;
    for (let j = 1; j <= parseInt(choosePlayerNumber); j++) {
        choosePlayerhtml +=`<label>Spieler ${j}</label>`;
        choosePlayerhtml +=`<input type="text" id="player_${j}" maxlength="30">`;
    }
    choosePlayerhtml +=`<br><button onclick="writePlayersAndStartGame()">Spiel starten</button>`;
    choosePlayerhtml +=`</form>`;
    choosePlayerhtml +=`</div>`;
    document.querySelector('#initial_load').innerHTML = choosePlayerhtml;
}

let playersNames = [];
function writePlayersAndStartGame() {
    for (let k=1; k <= parseInt(choosePlayerNumber); k++) {
        playersNames.push(document.getElementById(`player_${k}`).value);
    }
    startGame(playersNames);
}

/* test */
function createPopupObjectFromID(id) { //handover "mypopup" id
console.log(document.getElementById(id));
    return document.getElementById(id);
} 

let orgPlayerText = "";
let newPlayerText ="";

function showPopup(id, name) {
    orgPlayerText = document.getElementById("playertext");
    console.log(orgPlayerText);
    console.log(name);
    newPlayerText = document.createTextNode(`Naechster Spieler: ${name}`);
    console.log(newPlayerText);
    orgPlayerText.appendChild(newPlayerText);
    createPopupObjectFromID(id).style.display ='block'; // show popup and block background(game)
    
}
function hidePopup(id) {
    createPopupObjectFromID(id).style.display ='none'; // hide popup and reactivate background(game)
    orgPlayerText.removeChild(newPlayerText);
    console.log(`new playerText: ${newPlayerText}`);
    console.log(document.getElementById("playertext"));
}