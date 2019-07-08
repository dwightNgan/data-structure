
function genRamdomArray () {
  const arr = []
  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100))
  }
  return arr
}

const arr = genRamdomArray()


function bubbleSort (array) {
  let temp
  for (let i = array.length; i >= 2; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]){
        temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
}

// bubbleSort(arr)
// console.log(arr)

function selectionSort(array) {
  let min, temp
  for (let i = 0; i < array.length - 1; i++) {
    min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j
      }
    }
    temp = array[i]
    array[i] = array[min]
    array[min] = temp
  }
}

// selectionSort(arr)
// console.log(arr)

function insertionSort (array) {
  let temp, j
  for (let i = 0; i < array.length; i++) {
    temp = array[i]
    j = i
    while (j > 0 && array[j - 1] >= temp) {
      array[j] = array[j - 1]
      j--
    }
    array[j] = temp
  }
}

// console.log(arr)
// insertionSort(arr)

// 在元素少的情况下差不多
// 但是再大量的元素下 效率：insertionSort > slectionSort > bubbleSort

function shellSort (array, gaps = [5, 3, 1]) {
  let temp, gap, j
  for (let g = 0; g < gaps.length; g++) {
    gap = gaps[g]
    for (let i = gap; i < array.length; i++) {
      temp = array[i]
      for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap]
      }
      array[j] = temp
    }
  }
}

// shellSort(arr)
// console.log(arr)

function shellSortWithDynamicGap (array) {
  const { length } = array
  let temp, j, h = 1
  while (h < length / 3) {
    h = 3 * h + 1
  }
  while (h >= 1) {
    for (let i = 0; i < length; i++) {
      temp = array[i]
      for (j = i; j < length && array[j - h] > temp; j -= h) {
        array[j] = array[j - h]
      }
      array[j] = temp
    }
    h = (h - 1) / 3
  }
}

// shellSortWithDynamicGap(arr)
// console.log(arr)

// 两种希尔算法速度基本一样


function mergeSort (array) {
  if (arr.length < 2) return
  let step = 1, left, right
  while (step < array.length) {
    left = 0
    right = step
    while (right + step <= array.length) {
      mergeArrays(array, left, left + step, right, right + step)
      left = right + step
      right = left + step
    }
    if (right < array.length) {
      mergeArrays(array, left, left + step, right, array.length)
    }
    step *= 2
  }
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
  const rightArr = new Array(stopRight - startRight + 1)
  rightArr[rightArr.length - 1] = Infinity
  const leftArr = new Array(stopLeft - startLeft + 1)
  leftArr[leftArr.length - 1] = Infinity
  let k = startRight
  for (let i = 0; i < rightArr.length - 1; i++) {
    rightArr[i] = arr[k]
    k++
  }
  k = startLeft
  for (let i = 0; i < leftArr.length - 1; i++) {
    leftArr[i] = arr[k]
    k++
  }
  let m = n = 0
  for (let i = startLeft; i < stopRight; i++) {
    if (leftArr[m] <= rightArr[n]) {
      arr[i] = leftArr[m]
      m++
    } else {
      arr[i] = rightArr[n]
      n++
    }
  }
}

// mergeSort(arr)
// console.log(arr)

function qSort (array) {
  if (array.length === 0) {
    return []
  }
  const left = []
  const right = []
  let pivot = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }
  return qSort(left).concat(pivot, qSort(right))  
}
// 快速排序，在大量数据情况下才有性能优势

console.log(qSort(arr))