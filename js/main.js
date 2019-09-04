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
document.addEventListener("DOMContentLoaded", (event) => {
    let player1 = new players("PLAYER1");
    let player2 = new players("PLAYER2");
    let memoryGame = new MemoryGame(cards, [player1, player2]);
    player1.game = memoryGame;
    player2.game = memoryGame;
    memoryGame.startPlay();

    let html = '';
    memoryGame.cards.forEach(pic => {
      html += `<div class="card" data-card-name="${pic.name}">`;
      html += `<div class="back" name="${pic.img}"></div>`;
      html += `<div class="front" style="background: url(img/${pic.img}) no-repeat; background-size: cover"></div>`;
      html += `</div>`;
    });
  
    // Add all the divs to the HTML
    document.querySelector('#memory_board').innerHTML = html;

    // Bind the click event of each element to a function
    document.querySelectorAll('.back').forEach( card => {
      card.onclick = () => {
        memoryGame.activePlayer.cardClicked(card);
      };
    });
  })