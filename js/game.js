"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MemoryGame =
/*#__PURE__*/
function () {
  function MemoryGame(cards, players) {
    _classCallCheck(this, MemoryGame);

    this.cards = cards;
    this.players = players;
    this.turn = 0;
    this.activePlayer = players[this.turn];
    this.countPairsGuessed = 0; // this.countPlayersPairsGuessed = []; workaround
  }

  _createClass(MemoryGame, [{
    key: "startPlay",
    value: function startPlay() {
      this.shuffleCards();
    } // general game functions

  }, {
    key: "shuffleCards",
    value: function shuffleCards() {
      var newCards = [];

      while (this.cards.length !== 0) {
        var randomIndex = Math.floor(Math.random() * this.cards.length); // Zufallszahl (0,1) * Länge des arrays - abgerundet

        newCards.push(this.cards[randomIndex]); // der ermittelte Wert wird in das neue Array angehängt 

        this.cards.splice(randomIndex, 1); // der ermittelte Wert wird aus dem card Array entfernt
      }

      this.cards = newCards;
      console.log(this.cards); // cheat
    }
  }, {
    key: "switchPlayer",
    value: function switchPlayer() {
      this.turn += 1;

      if (this.turn > this.players.length - 1) {
        this.turn = 0;
      }

      this.activePlayer = this.players[this.turn];
      showPopup('mypopup', this.activePlayer.name); // open popup for next player
    }
  }]);

  return MemoryGame;
}();