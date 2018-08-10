var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jonah';
    var text = 'Test purpose';
    var message = generateMessage(from, text);
  });
});
