const items = new WeakMap();

class Queue {
  constructor () {
    items.set(this, []);
  }
  enqueue(element) {
    let q = items.get(this);
    q.push(element);
  }
  dequeue(element) {
    let q = items.get(this);
    let r = q.shift();
    return r;
  }
  front() {
    let q = items.get(this);
    return q[0];
  }
  isEmpty() {
    let q = items.get(this);
    return q.length == 0;
  }
  size() {
    let q = items.get(this);
    return q.length;
  }
  print() {
    let q = items.get(this);
    console.log(q.toString());
  }
}

let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('Chris');
queue.enqueue('Natsu');
queue.enqueue('Aki');

queue.print();
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
queue.print();
