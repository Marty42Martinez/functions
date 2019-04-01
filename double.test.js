//import double from ./double.js
const double = require('./double,js');

describe('double function', () => {
  it('doubles the number 2', () => {
    const result = double(2);
    expect(result).toEqual(4);
  });
});

//toBe is deepEqual
//toEqual is shallow