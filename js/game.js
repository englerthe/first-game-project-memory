class MemoryGame {
    constructor(cards, players){
      this.cards = cards;
      this.players = players;
      this.turn = 0;
      this.activePlayer = players[this.turn];
      this.countPairsGuessed = 0;
      // this.countPlayersPairsGuessed = []; workaround
    }
    startPlay() {
      this.shuffleCards();
    }
    
    // general game functions
    shuffleCards() {
      let newCards = [];
      while (this.cards.length !==0) {
        let randomIndex = Math.floor(Math.random() * this.cards.length); // Zufallszahl (0,1) * Länge des arrays - abgerundet
        newCards.push(this.cards[randomIndex]); // der ermittelte Wert wird in das neue Array angehängt 
        this.cards.splice(randomIndex, 1); // der ermittelte Wert wird aus dem card Array entfernt
      }
      this.cards = newCards;
      console.log(this.cards); // cheat
    }
  
    switchPlayer(){
      this.turn += 1;
      if (this.turn > this.players.length-1) {this.turn = 0;}
      this.activePlayer = this.players[this.turn];
      showPopup('mypopup',this.activePlayer.name); // open popup for next player
    }
}