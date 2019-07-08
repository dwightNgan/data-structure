function Node (element) {
  this.element = element
  this.next = null
  this.prev = null
}

function LinkedList (){
  this.head = new Node ('header')
  
  this.find = function find(item) {
    let currNode = this.head
    while(currNode.element !== item) {
      currNode = currNode.next
    }
    return currNode
  }

  this.insert = function insert(newElement, item) {
    const newNode = new Node(newElement)
    const current = this.find(item)
    newNode.next = current.next
    newNode.prev = current
    // 这里insert方法中，书中忽略了给插入元素后面的元素指向前驱元素
    current.next && (current.next.prev = newNode)
    current.next = newNode
  }
  
  this.remove = function remove (item) {
    const current = this.find(item)
    // 书中的写法，会出现最后一个无法删除的情况
    current.prev.next = current.next
    current.next && (current.next.prev = newNode)
  }

  this.display = function display () {
    let currNode = this.head
    while(currNode) {
      console.log(currNode)
      currNode = currNode.next
    }
  }

  this.findLast = function findLast () {
    let currNode = this.head
    while(currNode.next) {
      currNode = currNode.next
    }
    return currNode
  }

  this.displayReverse = function displayReverse () {
    let currNode = this.findLast()
    while(currNode) {
      console.log(currNode.element)
      currNode = currNode.prev
    }
  }

}

const linked = new LinkedList()

linked.insert('dwight', linked.head.element)

linked.insert('allen', 'dwight')

linked.insert('smith', 'dwight')

// linked.display()

// console.log(linked.find('allen'))

// linked.display()

linked.remove('allen')

// linked.display()
linked.displayReverse()
