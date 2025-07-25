/**
 * Class representing a disjoint set
 */
export default class DisjointSet {
  parent: number[];
  size: number[];

  /**
   * Creates a disjoint set instance
   * @param {number} size - The size of disjoint set
   */
  constructor(size: number) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.size = Array.from({ length: size }, () => 1);
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

    if (this.size[rootX] < this.size[rootY]) {
      this.parent[rootX] = rootY;
      this.size[rootY] += this.size[rootX];
    } else {
      this.parent[rootY] = rootX;
      this.size[rootX] += this.size[rootY];
    }

    return true;
  }
}
