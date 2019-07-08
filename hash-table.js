function HashTable() {
  this.table = new Array(137) // 这里选质数是为了减少碰撞（collision）到发生
  
  this.simpleHash = function simpleHash (data) {
    let total = 0
    const H = 37
    for (let i = 0; i < data.length; i++) {
      total += H * data.charCodeAt(i)
    }
    const result = total % this.table.length
    // console.log(data, '->', result)
    return result
  }

  this.put = function put(key, data) {
    this.table[this.simpleHash(key)] = data
  }

  this.pick = function pick (key) {
    return this.table[this.simpleHash(key)]
  }

  this.showDistro = function showDistro () {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(i + ':' + this.table[i])
      }
    }
  }
}

// const list = [
//   [ 'Chamberlain', 100 ],
//   [ 'Bryant', 81 ],
//   [ 'Thompson', 73 ],
//   [ 'Baylor', 71 ],
//   [ 'Robinson', 71 ]
// ]

// const hTable = new HashTable()
// list.forEach(item => {
//   hTable.put(item[0], item[1])
// })
// hTable.showDistro()


// collision resolution

// separate chaining
const scHashTable = new HashTable()
scHashTable.put = function scPut(key, data) {
  const hash = this.simpleHash(key)
  if (this.table[hash] === undefined) this.table[hash] = []
  this.table[hash].push(data)
}

scHashTable.showDistro = function scShowDistro () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i] !== undefined) {
      console.log(i + ':')
      for (let j = 0; j < this.table[i].length; j++) {
        console.log('    ' + this.table[i][j])
      }
    }
  }
}

scHashTable.put('Donnie', 'A')
scHashTable.put('Doinne', 'B')
scHashTable.showDistro()

// linear probing
const lpHashTable = new HashTable()
lpHashTable.values = []
lpHashTable.put = function lpPut (key, data) {
  let pos = this.simpleHash(key)
  while (this.table[pos]) {
    pos++
  }
  this.table[pos] = key
  this.values[pos] = data
}

lpHashTable.pick = function lpPick (key) {
  const pos = this.simpleHash(key)
  for (let i = pos; i < this.table.length; i++) {
    if (this.table[i] === key) {
      return this.values[i]
    }
  }
}

lpHashTable.showDistro = function lpShowDistro () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i] !== undefined) {
      console.log(i + ':' + this.values[i])
    }
  }
}

lpHashTable.put('Donnie', 'A')
lpHashTable.put('Doinne', 'B')
console.log(lpHashTable.pick('Donnie'))
lpHashTable.showDistro()