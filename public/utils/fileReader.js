export const testSudokuArray = [
  [7, 0, 0, 6, 0, 0, 0, 0, 0],
  [0, 8, 1, 0, 9, 5, 0, 0, 4],
  [0, 0, 3, 4, 2, 0, 1, 0, 0],
  [0, 0, 7, 0, 3, 0, 0, 0, 0],
  [0, 5, 8, 0, 0, 0, 0, 0, 0],
  [0, 2, 4, 5, 1, 8, 6, 0, 3],
  [5, 7, 0, 0, 0, 9, 0, 0, 6],
  [8, 3, 9, 7, 0, 0, 5, 0, 1],
  [0, 0, 0, 0, 5, 0, 0, 0, 7],
];

export function fileReader() {
  fetch()
    .then((response) => response.text())
    .then((text) => {
      text = text.trim().split("\n");
      const newBoard = text.map((row) => row.split(" ").map(Number));
      return newBoard;
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}
