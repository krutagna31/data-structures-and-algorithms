import Stack from "@/data-structures/stack/stack";

/**
 * Performs topological sorting on a directed acyclic graph
 * @param {number} n - The number of nodes in the graph, labelled from 0 to n - 1
 * @param {[number, number][]} edges - List of edges representing the graph
 * @returns {number[]} - A topologically sorted list of vertices
 */
export default function topologicalSort(
  n: number,
  edges: number[][]
): number[] {
  const adjancencyList = new Map<number, number[]>();
  
  for (let i = 0; i < n; i++) {
    adjancencyList.set(i, []);
  }
  
  for (const [vertex1, vertex2] of edges) {
    adjancencyList.get(vertex1).push(vertex2);
  }
  
  const stack = new Stack<number>();
  const visited = new Set<number>();
  const _topologicalSort = (vertex: number): void => {
    if (visited.has(vertex)) {
      return;
    }
    
    visited.add(vertex);
    
    for (const neighbour of adjancencyList.get(vertex)) {
      _topologicalSort(neighbour);
    }
    
    stack.push(vertex);
  };
  
  for (let i = 0; i < n; i++) {
    if (visited.has(i)) {
      return;
    }
    _topologicalSort(i);
  }
  
  const result = [];
  while (stack.size > 0) {
    result.push(stack.pop());
  }

  return result;
}


