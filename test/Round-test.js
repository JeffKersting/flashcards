const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');

describe('Round', function() {

  it.skip('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it.skip('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it.skip('should store a question', function() {
    const round = new Round(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(round.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });

  it.skip('should store a list of possible answers', function() {
    const round = new Round(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(round.answers).to.deep.equal(['object', 'array', 'function']);
  });

  it.skip('should store the correct answer', function() {
    const round = new Round(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(round.correctAnswer).to.equal('object');
  });
});
