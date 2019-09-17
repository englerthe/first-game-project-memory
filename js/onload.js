"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //create HTML
  var initialhtml = '';
  initialhtml += "<label>Bitte Anzahl der Spieler w\xE4hlen</label>";
  initialhtml += "<div id=\"start_game\">"; // begin start_game

  initialhtml += "<label><ul><li><input type=\"radio\" name=\"Players\" checked value=\"1\">1 Spieler</li></ul></label>";
  initialhtml += "<label><ul><li><input type=\"radio\" name=\"Players\" value=\"2\">2 Spieler</li></ul></label>";
  initialhtml += "<label><ul><li><input type=\"radio\" name=\"Players\" value=\"3\">3 Spieler</li></ul></label>";
  initialhtml += "<label><ul><li><input type=\"radio\" name=\"Players\" value=\"4\">4 Spieler</li></ul></label>";
  initialhtml += "</div>"; // end start_game

  initialhtml += "<button onclick=\"howManyPlayers()\">Weiter geht\xB4s, Namen eingeben</button>";
  initialhtml += "<div id=\"regeln\">";
  initialhtml += "<h2>Regeln:<br>Das Spiel besteht aus 24 Feldern mit 12 gleichen Bildern. Ziel ist es m\xF6glichst viele Paare zu finden.\nEin Spieler deckt zwei Felder auf, sind die Bilder identisch hat er ein Paar und darf noch einmal aufdecken.\nSind die Bilder nicht gleich, ist der n\xE4chste Spieler dran.<br>Viel Spass!</h2>";
  initialhtml += "</div>";
  initialhtml += "</container>"; // end main_game
  // Add all the divs to the HTML

  document.querySelector('#initial_load').innerHTML = initialhtml; // end creation of HTML
}); //first game function

var choosePlayerNumber = "";

function howManyPlayers() {
  var checkboxes = document.querySelectorAll('input');

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked === true) {
      choosePlayerNumber = parseInt(checkboxes[i].value);
    }
  }

  var choosePlayerhtml = "<div id=\"start_game\">";
  choosePlayerhtml += "<form>";
  choosePlayerhtml += "<label form=\"selectedplayers\">Bitte Spielername eingeben (max. 20 Zeichen)</label><br><br>";

  for (var j = 1; j <= parseInt(choosePlayerNumber); j++) {
    choosePlayerhtml += "<label>Spieler ".concat(j, "</label>");
    choosePlayerhtml += "<input type=\"text\" id=\"player_".concat(j, "\" maxlength=\"20\" required/><br>");
  }

  choosePlayerhtml += "<br><button onclick=\"writePlayersAndStartGame()\">Spiel starten</button>";
  choosePlayerhtml += "</form>";
  choosePlayerhtml += "</div>";
  document.querySelector('#initial_load').innerHTML = choosePlayerhtml;
} // read playernames from input and handover to game


var playersNames = [];

function writePlayersAndStartGame() {
  for (var k = 1; k <= parseInt(choosePlayerNumber); k++) {
    if (document.getElementById("player_".concat(k)).value == "") {
      playersNames.push("Spieler ".concat(k));
    } else {
      playersNames.push(document.getElementById("player_".concat(k)).value);
    } //playersNames.push(document.getElementById(`player_${k}`).value);

  }

  startGame(playersNames); //start maingame 
} //popup window for next players


function createPopupObjectFromID(id) {
  //handover "mypopup" id
  return document.getElementById(id);
}

var orgPlayerText = "";
var newPlayerText = "";

function showPopup(id, name) {
  orgPlayerText = document.getElementById("playertext"); //read string from popup html

  newPlayerText = document.createTextNode("N\xE4chster Spieler: ".concat(name)); //create new string with playername

  orgPlayerText.appendChild(newPlayerText); //create new text

  createPopupObjectFromID(id).style.display = 'block'; // show popup and block background(game)
}

function hidePopup(id) {
  createPopupObjectFromID(id).style.display = 'none'; // hide popup and reactivate background(game)

  orgPlayerText.removeChild(newPlayerText); //reset string in popup
}