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
    if (thisTurn.evaluateGuess()) {
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
    console.log(`**Round over!** You answered ${calculatePercentCorrect}% of the questions correctly!`)
  }
}

module.exports = Round;
