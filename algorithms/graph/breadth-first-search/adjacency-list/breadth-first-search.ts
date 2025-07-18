import LinearQueue from "@/data-structures/queue/linear-queue";

/**
 * Performs a bfs traversal on graph starting from a given node
 * @param {number} n - The number of nodes in the graph, labelled from 0 to n - 1
 * @param {[number, number][]} edges - List of edges representing the graph
 * @returns {void}
 */
export default function breadthFirstSearch(
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

  const _breadthFirstSearch = (vertex: number): void => {
    const queue = new LinearQueue<number>();
    queue.enqueue(vertex);

    while (queue.size > 0) {
      const vertex = queue.dequeue();
      if (visited.has(vertex)) {
        continue;
      }

      visited.add(vertex);

      for (const neighbour of adjacencyList.get(vertex)) {
        queue.enqueue(neighbour);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (visited.has(i)) {
      continue;
    }
    _breadthFirstSearch(i);
  }
}
