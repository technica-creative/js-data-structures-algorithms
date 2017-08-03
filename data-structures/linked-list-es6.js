/*
Linked lists store a sequential collection of elements;
but unlike arrays, in linked lists, the elements are not
placed contiguously in memory. Each element consists of a node
that stores the element itself and also a reference
(also known as a pointer or link) that points to the next element.

One of the benefits of a linked list over a conventional array is
that they are faster because we do not need to shift elements over
when adding or removing them. The process of shifting all items in
an array is very expensive. Linked lists dont need to shift any items
so they are generally faster.

However, we need to use pointers when
working with a linked list and, because of it, we need to pay some
extra attention when implementing a linked list. Another detail in
the array is that we can directly access any element at any position;
with the linked list, if we want to access an element from the middle,
we need to start from the beginning (head) and iterate the list until
we find the desired element.
*/
function LinkedList() {

  // required helper function that represents
  // the item we want to add to the list
  let Node = function(element) {
    this.element = element;
    this.next = null;
  };

  let length = 0;
  let head = null;

  this.append = function(element) {
    let node = new Node(element)
    let current;

    // if head null then we are adding first element
    // so just point the head element to the node element;
    // *The last node from the list always has null as the next element.
    if (head === null) {
      head = node;
    } else {
      current = head;

      // loop list till we find the last item
      // We know its the last item when current.next is null because
      // *The last node from the list always has null as the next element.
      while(current.next) {
        current = current.next;
      }

      // get the last item and assign next to node to make the link
      current.next = node;
    }

    // update the size of the list
    length++;
  };

  this.insert = function(position, element) {
    // check for out-of-bounds values
    if (position >= 0 && position <= length) {
      let node = new Node(element);
      current = head;
      previous;
      index = 0;

      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      // update the size of the list
      length++;
    }
  };

  this.removeAt = function(position) {
    // check for out-of-bounds values
    if (position > -1 && position < length) {
      let current = head, // 1st item in list
          previous,
          index = 0;

      // *The current variable is a reference to the element that we
      // want to remove. The previous variable is a reference to the
      // element that comes before the element we want to remove.

      if (position === 0) { // removing first item only
        head = current.next; // point to the 2nd element
      } else { // removing any item other than the first
        while (index++ < position) { // iterate list to position requested
          // reference to element before the current element
          previous = current;
          // reference to the current element
          current = current.next;
        }
        // link previous with current's next: skip it to remove
        // The current element will be lost in the computers memory
        // and available to be cleaned by the garbage collector
        previous.next = current.next
      }

      length--;

      return current.element;
    } else { // invalid position parameter
      return null;
    }
  };

  this.remove = function(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.indexOf = function(element) {
    let current = head; // need a var that will help us iterate
    index = -1; // var to increment to count position number

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    // if its not in the list, return -1
    return -1;
  };

  this.isEmpty = function() {
    return length === 0;
  };

  this.size = function() {
    return length;
  };

  this.getHead = function() {
    return head;
  };

  this.toString = function() {
    let current = head
        string = '';

    // loop through each element and add it to the string
    while (current) {
      string += current.element + (current.next ? ', ' : '');
      current = current.next;
    }
    return string;
  }

  this.print = function() {
    console.log(this.toString());
  }
};


let list = new LinkedList();
list.append(10);
list.append(15);
console.log(list.toString());
console.log(list.getHead());
console.log(list.size());
console.log(list.isEmpty());
