const Turn = require('../src/Turn.js');

class Round {
  constructor(deck) {
    this.turns = 0,
    this.deck = deck || [],
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.deck['cards'][this.turns]
  }

  takeTurn(guess) {
    let card = this.returnCurrentCard()
    let thisTurn = new Turn(guess, card);
    this.turns++;
    if (this.turns === this.deck.length - 1) {
      this.endRound();
    } else if (thisTurn.evaluateGuess()) {
      return thisTurn.giveFeedback()
    } else {
      this.incorrectGuesses.push(thisTurn.card.id)
      return thisTurn.giveFeedback()
    }
  }

  calculatePercentCorrect() {
    if (this.incorrectGuesses.length === 0) {
      return `100%`
    } else {
      return `${(this.incorrectGuesses.length / this.turns) * 100}%`
    }
  }

  endRound() {
    let percentageCorrect = this.calculatePercentCorrect();
    console.log(`**Round over!** You answered ${percentageCorrect}% of the questions correctly!`)
  }
}

module.exports = Round;
