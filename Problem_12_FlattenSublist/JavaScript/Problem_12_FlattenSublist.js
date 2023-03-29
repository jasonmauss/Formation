// Solution to Formation's day 12 problem/challenge - Flatten Sublist
// This is a more complex list traversal problem. In this case, each node points to 
// the next in the current list, but may also have a sublist. Think of this like an outline. 
// At the top level, there is a list of bullet points. Each bullet might have sub-bullets,
// which themselves might have sub-bullets.

// The task is to flatten this into an output array. All of every node's sub bullets must come 
// before the next bullet at that node's level.

// The node class for this is a simple extension of before:

class LLNode {
  constructor(value, next = null, sublist = null) {
    this.value = value;
    this.next = next;      // the next value in the current list
    this.sublist = sublist; // another list
  }
}

const flattenSublist = (head) => {
  const output = [];


  /* your code here */


  return output;

}


// some test cases
console.log(flattenSublist()); // 