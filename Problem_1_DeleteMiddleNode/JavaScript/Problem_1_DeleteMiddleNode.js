
class LLNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const getLinkedListLength = (head) => {

    let currentNode = head;
    let length = 1;

    while(currentNode.next) {
        length++;
        currentNode = currentNode.next;
    }

    return length;
    
}

function deleteMiddleNode(head) {
    // need to determine the length of the list
    let listLength = getLinkedListLength(head);
    let middleListPoint = listLength % 2 === 1 ? Math.round(listLength / 2) : (listLength / 2) + 1;

    let currentNode = head;
    let nextNode = null;

    for(let llIndex = 1; llIndex < middleListPoint - 1; llIndex++) {
        currentNode = currentNode.next;
        nextNode = currentNode.next;
    }

    currentNode.next = nextNode.next;

    return head;
}


// test case
let node6 = new LLNode(6, null);
let node5 = new LLNode(5, node6);
let node4 = new LLNode(4, node5);
let node3 = new LLNode(3, node4);
let node2 = new LLNode(2, node3);
let node1 = new LLNode(1, node2);
let node0 = new LLNode(0, node1);

console.log(deleteMiddleNode(node0)); // 