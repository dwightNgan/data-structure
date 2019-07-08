function Node (data, left = null, right = null) {
  this.data = data
  this.left = left
  this.right = right
}

function BST() {
  this.root = null

  this.insert = function insert (data) {
    const node = new Node(data)
    if (this.root === null) {
      this.root = node
      return
    }
    let current = this.root
    let parent
    while (true) {
      parent = current
      if (data < current.data) {
        current = current.left
        if (current === null) {
          parent.left = node
          break
        }
      } else {
        current = current.right
        if (current === null) {
          parent.right = node
          break
        }
      }
    }
  }

  this.inOrder =  function inOrder(node) {
    if (node === null) return
    inOrder(node.left)
    console.log(node.data)
    inOrder(node.right)
  }
  
  this.preOrder = function preOrder (node) {
    if (node === null) return
    console.log(node.data)
    preOrder(node.left)
    preOrder(node.right)
  }

  this.postOrder = function postOrder (node) {
    if (node === null) return
    postOrder(node.left)
    postOrder(node.right)
    console.log(node.data)
  }

  this.getMin = function getMin (node = this.root) {
    let current = node
    while (current.left !== null) {
      current = current.left
    }
    return current
  }

  this.getMax = function getMax (node = this.root) {
    let current = node
    while (current.right !== null) {
      current = current.right
    }
    return current
  }

  this.find = function find (data) {
    let current = this.root
    while (current !== null) {
      if (current.data === data) {
        return current
      } else if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return null
  }

  this.removeNode = function removeNode (node, data) {
    if (node === null) {
      return null
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data)
      return node
    }
    if (data > node.data) {
      node.right = this.removeNode(node.right, data)
      return node
    }
    if (data === node.data) {
      if (node.left === null && node.right === null) {
        return null
      }
      if (node.left === null) {
        return node.right
      }
      if (node.right === null) {
        return node.left
      }
      const temp = this.getMin(node.right)
      console.log(temp)
      node.data = temp.data
      node.right = this.removeNode(node.right, temp.data)
      return node
    }
  }

  this.remove = function remove (data) {
    this.root = this.removeNode(this.root, data)
  }

}

const bst = new BST()
bst.insert(76)
bst.insert(84)
bst.insert(88)
bst.insert(30)
bst.insert(20)
bst.insert(39)
bst.insert(79)

//          76
//         /  \
//        /    \ 
//       30     84
//       /\     /\
//     20  39  79 88
      
      
// console.log('inorder')
// bst.inOrder(bst.root)
// console.log('preorder')
// bst.preOrder(bst.root)
// console.log('postorder')
// bst.postOrder(bst.root)
// console.log('min', bst.getMin().data)
// console.log('max', bst.getMax().data)
// console.log('find 39', bst.find(39))
// console.log('find 40', bst.find(40))

bst.remove(76)
bst.inOrder(bst.root)