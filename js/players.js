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
          //this.game.countPlayersPairsGuessed.push(this.name); //schreibe Spielername in array - workaround
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
        if (this.pairsClicked < 1) { //sind 2 Karten aufgedeckt worden?
          return false;
        } else if (this.game.countPairsGuessed < this.game.cards.length/2) { // sind schon alle Karten offen?
          return false;
        }
        let winner = "";
        for (let i=0; i < (this.game.players.length - 1) ;i++) { //fuehre fuer jeden Spieler die Pruefung aus (letzte muss nicht)
          if (this.game.players[i].pairsGuessed > this.game.players[i+1].pairsGuessed) { //habe ich mehr Paare gefunden als der naechste? 
            winner = this.game.players[i].name;
          }
          else if (this.game.players[i].pairsGuessed == this.game.players[i+1].pairsGuessed && this.game.players[i].pairsClicked < this.game.players[i+1].pairsClicked) { //wenn ich gleichviel Paare habe aber weniger Versuche ... 
              winner = this.game.players[i].name;
          }
          else {
            winner = this.game.players[i+1].name; // naechster Spieler hat mehr Paare gefunden oder gleiche Anzahl Paare und Versuche
          }
        }
        //let winner = this.game.countPlayersPairsGuessed.sort(); //sortiere array (meiste elemente sind vorne) nur ein workaround!
        //document.querySelector('#finished').innerHTML = `<p>Spieler<br> ${winner[0]} <br>hat gewonnen !</p><button onclick="location.reload()">Neues Spiel</button>`;
        document.querySelector('#finished').innerHTML = `<p>Spieler<br> ${winner} <br>hat gewonnen !</p><button onclick="location.reload()">Neues Spiel</button>`;
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