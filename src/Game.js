const data = require('./data');
// const questionData = data['prototypeData'];
const util = require('./util');
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');

class Game {
  constructor() {
    this.currentRound = 0;
  }

  start() {
    let cards = [];
    questionData.forEach(element => {
      let card = new Card(element['id'], element['question'], element['answers'], element['correctAnswer']);
      cards.push(card);
    })

    let deck = new Deck(cards);
    let round = new Round(deck);

    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
