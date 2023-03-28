// Solution to Formation's Day 11 problem/challenge - Tree Height
// Prompt: Given a binary tree, find the height, that is the length of the 
// path from the root to the deepest leaf node.


// You may assume the node class is:
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}


const treeHeight = (root) => {

    if (!root) {
        // if the root is null, the tree has height 0
        return 0;
    } else {
        // recursively find the height of the left and right subtrees
        const leftHeight = treeHeight(root.left);
        const rightHeight = treeHeight(root.right);
        // return the maximum height plus one (to account for the root node)
        return Math.max(leftHeight, rightHeight) + 1;
    }

}



// test cases
// create a binary tree
const tree1 = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)),
    new TreeNode(3,
        null,
        new TreeNode(6)));
  
// find the height of the tree
const height1 = treeHeight(tree1);
console.log(height1); // output: 3 - binary tree from root to leaf was through nodes 1, 3, and 6


const tree2 = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4,
            new TreeNode(8),
            new TreeNode(9)),
        new TreeNode(5,
            new TreeNode(10),
            new TreeNode(11,
                new TreeNode(12),
                new TreeNode(13,
                    new TreeNode(14),
                    new TreeNode(15)
                )
            )
        )
    ),
    new TreeNode(3,
        new TreeNode(6),
        new TreeNode(7))
);
  
  // find the height of the tree
  const height2 = treeHeight(tree2);
  console.log(height2); // output: 6, binary tree from root to leaf through nodes 1, 2, 5, 11, 13 and 14/15