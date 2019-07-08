function List(params) {
  this.listSize = 0
  this.pos = 0
  this.dataStore = []
  this.append = function append (item) {
    this.dataStore[this.listSize++] = item
  }
  this.remove = function remove (item) {
    const index = this.find(item)
    if (idex > -1) {
      this.dataStore.splice(index, 1)
      this.listSize--
      return true
    }
    return false
  }
  this.find = function find (item) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === item) {
        return i
      }
    }
    return -1
  }

  this.length = function length () {
    return this.listSize
  }

  this.toString = function toString() {
    return this.dataStore.toString()
  }

  this.insert = function insert (item, after) {
    const index = this.find(after)
    if (index > -1) {
      this.dataStore.splice(index, 0, item)
      this.listSize++
      return true
    }
    return false
  }

  this.clear = function clear() {
    this.dataStore = []
    this.listSize = 0
  }

  this.contains = function contains (item) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === item) {
        return true
      }
    }
    return false
  }

  this.front = function front () {
    return 0
  }

  this.end = function end () {
    return this.listSize - 1
  }

  this.prev = function prev () {
    if (this.pos > 0) {
      this.pos--
    }
  }

  this.next = function next () {
    if (this.pos < this.listSize) {
      this.pos++
    }
  }

  this.currPos = function currPos () {
    return this.pos
  }

  this.moveTo = function moveTo (pos) {
    this.pos = pos
  }

  this.getElement = function getElement () {
    return this.dataStore[this.pos]
  }

  this.hasNext = function hasNext () {
    return this.pos < this.listSize
  }

  this.hasPrev = function hasPrev () {
    return this.pos > 0
  }

}

const names = new List()
names.append('dwight')
names.append('harden')
names.append('curry')
names.append('james')

for (names.front(); names.hasNext(); names.next() ) {
  console.log(names.getElement())
}