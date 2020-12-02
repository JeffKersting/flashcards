const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Deck = require('../src/Deck.js');

const deck = new Deck(['card1', 'card2'])

describe('Deck', function() {

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should store a deck of cards', function() {
    assert.deepEqual(deck.cards, ['card1', 'card2']);
  });

  it('should count the number of cards in the deck', function() {
    expect(deck.countCards()).to.deep.equal(2);
  });
});
