/**
 * Finds whether there is a cycle in the directed graph
 * @param {n} n - The number of nodes in the graph, labelled from 0 to n - 1
 * @param {[number, number][]} edges - The list of edges
 * @returns {boolean} - `true` if cycle exists in the graph, `false` otherwise
 */
export default function detectCycle(n: number, edges: [number, number][]): boolean {
  const adjacencyList = new Map<number, number[]>();
  const cycle = new Set<number>();
  const visit = new Set<number>();

  for (let i = 0; i < n; i++) {
    adjacencyList.set(i, []);
  }

  for (const [vertex1, vertex2] of edges) {
    adjacencyList[vertex1].push(vertex2);
  }

  const _detectCycle = (vertex: number): boolean => {
    if (cycle.has(vertex)) {
      return true;
    }
    
    if (visit.has(vertex)) {
      return false;
    }

    cycle.add(vertex);

    for (const neighbour of adjacencyList.get(vertex)) {
      if (_detectCycle(neighbour)) {
        return true;
      }
    }

    cycle.delete(vertex);
    visit.add(vertex);
    return false;
  };

  for (let i = 0; i < n; i++) {
    if (_detectCycle(i)) {
      return true;
    }
  }

  return false;
}
