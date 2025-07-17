/**
 * Performs a dfs traversal on graph starting from a given node
 * @template T - The type of node in the graph
 * @param {[number, number][]} edges - List of edges representing the graph
 * @returns {void}
 */
function dfs<T>(edges: [T, T][]): void {
  const adjacencyList = new Map<T, T[]>();
  const visited = new Map<T, boolean>();

  for (const [vertex1, vertex2] of edges) {
    if (!adjacencyList.has(vertex1)) {
      adjacencyList.set(vertex1, []);
    }
    if (!adjacencyList.has(vertex2)) {
      adjacencyList.set(vertex2, []);
    }

    adjacencyList.get(vertex1).push(vertex2);
    adjacencyList.get(vertex2).push(vertex1);
  }

  const _dfs = (vertex: T) => {
    if (visited.get(vertex)) {
      return;
    }

    visited.set(vertex, true);

    for (const neighbour of adjacencyList.get(vertex)) {
      _dfs(neighbour);
    }
  };

  for (const [vertex] of adjacencyList) {
    if (visited.get(vertex)) {
      continue;
    }
    _dfs(vertex);
  }
}

export default dfs;
