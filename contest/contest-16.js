class MinHeap {
  constructor() {
    this.arr = [];
  }

  push(val) {
    this.arr.push(val);
    let index = this.arr.length - 1;
    this.#up(index);
  }
  #up(index) {
    while (index > 0) {
      let p = Math.floor((index - 1) / 2);
      if (this.arr[p] <= this.arr[index]) break;
      if (this.arr[p] > this.arr[index])
        [this.arr[p], this.arr[index]] = [this.arr[index], this.arr[p]];

      index = p;
    }
  }
  pop() {
    let last = this.arr.length - 1;
    if (this.arr.length <= 0) return;
    this.arr[0] = this.arr[last];
    this.arr.pop();
    this.#down();
  }
  #down() {
    let i = 0;
    while (true) {
      let l = 2 * i + 1;
      let r = 2 * i + 2;
      let s = i;

      if (l < this.arr.length && this.arr[l] < this.arr[s]) s = l;
      if (r < this.arr.length && this.arr[r] < this.arr[s]) s = r;

      if (s === i) break;
      [this.arr[s], this.arr[i]] = [this.arr[i], this.arr[s]];
      i = s;
    }
  }
}
