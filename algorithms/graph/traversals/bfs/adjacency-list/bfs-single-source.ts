import LinearQueue from "@/data-structures/queue/linear-queue";

/**
 * Performs a bfs traversal on graph starting from a given node
 * @template T - The type of node in the graph
 * @param {[T, T][]} edges - List of edges representing the graph
 * @returns {void}
 */
function bfs<T>(edges: [T, T][]): void {
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

  const _bfs = (vertex: T) => {
    const queue = new LinearQueue<T>();
    queue.enqueue(vertex);

    while (queue.size > 0) {
      const vertex = queue.dequeue();
      if (visited.get(vertex)) {
        continue;
      }

      visited.set(vertex, true);

      for (const neighbour of adjacencyList.get(vertex)) {
        queue.enqueue(neighbour);
      }
    }
  };

  for (const [vertex] of adjacencyList) {
    if (visited.get(vertex)) {
      continue;
    }
    _bfs(vertex);
  }
}

export default bfs;
