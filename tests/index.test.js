'use strict';

const index = require('../index');

describe('Index', () => {
  it('should export a function', () => {
    expect(typeof index).toBe('function');
  });
});
