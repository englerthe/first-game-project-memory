"use strict";

var cards = [{
  name: 'schaeferhund',
  img: 'schaeferhund.jpg'
}, {
  name: 'mops',
  img: 'mops.jpg'
}, {
  name: 'bijon',
  img: 'bijon.jpg'
}, {
  name: 'bobtail',
  img: 'bobtail.jpg'
}, {
  name: 'dogge',
  img: 'dogge.jpg'
}, {
  name: 'labrador',
  img: 'labrador.jpg'
}, {
  name: 'pudel',
  img: 'pudel.jpg'
}, {
  name: 'dackel',
  img: 'dackel.jpg'
}, {
  name: 'dalmatiner',
  img: 'dalmatiner.jpg'
}, {
  name: 'neufundlaender',
  img: 'neufundlaender.jpg'
}, {
  name: 'rottweiler',
  img: 'rottweiler.jpg'
}, {
  name: 'yorkshire',
  img: 'yorkshire.jpg'
}, {
  name: 'schaeferhund',
  img: 'schaeferhund.jpg'
}, {
  name: 'mops',
  img: 'mops.jpg'
}, {
  name: 'bijon',
  img: 'bijon.jpg'
}, {
  name: 'bobtail',
  img: 'bobtail.jpg'
}, {
  name: 'dogge',
  img: 'dogge.jpg'
}, {
  name: 'labrador',
  img: 'labrador.jpg'
}, {
  name: 'pudel',
  img: 'pudel.jpg'
}, {
  name: 'dackel',
  img: 'dackel.jpg'
}, {
  name: 'dalmatiner',
  img: 'dalmatiner.jpg'
}, {
  name: 'neufundlaender',
  img: 'neufundlaender.jpg'
}, {
  name: 'rottweiler',
  img: 'rottweiler.jpg'
}, {
  name: 'yorkshire',
  img: 'yorkshire.jpg'
}]; // load cards and start game

function startGame(handoverplayers) {
  var player = [];

  for (var i = 0; i < handoverplayers.length; i++) {
    player[i] = new players("".concat(handoverplayers[i])); //create players objects
  }

  ;
  var memoryGame = new MemoryGame(cards, player); //start game object

  for (var j = 0; j < player.length; j++) {
    player[j].game = memoryGame; // set game constructor value for each player
  }

  ;
  memoryGame.startPlay(); //start game
  //create HTML

  var html = ''; //create Cards

  html += "<div id=\"memory_board\">"; //begin board

  memoryGame.cards.forEach(function (pic) {
    html += "<div class=\"card\" data-card-name=\"".concat(pic.name, "\">"); // begin cards

    html += "<div class=\"back\" name=\"".concat(pic.img, "\"></div>");
    html += "<div class=\"front\" style=\"background: url(img/".concat(pic.img, ") no-repeat; background-size: cover\"></div>");
    html += "</div>"; // end cards
  });
  html += "</div>"; // end board

  html += "<div id=\"display_players\">"; // begin display_players

  html += "<div id=\"score\">"; // begin scoreboard

  memoryGame.players.forEach(function (Player) {
    html += "<p>Spieler:  ".concat(Player.name, "<br>");
    html += "Anzahl Versuche: <span id=\"pairs_clicked_".concat(Player.name, "\" >0</span><br>");
    html += "Anzahl Paare gefunden: <span id=\"pairs_guessed_".concat(Player.name, "\" >0</span></p>");
  });
  html += "</div>"; // end scoreboard

  html += "</div>"; // end display_players

  html += "<div id=\"finished\"></div>"; //finished

  html += "</container>"; // end main_game
  //create Popup

  html += "<container id=\"pop-up-window\">";
  html += "<button id=\"initialpopup\" onclick=\"showPopup('mypopup')\"></button>";
  html += "<div class=\"popup\" id=\"mypopup\">";
  html += "<p id=\"playertext\"></p>";
  html += "<button id=\"change_player\" onclick=\"hidePopup('mypopup')\">OK !</button>";
  html += "</div>";
  html += "</container>"; // Add all the divs to the HTML

  document.querySelector('#main_game').innerHTML = html; // end creation of HTML
  // Bind the click event of each element to a function

  document.querySelectorAll('.back').forEach(function (card) {
    card.onclick = function () {
      memoryGame.activePlayer.cardClicked(card);
    };
  });
}