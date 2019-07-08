function Node (element) {
  this.element = element
  this.next = null
}

function LinkedList (){
  this.head = new Node ('header')
  this.head.next = this.head
  
  this.find = function find(item) {
    let currNode = this.head
    while(currNode.element !== item) {
      currNode = currNode.next
    }
    return currNode
  }

  this.findPrevious = function findPrevious (item) {
    let currNode = this.head
    while (currNode && currNode.next.element !== item) {
      currNode = currNode.next
    }
    return currNode
  }

  this.insert = function insert(newElement, item) {
    const newNode = new Node(newElement)
    const current = this.find(item)
    newNode.next = current.next
    current.next = newNode
  }

  this.remove = function remove (item) {
    const prevNode = this.findPrevious(item)
    prevNode.next = prevNode.next.next
  }

  // 书中的写法，最后一个将不会被输出
  this.display = function display () {
    let currNode = this.head
    do {
      console.log(currNode.element)
      currNode = currNode.next
    }
    while(currNode.element !== this.head.element)
  }

}

const linked = new LinkedList()

linked.insert('dwight', linked.head.element)

linked.insert('allen', linked.head.element)

linked.display()

// linked.findPrevious('dwight')

// linked.display()

// linked.remove('allen')

// linked.display()
