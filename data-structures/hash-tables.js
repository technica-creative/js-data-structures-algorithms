// =====================================================
// Performance of HashTables
// BIG O (1) - TIME COMPLEXITY
// Constant runtime   - O (1)

// Pros - Unlike Linked Lists and Binary Search Trees, they offer:
// Constant time insertion
// Constant time look up

// Cons -
// Data doesnt store reference to other pieces of data in the data structure
// like Linked Lists and Binary Search Trees (reference nodes of each other)

// Practical Uses
// Email provider storing addresses
// Users of an application
// =====================================================

// HashTable constructor
function HashTable (size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
};

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
};

// ===================================================================
// take a string from the key property on our node and hash it so that
// it cooresponds with a bucket in our hash table
HashTable.prototype.hash = function (key) {
  var total = 0;
  // adds numeric value of each character into total
  for(var i=0; i < key.length; i++){
    total+= key.charCodeAt(i);
  };
  // divide the number by 30 and the remainder will be 29 or less
  return total % this.numBuckets;
};

// take a key/value pair, turn them into a HashNode, then place them
// into the correct bucket in our HashTable
HashTable.prototype.insert = function (key, value) {
  var bucketIndex = this.hash(key);
  // if the bucket is empty, make a new node and put it in the bucket
  if (!this.buckets[bucketIndex]) {
    this.buckets[bucketIndex] = new HashNode(key, value);
  } // check the first node in the bucket and update it if it matches
  else if (this.buckets[bucketIndex].key === key) {
    this.buckets[bucketIndex].value = value;
  }
  else { // not empty
    // travel down the node chain and put the node at the end of the chain
    var currentNode = this.buckets[bucketIndex];

    // as long as there is something in the bucket, then keep going
    // starts at the 2nd node because of .next
    while (currentNode.next) {
      // see if the info exists and then update it
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return; // return after update and dont add a duplicate
      }
      // change the current node to the next node in the chain
      currentNode = currentNode.next;
    }
    // add the new hashnode at the end of the chain that exists
    currentNode.next = new HashNode(key, value);
  }
};

HashTable.prototype.get = function (key) {
  var keyIndex = this.hash(key);
  if (!this.buckets[keyIndex]) return null;
  else {
    //return this.buckets[keyIndex].value;
    var currentNode = this.buckets[keyIndex];
    while (currentNode) {
      if (currentNode.key === key) return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  }
};

HashTable.prototype.retrieveAll = function () {
  var allNodes = [];
  for (var i=0; i < this.numBuckets; i++){
    // inside of each bucket, there could be a chain of nodes
    var currentNode = this.buckets[i];
    while (currentNode) {
      allNodes.push(currentNode);
      currentNode = currentNode.next;
    };
  };
  return allNodes;
};


// ===================================================================
// Run it
var hashTable = new HashTable(30);
hashTable.insert('Chris', 'chris@example.co.jp');
hashTable.insert('Crish', 'chris@example.co.jp');
// Crish has the same exact letters as above (same capital too), so it will cause
// a collision. We can see that the collision is correct and adds a next value when
// logging out to the console
hashTable.insert('Natsumi', 'natsumi@example.co.jp');
hashTable.insert('Romano', 'romano@example.co.jp');

// change the email address for Romano
hashTable.insert('Romano', 'romano@pizzaman.com');

console.log(hashTable.get('Natsumi'));
//console.log(JSON.stringify(hashTable.buckets, null, '\t'));
console.log(hashTable.retrieveAll());
//console.log(hashTable.get('Romano'));
// charCodeAt() gives number for text
// console.log('hello World'.charCodeAt(4));

// modulus operator , gives remainder of numbers after division
// console.log(100 % 30);
