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

// load   


// load cards and start game
document.addEventListener("DOMContentLoaded", () => {
    let player1 = new players("PLAYER1");
    let player2 = new players("PLAYER2");
    //let player3 = new players("PLAYER3");
    //let player4 = new players("PLAYER4");
    let memoryGame = new MemoryGame(cards, [player1, player2]);
    player1.game = memoryGame;
    player2.game = memoryGame;
    //player3.game = memoryGame;
    //player4.game = memoryGame;
    memoryGame.startPlay();
    console.log(memoryGame.players);
    
                              //create HTML
    //create Cards  
    let html = '';
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
        html += `<p>Pairs Clicked: <span id="pairs_clicked_${Player.name}" >0</span></p>`;
        html += `<p>Pairs Guessed: <span id="pairs_guessed_${Player.name}" >0</span></p>`;
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
  })