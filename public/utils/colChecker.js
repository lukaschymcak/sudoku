export function colChecker(board, col, num) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] === num) {
      return true;
    }
  }
  return false;
}
