/**
 * Finds the number of connected components
 * @param {number} n - The number of nodes in the graph, labelled from 0 to n - 1
 * @param {[number, number][]} edges - The list of edges
 * @returns {number} - The number of connected components
 */
export default function connectedComponents(
  n: number,
  edges: [number, number][]
): number {
  let result = 0;
  const adjacencyList = new Map<number, number[]>();
  const visited = new Set<number>();

  for (let i = 0; i < n; i++) {
    adjacencyList.set(i, []);
  }

  for (const [vertex1, vertex2] of edges) {
    adjacencyList.get(vertex1).push(vertex2);
    adjacencyList.get(vertex2).push(vertex1);
  }

  const _connectedComponents = (vertex: number): void => {
    if (visited[vertex]) {
      return;
    }

    visited[vertex] = true;

    for (const neighbour of adjacencyList.get(vertex)) {
      _connectedComponents(neighbour);
    }
  };

  for (let i = 0; i < n; i++) {
    if (visited[i]) {
      continue;
    }
    _connectedComponents(i);
    result++;
  }

  return result;
}
