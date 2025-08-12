import PriorityQueue from "@/data-structures/priority-queue/priority-queue";

/**
 * @param {number} n - The number of nodes in the graph, labelled from 0 to n - 1
 * @param {[number, number, number][]} edges - List of edges representing the graph
 * @param {number} start
 * @returns {Map<number, number>}
 */
export default function dijkstra(
  edges: [number, number, number][],
  n: number,
  start: number
): Map<number, number> {
  const adjacencyList = new Map<
    number,
    { vertex: number; distance: number }[]
  >();
  const vertexToDistance = new Map<number, number>();

  for (let i = 0; i < n; i++) {
    adjacencyList.set(i, []);
    vertexToDistance.set(i, i === start ? 0 : Infinity);
  }

  for (const [vertex1, vertex2, distance] of edges) {
    adjacencyList.get(vertex1).push({ vertex: vertex2, distance });
  }

  const queue = new PriorityQueue<number>();
  queue.enqueue(start, 0);

  while (queue.size() > 0) {
    const closest = queue.dequeue();

    for (const { vertex, distance } of adjacencyList.get(closest)) {
      const newDistance = vertexToDistance.get(closest) + distance;
      if (newDistance < vertexToDistance.get(vertex)) {
        vertexToDistance.set(vertex, newDistance);
        queue.enqueue(vertex, newDistance);
      }
    }
  }

  return vertexToDistance;
}
