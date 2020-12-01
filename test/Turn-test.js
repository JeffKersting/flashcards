const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should store a question', function() {
    const turn = new Turn(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(turn.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });

  it.skip('should store a list of possible answers', function() {
    const turn = new Turn(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(turn.answers).to.deep.equal(['object', 'array', 'function']);
  });

  it.skip('should store the correct answer', function() {
    const turn = new Turn(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(turn.correctAnswer).to.equal('object');
  });
});
