import { rowChecker } from "../public/utils/rowChecker.js";
import { colChecker } from "../public/utils/colChecker.js";
import { fileReader } from "../public/utils/fileReader.js";
import { numChecker } from "../public/utils/numChecker.js";
import { testSudokuArray } from "../public/utils/fileReader.js";
import { nullChecker } from "../public/utils/nullChecker.js";
import {
  subGridChecker,
  subGridFiller,
} from "../public/utils/subGridChecker.js";

export function sudokuSolver() {
  let row = 0;
  let col = 0;
  for (let i = 0; i < testSudokuArray.length; i++) {
    for (let j = 0; j < testSudokuArray.length; j++) {
      if (testSudokuArray[i][j] === 0) {
        row = i;
        col = j;
        testSudokuArray[row][col] = subGridFiller(testSudokuArray, row, col);
      }
    }
  }
}
sudokuSolver();
console.log(testSudokuArray);
