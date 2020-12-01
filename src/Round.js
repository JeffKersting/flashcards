class Round {
  constructor(deck) {
    this.turns = 0,
    this.deck = deck,
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.deck[this.turns]
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.deck[this.turns])
    this.turns++
    if (!turn.evaluateGuess(guess)) {
      this.incorrectGuesses.push(turn.card.id)
      return turn.giveFeedback()
    }
  }

  calculatePercentCorrect() {
    return this.incorrectGuesses.length / this.turns
  }

  endRound() {
    console.log(`**Round over!** You answered ${calculatePercentCorrect}% of the questions correctly!`)
  }
}
