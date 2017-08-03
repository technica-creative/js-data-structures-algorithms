function PriorityQueue() {
  let items = [];
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  /*
  First, we compare its priority to the rest of the elements.
  When we find an item with higher priority than the item we
  are trying to add, then we insert the new element one position
  before using splice (this logic also respects the other elements
  with the same priority, but which were added to the queue first).
  After inserting the new element, we stop looping queue, this way,
  our queue will also be sorted and organized by priority
  */
  this.enqueue = function(element, priority) {
    let queueElement = new QueueElement(element, priority);
    let added = false;

    for (let i=0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added) {
      items.push(queueElement);
    }
  }

  this.dequeue = function(element) {
    let q = items.get(this);
    let r = q.shift();
    return r;
  }

  this.front = function() {
    let q = items.get(this);
    return q[0];
  }

  this.isEmpty = function() {
    let q = items.get(this);
    return q.length == 0;
  }

  this.size = function() {
    let q = items.get(this);
    return q.length;
  }

  // print out results using template strings
  this.print = function() {
    for (let i=0; i < items.length; i++) {
      console.log(`${items[i].element} - ${items[i].priority}`);
    }
  }
};

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Chris", 2);
priorityQueue.enqueue("Aki", 1);
priorityQueue.enqueue("Natsu", 1);
priorityQueue.print();
