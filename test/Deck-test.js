const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');

describe('Deck', function() {

  it.skip('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it.skip('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it.skip('should store a question', function() {
    const deck = new Deck(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(deck.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });

  it.skip('should store a list of possible answers', function() {
    const deck = new Deck(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(deck.answers).to.deep.equal(['object', 'array', 'function']);
  });

  it.skip('should store the correct answer', function() {
    const deck = new Deck(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(deck.correctAnswer).to.equal('object');
  });
});
