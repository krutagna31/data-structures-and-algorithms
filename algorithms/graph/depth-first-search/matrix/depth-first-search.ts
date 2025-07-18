/**
 * Performs a dfs traversal on a graph
 * @param {number[][]} matrix - A 2D matrix representing the graph
 * @returns {void}
 */
export default function depthFirstSearch(matrix: number[][]): void {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const visited = Array.from({ length: rows }, () =>
    new Array(cols).fill(false)
  );
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const _depthFirstSearch = (row: number, col: number) => {
    if (
      row < 0 ||
      row > rows - 1 ||
      col < 0 ||
      col > cols - 1 ||
      visited[row][col]
    ) {
      return;
    }

    visited[row][col] = true;

    for (const [dx, dy] of directions) {
      _depthFirstSearch(row + dx, col + dy);
    }
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (visited[row][col]) {
        continue;
      }
      _depthFirstSearch(row, col);
    }
  }
}
