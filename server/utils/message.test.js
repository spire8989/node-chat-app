var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Kevin';
    var text = 'This is the text.';
    var res = generateMessage(from, text)

    expect(res.from).toEqual(from);
    expect(res.text).toEqual(text);
    expect(res.createdAt).toBeA('number');
  });
});
