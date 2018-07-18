'use strict';

describe('Index', () => {
  let index;

  beforeEach(() => {
    index = require('../index');
    console.log(index);
  });
  it('should export a function', () => {
    expect(typeof index).toBe('Function');
  });
});
