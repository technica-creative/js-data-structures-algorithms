function firstDuplicate(a) {
    const seen = {};
    for (let v of a){
      if (seen[v]) return v
      seen[v] = v;
    }
    return -1;
}

// PURE ES6 solution
// Set objects are collections of values. You can iterate through
// the elements of a set in insertion order. A value in the Set may
// only occur once; it is unique in the Set's collection.
// So if we use Set, we can iterate through and return the first duplicate
firstDuplicateES6 = a => {
    r = new Set();
    for (e of a)
        if (r.has(e)) return e;
        else r.add(e);
    return -1;
}

let a = [2, 3, 3, 1, 5, 2];
console.log(firstDuplicateES6(a));
