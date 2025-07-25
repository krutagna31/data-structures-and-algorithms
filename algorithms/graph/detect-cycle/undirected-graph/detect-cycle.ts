/**
 * Finds whether there is a cycle in the undirected graph
 * @param {n} n - The number of nodes in the graph, labelled from 0 to n - 1
 * @param {[number, number][]} edges - The list of edges
 * @returns {boolean} - `true` if cycle exists in the graph, `false` otherwise
 */
export default function detectCycle(
  n: number,
  edges: [number, number][]
): boolean {
  const adjacencyList = Array.from({ length: n }, (): number[] => []);
  const visited = new Set<number>();

  for (const [vertex1, vertex2] of edges) {
    adjacencyList[vertex1].push(vertex2);
    adjacencyList[vertex2].push(vertex1);
  }

  const _detectCycle = (vertex: number, parent: number): boolean => {
    if (visited.has(vertex)) {
      return true;
    }

    visited.add(vertex);

    for (const neighbour of adjacencyList[vertex]) {
      if (neighbour === parent) {
        continue;
      }
      if (_detectCycle(neighbour, vertex)) {
        return true;
      }
    }

    return false;
  };

  for (let i = 0; i < n; i++) {
    if (visited.has(i)) {
      continue;
    }
    if (_detectCycle(i, -1)) {
      return true;
    }
  }
  return false;
}
