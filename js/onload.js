

document.addEventListener("DOMContentLoaded", () => {
                        //create HTML

let initialhtml = '';
initialhtml += `<div id="start_game">`; // begin start_game
initialhtml += `<label><ul><li><input type="radio" name="Players" checked value="1Player">1 Player</li></ul></label>`;
initialhtml += `<label><ul><li><input type="radio" name="Players" value="2Player">2 Player</li></ul></label>`;
initialhtml += `<label><ul><li><input type="radio" name="Players" value="3Player">3 Player</li></ul></label>`;
initialhtml += `<label><ul><li><input type="radio" name="Players" value="4Player">4 Player</li></ul></label>`;
initialhtml += `</div>`; // end start_game
initialhtml += `<button onclick="wievielPlayer()">Submit</button>`;
initialhtml += `</container>`; // end main_game

// Add all the divs to the HTML
document.querySelector('#initial_load').innerHTML = initialhtml;

  // end creation of HTML
});

function wievielPlayer(){
    selectedPlayers = ``;
    var checkboxes = document.querySelectorAll('input');
    console.log(checkboxes);
    for (i=0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked === true) {
            selectedPlayers = checkboxes[i].value; // geht noch nicht :(
        }
    }
    console.log(selectedPlayers);
}