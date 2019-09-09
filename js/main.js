const cards = [
    { name: 'schaeferhund',    img: 'schaeferhund.jpg' },
    { name: 'mops',            img: 'mops.jpg' },
    { name: 'bijon',           img: 'bijon.jpg' },
    { name: 'bobtail',         img: 'bobtail.jpg' },
    { name: 'dogge',           img: 'dogge.jpg' },
    { name: 'labrador',        img: 'labrador.jpg' },
    { name: 'pudel',           img: 'pudel.jpg' },
    { name: 'dackel',          img: 'dackel.jpg' },
    { name: 'dalmatiner',      img: 'dalmatiner.jpg' },
    { name: 'neufundlaender',  img: 'neufundlaender.jpg' },
    { name: 'rottweiler',      img: 'rottweiler.jpg' },
    { name: 'yorkshire',       img: 'yorkshire.jpg' },
    { name: 'schaeferhund',    img: 'schaeferhund.jpg' },
    { name: 'mops',            img: 'mops.jpg' },
    { name: 'bijon',           img: 'bijon.jpg' },
    { name: 'bobtail',         img: 'bobtail.jpg' },
    { name: 'dogge',           img: 'dogge.jpg' },
    { name: 'labrador',        img: 'labrador.jpg' },
    { name: 'pudel',           img: 'pudel.jpg' },
    { name: 'dackel',          img: 'dackel.jpg' },
    { name: 'dalmatiner',      img: 'dalmatiner.jpg' },
    { name: 'neufundlaender',  img: 'neufundlaender.jpg' },
    { name: 'rottweiler',      img: 'rottweiler.jpg' },
    { name: 'yorkshire',       img: 'yorkshire.jpg' }
  ];
  
// load cards and start game
function startGame(handoverplayers) {
  console.log(playersNames);
  console.log(handoverplayers);
  let player = [];
  for (let i=0; i < handoverplayers.length; i++) {
    player[i] = new players(`${handoverplayers[i]}`);
  };
    let memoryGame = new MemoryGame(cards, player);
  for (let j=0; j < player.length; j++) {
    player[j].game = memoryGame;
  };
    memoryGame.startPlay();

                              //create HTML
      //create Popup
    let html = '';
      html += `<container id="pop-up-window">`;
      html += `<button onclick="showPopup('mypopup')">show popup</button>`;
      html += `<div class="popup" id="mypopup">`;
      html += `<p>My popup!</p>`;
      html += `<button onclick="hidePopup('mypopup')">close popup</button>`;
      html += `</div>`;
      html += `</container>`;
      //create Cards
      html += `<div id="finished"></div>`; //finished
      html += `<div id="memory_board">`; //begin board
      memoryGame.cards.forEach(pic => {
        html += `<div class="card" data-card-name="${pic.name}">`; // begin cards
        html += `<div class="back" name="${pic.img}"></div>`;
        html += `<div class="front" style="background: url(img/${pic.img}) no-repeat; background-size: cover"></div>`;
        html += `</div>`; // end cards
      });
      html += `</div>`; // end board
      html += `<div id="display_players">`; // begin display_players
      html += `<div id="score">`; // begin score
      memoryGame.players.forEach(Player => {
        html += `<h2>${Player.name}</h2>`;
        html += `<p>Anzahl Versuche: <span id="pairs_clicked_${Player.name}" >0</span></p>`;
        html += `<p>Anzahl Paare gefunden: <span id="pairs_guessed_${Player.name}" >0</span></p>`;
      });
      html += `</div>`; // end score
      html += `</div>`; // end display_players
      html += `</container>`; // end main_game

    // Add all the divs to the HTML
    document.querySelector('#main_game').innerHTML = html;

                            // end creation of HTML

    // Bind the click event of each element to a function
    document.querySelectorAll('.back').forEach( card => {
      card.onclick = () => {
        memoryGame.activePlayer.cardClicked(card);
      };
    });
  }
  