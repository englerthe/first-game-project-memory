"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var players =
/*#__PURE__*/
function () {
  function players(nameInput) {
    _classCallCheck(this, players);

    this.name = nameInput;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.game = null;
  } 

// game players logic
  // check if cards are pairs
  _createClass(players, [{
    key: "checkIfPair",
    value: function checkIfPair(card1, card2) {
      this.pairsClicked += 1;
      document.getElementById("pairs_clicked_".concat(this.name)).innerHTML = this.pairsClicked;
      this.pickedCards = [card1, card2];

      if (this.pickedCards[0].getAttribute("name") === this.pickedCards[1].getAttribute("name")) {
        this.pairsGuessed += 1;
        this.game.countPairsGuessed += 1;
        document.getElementById("pairs_guessed_".concat(this.name)).innerHTML = this.pairsGuessed;
        return true;
      }

      return false;
    } 

  }, { // check how many cards clicked by player
    key: "cardClicked",
    value: function cardClicked(card) {
      if (this.pickedCards.length == 2) {
        return;
      }

      card.className = "front";
      card.parentNode.childNodes[1].className = "back";
      this.pickedCards.push(card);

      if (this.pickedCards.length == 2) {
        if (this.checkIfPair(this.pickedCards[0], this.pickedCards[1]) == false) {
          //check if selected cards are not equal  
          this.flipCardsBack();
        } else {
          // if cards are equal (a pair)
          this.isFinished();
          this.pickedCards = [];
        }
      }
    } 

  }, { // check if player has won
    key: "isFinished",
    value: function isFinished() {
      if (this.pairsClicked < 1) {
        return false;
      } else if (this.game.countPairsGuessed < this.game.cards.length / 2) {
        return false;
      }

      document.querySelector('#finished').innerHTML = "<p>Spieler<br> ".concat(this.name, " <br>hat gewonnen !</p><button onclick=\"location.reload()\">Neues Spiel</button>");
    } 

  }, { // in case of no pairs, flip cards back after timeout - to memorize cards :-)
    key: "flipCardsBack",
    value: function flipCardsBack() {
      var _this = this;

      setTimeout(function () {
        _this.pickedCards[0].className = "back";
        _this.pickedCards[0].parentNode.childNodes[1].className = "front";
        _this.pickedCards[1].className = "back";
        _this.pickedCards[1].parentNode.childNodes[1].className = "front";
        _this.pickedCards = [];

        _this.game.switchPlayer(); // initiate to change player // flip selected cards back

      }, 800);
    }
  }]);

  return players;
}();