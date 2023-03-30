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


  const depthFirstHelperFunc = (node) => {
    if(!node) return;
    
    if(node.value) output.push(node.value);

    depthFirstHelperFunc(node.sublist);

    depthFirstHelperFunc(node.next);

  }

  depthFirstHelperFunc(head);

  return output;

}


let head = new LLNode(1,
  new LLNode(2), // next
  new LLNode(3, // sublist
    new LLNode(4), // sublist's next
    new LLNode(5,
      new LLNode(6),
      new LLNode(7)
    )
  )
);

// some test cases
console.log(flattenSublist(head)); // [1, 3, 5, 7, 6, 4, 2]