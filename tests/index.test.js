'use strict';

describe('Index', () => {
  let index;

  beforeEach(() => {
    index = require('../index');
  });
  it('should export a function', () => {
    expect(typeof index).toBe('function');
  });
});
