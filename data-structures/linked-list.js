// =====================================================
// TIME COMPLEXITY OF A LINKED LinkedList
// Constant Time - O (1) (we always know where they are)
// Adding/removing head
// Adding/removing tail

// Searching through a Linked List:
// Linear time complexity - O (n)
// As our list grows in size, the time it takes to run our search
// function will grow proportionally

// PRACTICAL USES CASES:
// Online gaming
// Poker, board games, dominoes
// =====================================================

// no nodes when we start so values are null at first
function LinkedList() {
  this.head = null;
  this.tail = null;
};

// set node properties
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
};

// =====================================================
// FUNCTIONS
// =====================================================
// adding a node to the head of the list
LinkedList.prototype.addToHead = function (value) {
  // this.head refers to the current head (null if list is empty)
  // this is the new head node, so there are no prev nodes since head is #1 node
  var newNode = new Node(value, this.head, null);

  // if theres a node (its old now because were making a new head node), make the next
  // property of the old node equal to this new node we are creating
  if (this.head) this.head.prev = newNode;
  // if this is an empty list, then make the head and tail nodes the same
  else this.tail = newNode;

  // whether the list was empty or not, we want this new node to be the head
  this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  // if theres a node (its old now because were making a new tail node), make the next
  // property of the old node equal to this new node we are creating
  if (this.tail) this.tail.next = newNode;
  else this.tail = newNode; // empty list only

  this.tail = newNode;
};

//
LinkedList.prototype.removeHead = function() {
  // if the list is empty - no actions after this
  if (!this.head) return null;
  var val = this.head.value;

  // change the lists head pointer to be the node after the current head node
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;

  // return value
  return val;
};

LinkedList.prototype.removeTail = function () {
  if (!this.tail) return null; // empty
  var val = this.tail.value;

  // change the lists tail pointer to be the node before the current tail node
  this.tail = this.tail.prev;

  // is this new tail node that we just assigned actually present?
  // (if there was only 1 tail and no prev, then it would never get assigned above)
  // OR is our list going to be empty AFTER we remove this node?
  if (this.tail) this.tail.next = null;
  else this.tail = null;

  return val;
};

LinkedList.prototype.search = function (searchValue) {
  // starting point
  var currentNode = this.head;
  while(currentNode){
    if (currentNode.value === searchValue) return currentNode.value;
    // runs until null: null = false and while quits
    currentNode = currentNode.next;
  };
};

LinkedList.prototype.indexOf = function (searchValue) {
  var currentNode = this.head;
  var currentIndex = 0; // since we start at the head, the index is 0
  var indexesArray = [];
  while(currentNode) {
    if (currentNode.value === searchValue) indexesArray.push(currentIndex);
    currentNode = currentNode.next; // go to the next item
    currentIndex++; // increment the index number
  };
  return indexesArray;
};

// ================================================================================
// RUN IT
var ll = new LinkedList();

// add to head
ll.addToHead(3);
ll.addToHead(5);
ll.addToHead(1);

// add to tail
ll.addToTail(8);
ll.addToTail(1);
ll.addToTail(7);
ll.addToTail(1);

// search
console.log(ll.indexOf(1));

// remove head item
//ll.removeHead();
//console.log(ll.removeHead());

// remove tail item
//ll.removeTail();
//console.log(ll.removeTail());


// ==================================================================
// NOTES
// list of elements called NODES that are linked together in a file
// 2 types
  // single linked list (only has access to the next node)
  // double linked list (each node has reference to previous and next node)

// Linked list as a whole only needs to know about 2 NODES
  // - the 1st node called the HEAD pointer
  // - the 2nd node called the TAIL pointer
