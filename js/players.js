class players {
    constructor(nameInput){
        this.name = nameInput;
        this.pickedCards = [];
        this.pairsClicked = 0;
        this.pairsGuessed = 0;
        this.game = null;
    }

    checkIfPair(card1, card2) {
        this.pairsClicked +=1;
        document.getElementById("pairs_clicked").innerHTML = this.pairsClicked;
        this.pickedCards = [card1, card2];
        if (this.pickedCards[0].getAttribute("name") === this.pickedCards[1].getAttribute("name")) {
          this.pairsGuessed +=1;
          document.getElementById("pairs_guessed").innerHTML = this.pairsGuessed;
          return true;
        }
        return false;
    }

    cardClicked(card) {
        if (this.pickedCards.length == 2) {
          return;
        }
        card.className = "front";
        card.parentNode.childNodes[1].className = "back";
        this.pickedCards.push(card);
        if (this.pickedCards.length == 2) {
          if (this.checkIfPair(this.pickedCards[0], this.pickedCards[1]) == false ) { //check if selected cards are not equal
          //console.log(this.pickedCards);  
            this.flipCardsBack();
          } else {
            this.isFinished();
            this.pickedCards = [];
          console.log(this.pairsGuessed);  
          }
        }
    }

    isFinished() {
        if (this.pairsClicked < 1) {
          return false;
        } else if (this.pairsGuessed < this.game.cards.length/2) {
          return false;
        }
        document.querySelector('#finished').innerHTML = `Player ${this.name} hat gewonnen !`;
        //location.reload();
        // return true;
      }

    flipCardsBack() {
        setTimeout( () => {
            this.pickedCards[0].className = "back";
            this.pickedCards[0].parentNode.childNodes[1].className = "front";
            this.pickedCards[1].className = "back";
            this.pickedCards[1].parentNode.childNodes[1].className = "front";
            this.pickedCards = [];
            this.game.switchPlayer(); // initiate to change player // flip selected cards back
        }, 200);
    } 
    

}