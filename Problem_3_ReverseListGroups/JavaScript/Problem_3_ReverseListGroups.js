// Solution for Day 3 Formation problem - reverse a group of k nodes

 class LLNode {
   constructor(value, next = null) {
     this.value = value;
     this.next = next;
   }
 }

const reverseInGroupsOfK = (head, k) => {
  
    // If the head node passed in is null, or it's only a single node
    // or the value of k is 1, don't bother with any of this.
    if(!head || !head.next || k === 1) return head;

    // previousNode and currentNode will help us hold on to references
    // while we swap things around. lastNode will hold on to our reference
    // of the node that ends up at the end of our "swap". nodeCount will
    // just be our counter for adhering to swapping 'k' number of times.
    let previousNode = head;
    let currentNode = previousNode.next;
    previousNode.next = null;
    let lastNode = previousNode;
    let nodeCount = 0;

    // do this k number of times, basically
    while(currentNode && nodeCount < k - 1) {
        let placeholderNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = placeholderNode;
        nodeCount++;
    }

    // a little recursion magic here to keep adding a
    // reversed tail of nodes on to the end of our existing last node.
    if(currentNode !== null) {
        lastNode.next = reverseInGroupsOfK(currentNode, k);
    }

    // previousNode ends up holding the first item that we
    // swapped for at the top of this function
    return previousNode;

}

let node5 = new LLNode(5, null);
let node4 = new LLNode(4, node5);
let node3 = new LLNode(3, node4);
let node2 = new LLNode(2, node3);
let node1 = new LLNode(1, node2);

console.log(reverseInGroupsOfK(node1, 2)); // should result in 2 -> 1 -> 4 -> 3 -> 5