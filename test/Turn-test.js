const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');

const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return a guess', function() {
    const turn = new Turn('guess value', 'card');
    expect(turn.returnGuess()).to.equal('guess value');
  });

  it('should return the current turn card', function() {
    const turn = new Turn('guess', card);
    expect(turn.returnCard()).to.deep.equal(card);
  });

  it('should evaluate the player guess', function() {
    const turn = new Turn('object', card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should give feedback to player', function() {
    const turn1 = new Turn('object', card);
    expect(turn1.giveFeedback()).to.equal('correct!');
    const turn2 = new Turn('array', card);
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});
