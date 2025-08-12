function findItinerary(tickets: string[][]): string[] {
  const adjacencyList = new Map<string, string[]>(); 

  for (const [from, to] of tickets) {
    if (!adjacencyList.has(from)) {
      adjacencyList.set(from, []);
    }

    adjacencyList.get(from).push(to);
  }

  console.log(adjacencyList);
  return [];
};

