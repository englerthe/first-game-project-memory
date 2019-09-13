class players {
    constructor(nameInput){
        this.name = nameInput;
        this.pickedCards = [];
        this.pairsClicked = 0;
        this.pairsGuessed = 0;
        this.game = null;
    }
    // game players logic
    // check if cards are pairs
    checkIfPair(card1, card2) {
        this.pairsClicked +=1;
        document.getElementById(`pairs_clicked_${this.name}`).innerHTML = this.pairsClicked;
        this.pickedCards = [card1, card2];
        if (this.pickedCards[0].getAttribute("name") === this.pickedCards[1].getAttribute("name")) {
          this.pairsGuessed +=1;
          this.game.countPairsGuessed += 1;
          document.getElementById(`pairs_guessed_${this.name}`).innerHTML = this.pairsGuessed;
          return true;
        }
        return false;
    }
    // check how many cards clicked by player
    cardClicked(card) {
        if (this.pickedCards.length == 2) {
          return;
        }
        card.className = "front";
        card.parentNode.childNodes[1].className = "back";
        this.pickedCards.push(card);
        if (this.pickedCards.length == 2) {
          if (this.checkIfPair(this.pickedCards[0], this.pickedCards[1]) == false ) { //check if selected cards are not equal  
            this.flipCardsBack();
          } else { // if cards are equal (a pair)
            this.isFinished();
            this.pickedCards = []; 
          }
        }
    }
    // check if player has won
    isFinished() {
        if (this.pairsClicked < 1) {
          return false;
        } else if (this.game.countPairsGuessed < this.game.cards.length/2) {
          return false;
        }
        document.querySelector('#finished').innerHTML = `<p>Spieler<br> ${this.name} <br>hat gewonnen !</p><button onclick="location.reload()">Neues Spiel</button>`;
      }
    // in case of no pairs, flip cards back after timeout - to memorize cards :-)
    flipCardsBack() {
        setTimeout( () => {
            this.pickedCards[0].className = "back";
            this.pickedCards[0].parentNode.childNodes[1].className = "front";
            this.pickedCards[1].className = "back";
            this.pickedCards[1].parentNode.childNodes[1].className = "front";
            this.pickedCards = [];
            this.game.switchPlayer(); // initiate to change player // flip selected cards back
        }, 800);
    }
    
}