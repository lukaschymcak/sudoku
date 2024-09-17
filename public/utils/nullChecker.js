export function nullChecker(board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i].includes(0)) {
      return false;
    }
  }
  return true;
}
