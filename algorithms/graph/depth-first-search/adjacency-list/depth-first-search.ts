/**
 * Performs a dfs traversal on graph starting from a given node
 * @param {number} n - The number of nodes in the graph, labelled from 0 to n - 1
 * @param {[number, number][]} edges - List of edges representing the graph
 * @returns {void}
 */
export default function depthFirstSearch(
  n: number,
  edges: [number, number][]
): void {
  const adjacencyList = new Map<number, number[]>();
  const visited = new Set<number>();

  for (let i = 0; i < n; i++) {
    adjacencyList.set(i, []);
  }

  for (const [vertex1, vertex2] of edges) {
    adjacencyList.get(vertex1).push(vertex2);
    adjacencyList.get(vertex2).push(vertex1);
  }

  const _depthFirstSearch = (vertex: number): void => {
    if (visited.has(vertex)) {
      return;
    }

    visited.add(vertex);

    for (const neighbour of adjacencyList.get(vertex)) {
      _depthFirstSearch(neighbour);
    }
  };

  for (let i = 0; i < n; i++) {
    if (visited.has(i)) {
      continue;
    }
    _depthFirstSearch(i);
  }
}
