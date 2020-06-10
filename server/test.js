'use strict';

const handlers = require('./handlers.js');

test('Test bad request for knight moves with NOT Algebraic req body 55: ', () => {
  expect(handlers.convertFromAlgebraic('55')).toEqual(null);
});

test('Test bad request for knight moves with NOT Algebraic req body aa: ', () => {
  expect(handlers.convertFromAlgebraic('aa')).toEqual(null);
});

test('Test bad request for knight moves with NOT Algebraic req body long string: ', () => {
  expect(handlers.convertFromAlgebraic('gtfj5')).toEqual(null);
});

test('Test Converting from Algebraic: ', () => {
  expect(handlers.convertFromAlgebraic('a8')).toEqual({ 'row': 0, 'col': 0 });
});

test('Test knights possible moves: ', () => {
  expect(handlers.knightMoves({
      'row': 0,
      'col': 0
    })).toEqual([ 
    { 'row': 2, 'col': 1 }, 
    { 'row': 1, 'col': 2 } 
  ]);
});

test('Converting from Algebraic Test: ', () => {
  expect(handlers.convertFromAlgebraic('e5')).toEqual({
      'row': 3,
      'col': 4
    });
});

test('Valid Board cell Test: ', () => {
  expect(handlers.ifValid(5)).toEqual(true);
});