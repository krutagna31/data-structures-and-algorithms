/**
 * Class representing a disjoint set
 */
export default class DisjointSet {
  parent: number[];
  rank: number[];

  /**
   * Creates a disjoint set instance
   * @param {number} size - The size of disjoint set
   */
  constructor(size: number) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = Array.from({ length: size }, () => 0);
  }

  /**
   * Finds the root of set `x` belongs to
   * @param {number} x - The element to find
   * @returns {number} - The root of set `x` belongs to
   */
  find(x: number): number {
    if (x === this.parent[x]) {
      return this.parent[x];
    }

    this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }

  /**
   * Unions the sets that contain `x` and `y`
   * @param {number} x - The first element
   * @param {number} y - The second element
   * @returns {boolean} - `true` if union is performed, `false` otherwise
   */
  union(x: number, y: number): boolean {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) {
      return false;
    }

    if (this.rank[rootX] === this.rank[rootY]) {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    } else if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else {
      this.parent[rootY] = rootX;
    }

    return true;
  }
}


