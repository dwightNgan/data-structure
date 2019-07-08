function Stack() {
  this.dataStore = []
  this.top = 0
  this.push = function push (item) {
    this.dataStore[this.top++] = item
  }
  this.pop = function pop () {
    this.top--
    return this.dataStore.pop()
  }

  this.peek = function peek () {
    return this.dataStore[this.top - 1]
  }
  
  this.clear = function clear () {
    this.dataStore = []
    this.top = 0
  }

  this.length = function length () {
    return this.top
  }

}

const stack = new Stack()
stack.push('dwight')
stack.push('curry')
console.log(stack.peek())
console.log(stack.length())
console.log(stack.pop())
console.log(stack.peek())