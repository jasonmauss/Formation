// Solution to Formation's Day 8 Challenge - Tree to List
// Given a binary tree, convert this to a doubly linked list in the order of the in-order traversal.
// This operation should be done in place, not creating any new data structure. You must re-use the 
// node's left pointer as the pointer to the previous node in the list and the right pointer should 
// be the next node in the list.

// At the end, return a pointer the first node in the list.

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}


const tree2list = (root, endOfList = null) => {
  
    if(!root) return endOfList;

    if(root.right) {
        endOfList = tree2list(root.right, endOfList);
    }

    let listRoot = root;
    listRoot.right = endOfList;
    if(endOfList) {
        endOfList.left = listRoot;
    }

    if(root.left) {
        listRoot = tree2list(root.left, listRoot);
    }

    return listRoot;
}




let node8 = new Node(8, null, null);
let node7 = new Node(7, null, node8);
let node6 = new Node(6, null, node7);

// some test cases
console.log(tree2list(node6)); // 