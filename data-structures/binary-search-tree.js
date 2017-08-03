// ====================================================
// INFO
// Used often to store data because they are very fast to search through
// and retrieve data from. Its also easy to insert and delete data.
// Dictionarys, Phone book, Users with ids
// Binary search continually cuts 50% of the search after each iteration
// BINARY SEARCH TREES ARE FASTER THAN LINKED LISTS
// -----------------------------------------------------
// BALANCED BINARY SEARCH TREES are BST's that have many left and right children nodes
// Sometimes, there may be a case when you only have right nodes or left nodes and that
// is similiar to a Linked List structure where you must iterator over all items
// =====================================================

// new Binary Search Tree constructor (ES5 style)
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

// ===================================================================
// Prototypes
BST.prototype.insert = function (value) {
  if (value <= this.value) {
    // if there isnt a value on the left, make a new tree with the value
    if (!this.left) this.left = new BST(value);
    // if there is a node there, run the method recursively on that node
    // and create more left nodes going down
    else this.left.insert(value);
  } else if (value > this.value) {
    // if there isnt a value on the right, make a new tree with the value
    // and create more right nodes going down
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  };
};

BST.prototype.contains = function (value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    // we want to go to the left because the value is smaller
    // if there is no child node to the left, then return false
    if (!this.left) return false;
    else return this.left.contains(value);
  } else if (value > this.value) {
    // we want to go to the right because the value is larger
    // if there is no child node to the right, then return false
    if (!this.right) return false;
    else return this.right.contains(value);
  };
};

//==========================================================================
// Depth First Traversal
// start at the top and follow each branch down to the bottom
// This RECURSIVE function will travel through all nodes in the Binary Search Tree
// and Run an Iterator function on EVERY NODE.
// It will travel DOWN (depth first) each tree and iterate on each node
// This is the IN ORDER implementation (the order they touch each node of the tree)
//==========================================================================
BST.prototype.depthFirstTraversal = function (iteratorFunc, order) {
  // 3 TYPES OF order: IN ORDER, PRE ORDER, POST ORDER

  // IN ORDER is FROM LEAST TO GREATEST.
  // Left nodes are the least, so the first direction is Left

  // runs iterator on root node first, then left, then right and doesnt run 'in-order'
  if (order === 'pre-order') iteratorFunc(this.value);
  // run iterator on left child first if it exists
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
  // runs iterator on root node after left, then right and doesnt run 'pre-order'
  if (order === 'in-order') iteratorFunc(this.value);
  // run iterator on right child first if it exists
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  // starts at LOWEST LEVEL and works its way UP
  // runs iterator on root nodes last, 'pre-order' + 'in-order' dont run
  // both the left and right nodes are processed first and then it works its way up
  if (order === 'post-order') iteratorFunc(this.value);
};

//==========================================================================
// Breadth First Traversal
// Recursively Processes each node from the TOP DOWN on each level before
// moving down to the next LEVEL
// Used for defining a Heiarchy, (military, company director chart, etc.)
//==========================================================================
BST.prototype.breadthFirstTraversal = function (iteratorFunc) {
  // define a Queue - FIFO like Drive-thru
  // this refers to the root node of the BST
  var queue = [this];

  // we want the while loop to run while queue is not empty
  while (queue.length) {
    // takes the first node out of the queue and stores it
    // in treeNode
    var treeNode = queue.shift();
    iteratorFunc(treeNode);
    // push any child nodes into the back of the queue
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  };
}

//==========================================================================
// minimal values are always on the left of a tree
//==========================================================================
BST.prototype.getMinVal = function () {
  // recursively call until there is no more left nodes to traverse
  // function to continue down the left side to get the lowest value
  if(this.left) return this.left.getMinVal();

  // if there is no more this.left nodes, then return the current one
  else return this.value;
};

// max values are always on the right
BST.prototype.getMaxVal = function () {
  // recursively call again and again until there is no more right node
  if (this.right) return this.right.getMaxVal();
  else return this.value;
};

// ===================================================================
// Run some example code just to test it out
var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

// INSERT
// console.log(bst.left.right.left);

// CONTAINS
//console.log(bst.contains(30));

// DEPTH FIRST TRAVERSAL
//console.log(bst.depthFirstTraversal(log, 'post-order'));

// BREADTH FIRST TRAVERSAL
// console.log(bst.breadthFirstTraversal(log));
//
// function log(node) {
//   console.log(node.value);
// }

// GET MIN value
//console.log(bst.getMinVal());

// GET MAX value
console.log(bst.getMaxVal());

// ==============================================
// NOTES
// ==============================================
// Collection of nodes (ACTUALLY, ALL NODES ARE BINARY SEARCH TREES)
// Each node in a Binary Search Tree will have 2 nodes
//  - a left node and a right node

// Left nodes will be of lesser or equal value to their parent node
// Right nodes will be greater than their parent node

// LEFT NODE <= PARENT NODE
// RIGHT NODE > PARENT NODE
// -------------------------------------------------------------------
// BIG O NOTATION:
// LINKED LISTS ARE: O (n)
// BINARY SEARCH TREES ARE LOGARITHMIC: O (log n)

// In Linked Lists, you must search through all the nodes to find something,
// but in Binary Search Trees, you can search a lot faster
