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

module.exports = {

};