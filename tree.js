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
    if (!this.root) return 0

    let sum = this.root.val

    let findSum = (node) => {
      let children = node.children 
      for (let child of children){
        sum += child.val
        if (child.children.length){
          findSum(child)
        }
      }
    }
    findSum(this.root)
    return sum   
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0

    let count = this.root.val % 2 === 0 ? 1 : 0
    let findEvens = (node) => {
      let children = node.children
      for (let child of children){
        if (child.val % 2 === 0){
          count++
        }
        if (child.children.length){
          findEvens(child)
        }
      }
    }
    findEvens(this.root)
    return count
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0

    let count = this.root.val > lowerBound ? 1 : 0
    let checkGreater = (node) => {
      let children = node.children
      for (let child of children){
        if (child.val > lowerBound){
          count++
        }
        if (child.children.length){
          checkGreater(child)
        }
      }
    }
    checkGreater(this.root)
    return count
  }
}

module.exports = { Tree, TreeNode };
