function Vertex (label, wasVisited) {
  this.label = label
  this.wasVisited = wasVisited
}

function Graph(v) {
  this.verticles = v
  this.edges = 0
  this.adj = []
  this.marked = []
  this.edgeTo = []
  for (let i = 0; i < this.verticles; i++) {
    this.adj[i] = []
    this.marked[i] = false
  }

  // 把两个点连起来
  this.addEdge = function addEdge(v, w) {
    this.adj[v].push(w)
    this.adj[w].push(v)
    this.edges++
  }

  this.showGraph = function showGraph () {
    let str = ''
    for (let i = 0; i < this.verticles; i++) {
      str += '\n' +i + ' ->'
      for (let j = 0; j < this.verticles; j++) {
        if (this.adj[i][j] !== undefined) {
          str += this.adj[i][j] + ' '
        }
      }
    }
    console.log(str)
  }
  // depth fisrt scearch
  this.dfs = function dfs(v) {
    this.marked[v] = true
    if (this.adj[v] !== undefined) {
      console.log('visted vertex: ' + v)
      for (let i = 0; i < this.adj[v].length; i++) {
        const w = this.adj[v][i]
        if (!this.marked[w]) {
          this.dfs(w)
        }
      }
    }
  }

  this.resetMarked = function resetMarked () {
    for (let i = 0; i < this.verticles; i++) {
      this.marked[i] = false
    }
  }
  
  // breadth first search
  this.bfs = function bfs (s) {
    const queue = []
    this.marked[s] = true
    queue.push(s)
    while (queue.length > 0) {
      const v = queue.shift()
      if (this.adj[v] !== undefined) {
        console.log('visited vertex: ' + v)
        for (let i = 0; i < this.adj[v].length; i++) {
          const w = this.adj[v][i]
          if (!this.marked[w]) {
            this.edgeTo[w] = v
            this.marked[w] = true
            queue.push(w)
          }
        }
      }
    }
  }

  this.pathTo = function pathTo(v) {
    const source = 0
    if (!this.hasPathTo(v)) {
      return
    }
    const path = []
    for (let i = v; i != source; i = this.edgeTo[i]) {
      path.push(i)
    }
    path.push(source)
    return path
  }

  this.hasPathTo = function hasPathTo (v) {
    return this.marked[v]
  }

  this.topSort = function topSort () {
    const stack = []
    const visited = []
    for (let i = 0; i < this.verticles; i++) {
      visited[i] = false
    }

    for (let i = 0; i < this.verticles; i++) {
      if (visited[i] === false) {
        this.topSortHelper(i, visited, stack)
      }
    }
    let str = ''
    console.log(stack)
    for (let i = 0; i < stack.length; i++) {
      if (stack[i] !== undefined && stack[i] !== false) {
        str += stack[i]
      }
    }
    console.log(str);
  }

  this.topSortHelper = function topSortHelper (v, visited, stack) {
    visited[v] = true
    for (const w of this.adj[v]) {
      if (!visited[w]) {
        this.topSortHelper(w, visited, stack)
      }
    }
    stack.unshift(v)
  }

}


const graph = new Graph(5)
// graph.addEdge(0, 1)
// graph.addEdge(0, 2)
// graph.addEdge(1, 3)
// graph.addEdge(2, 4)
// graph.showGraph()
// console.log('dfs')
// graph.dfs(0)
// graph.resetMarked()
// console.log('bfs')
// graph.bfs(0)
// graph.resetMarked()

// console.log(graph.pathTo(2))

//           0
//         /   \
//        /     \
//       1       2
//       |       |
//       |       |
//       3       4


const graph2 = new Graph(6)
graph2.addEdge(0, 1)
graph2.addEdge(1, 2)
graph2.addEdge(1, 3)
graph2.addEdge(1, 4)
graph2.addEdge(2, 5)

//                  2 - 5
//                 /
//        0 ---- 1 - 3
//                \
//                  4


graph2.topSort()
graph2.dfs(0)