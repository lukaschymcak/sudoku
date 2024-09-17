import { colChecker } from "./colChecker";
import { numChecker } from "./numChecker";
import { rowChecker } from "./rowChecker";

export function subGridChecker(board, row, col, num) {
  let rowStart = row - (row % 3);

  let colStart = col - (col % 3);
  for (let i = rowStart; i < rowStart + 3; i++) {
    for (let j = colStart; j < colStart + 3; j++) {
      if (board[i][j] === num) {
        return true;
      }
    }
  }
  return false;
}

export function subGridFiller(board, row, col) {
  let tempNum = 0;
  let rowStart = row - (row % 3);
  let colStart = col - (col % 3);
  for (let i = rowStart; i < rowStart + 3; i++) {
    for (let j = colStart; j < colStart + 3; j++) {
      if (board[i][j] === 0) {
        tempNum = numChecker(board, i, j);
        console.log(tempNum, i, j);
      }
    }
  }
  return tempNum;
}
