'use strict';

const handlers = require('./handlers.js');

test('Valid Board cell Test: ', () => {
  expect(handlers.ifValid(5)).toEqual(true);
});