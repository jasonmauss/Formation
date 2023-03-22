// Solution for Day 3 Formation problem - reverse a group of k nodes

 class LLNode {
   constructor(value, next = null) {
     this.value = value;
     this.next = next;
   }
 }

function reverseInGroupsOfK(head, k) {
  /* your code here */
}

let node5 = new LLNode(5, null);
let node4 = new LLNode(4, node5);
let node3 = new LLNode(3, node4);
let node2 = new LLNode(2, node3);
let node1 = new LLNode(1, node2);

console.log(reverseInGroupsOfK(node1, 2)); // should result in 2 -> 1 -> 4 -> 3 -> 5