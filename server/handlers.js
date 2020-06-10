'use strict';

const cols = {
  "a" : 0,
  "b" : 1,
  "c" : 2,
  "d" : 3,
  "e" : 4,
  "f" : 5,
  "g" : 6,
  "h" : 7
};
const rows = {
  8 : 0,
  7 : 1,
  6 : 2, 
  5 : 3,
  4 : 4,
  3 : 5,
  2 : 6,
  1 : 7
};

function convertFromAlgebraic(a) {
  if (a.length !== 2 || rows[a[1]] == null || cols[a[0]] == null) {
    return null;
  } else return { row: rows[a[1]], col: cols[a[0]] };
}

function ifValid (i) { return ( i >= 0 && i <= 7 ) };

function knightMoves(knight) {
  let results = [];
  let moveRow;
  let moveCol;

  function verticalHelper(moveRow) {
    moveCol = knight['col'] - 1;
    if ( ifValid(moveCol) ) results.push({'row' : moveRow, 'col' : moveCol});
    moveCol = knight['col'] + 1;
    if ( ifValid(moveCol) ) results.push({'row' : moveRow, 'col' : moveCol});
  }
  moveRow = knight['row'] - 2;
  if ( ifValid(moveRow ) ) verticalHelper(moveRow);
  moveRow = knight['row'] + 2;
  if ( ifValid(moveRow ) ) verticalHelper(moveRow);

  function horizontalHelper(moveCol) {
    moveRow = knight['row'] - 1;
    if ( ifValid(moveRow) ) results.push({'row' : moveRow, 'col' : moveCol});
    moveRow = knight['row'] + 1;
    if ( ifValid(moveRow) ) results.push({'row' : moveRow, 'col' : moveCol});
  }
  moveCol = knight['col'] - 2;
  if ( ifValid(moveCol ) ) horizontalHelper(moveCol);
  moveCol = knight['col'] + 2;
  if ( ifValid(moveCol ) ) horizontalHelper(moveCol);
  
  return results;
}

function populateSet(s, positions) {
  for (const pos of positions) {
    s.add(`${pos.row}_${pos.col}`);
  }
}

module.exports = {
  convertFromAlgebraic,
  knightMoves,
  populateSet,
  ifValid
};