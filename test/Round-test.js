const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round.js');
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');

const cardOne = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
const cardTwo = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
const deck = new Deck([cardOne, cardTwo]);
const round = new Round(deck);

describe('Round', function() {

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a property of deck', function() {
    expect(round.deck).to.equal(deck);
  });

  it('should return current card', function() {
    expect(round.returnCurrentCard()).to.deep.equal(cardOne);
  });

  it('should update turn count and incorrect guesses after a turn', function() {
    round.takeTurn('object');
    expect(round.turns).to.equal(1);
    expect(round.incorrectGuesses).to.deep.equal([]);
    round.takeTurn('array');
    expect(round.turns).to.equal(2);
    expect(round.incorrectGuesses).to.deep.equal([2]);
  });

  it('should calculate the percent of questions answered correctly', function() {
    round.turns = 0;
    round.incorrectGuesses = [];
    round.takeTurn('object');
    expect(round.calculatePercentCorrect()).to.deep.equal('100%');
    round.takeTurn('array');
    expect(round.calculatePercentCorrect()).to.deep.equal('50%');
  });


});
