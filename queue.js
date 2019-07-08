function Queue (data) {
  this.data = data || []

  this.size = function getQueueSize() {
    return this.data.length
  }

  this.head = function getQueueHead () {
    return this.data[0]
  }

  this.tail = function getQueueTail() {
    return this.data[this.data.length - 1]
  }

  this.enqueue = function enqueue (item) {
    return this.data.push(item)
  }

  this.dequeue = function dequeue () {
    return this.data.shift()
  }
}

const que = new Queue([{api: 'get-token'}])

console.log('队列开始：', que.data)

que.enqueue({api: 'register'})

console.log('入列', que.data)

que.dequeue()

console.log('出列', que.data)