import { rowChecker } from "./rowChecker";
import { colChecker } from "./colChecker";
import { testSudokuArray } from "./fileReader";
import { subGridFiller } from "./subGridChecker";
import { subGridChecker } from "./subGridChecker";
let tempNum = 0;
let counter = 0;

export function numChecker(board, row, col) {
  for (let num = 1; num <= 9; num++) {
    if (
      !rowChecker(board, row, num) &&
      !colChecker(board, col, num) &&
      !subGridChecker(board, row, col, num)
    ) {
      counter++;
      if (counter === 2) {
        counter = 0;
        tempNum = 0;
        break;
      }
      tempNum = num;
    }
  }
  if (counter === 1) {
    counter = 0;
    return tempNum;
  } else {
    return 0;
  }
}

console.log(numChecker(testSudokuArray, 4, 0)); // Example usage of numChecker function
console.log(subGridChecker(testSudokuArray, 4, 0, 4)); // Example usage of subGridChecker function
