/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;
    let sum = this.root.val;
    function addNodeValue(node) {
      for (let child of node.children) {
        sum += child.val;
        // recursive call if the child has children
        if (child.children.length > 0) {
          addNodeValue(child);
        }
      }
    }
    addNodeValue(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
    //find the node value is even
    let countEven = this.root.val % 2 === 0 ? 1 : 0;
    function countEvenNodeValue(node) {
      for (let child of node.children) {
        if (child.val % 2 === 0) {
          countEven++;
        }
        //if child has children recursive call of the function again.
        if (child.children.length > 0) {
          countEvenNodeValue(child);
        }
      }
    }
    countEvenNodeValue(this.root);
    return countEven;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    let count = this.root.val > lowerBound ? 1 : 0;
    function countGreatNodeVal(node) {
      for (let child of node.children) {
        if (child.val > lowerBound) {
          count++;
        }
        //if child has children recursive call of the function again.
        if (child.children.length > 0) {
          countGreatNodeVal(child);
        }
      }
    }
    countGreatNodeVal(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
