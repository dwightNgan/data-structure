function seqSearch(array, data) {
  for (let i = 0; i < array.length; i++) {
    if (data === array[i]) {
      return i
    }
  }
  return -1
}


// 带自组织的顺序查询，使多次重复的查询的值越来约往前
// function seqSearch(array, data) {
//   let temp
//   for (let i = 0; i < array.length; i++) {
//     if (data === array[i]) {
//       if (i > 0) {
//         temp = array[i - 1]
//         array[i - 1] = array[i]
//         array[i] = temp
//       }
//       return i - 1
//     }
//   }
//   return -1
// }

// 根据8-2原则的自组织的顺序查询，使多次重复的查询的值越来约往前
// 这个写法应该会引起一个问题：然后两个在20%开外值重复查询，那么有可能并没有优化
// function seqSearch(array, data) {
//   let temp
//   for (let i = 0; i < array.length; i++) {
//     if (data === array[i] && i > (array.length * 0.2)) {
//         temp = array[0]
//         array[0] = array[i]
//         array[i] = temp
//       return 0
//     } else if (array[i] === data) {
//       return i
//     }
//   }
//   return -1
// }


// 二分法是处理有序数据，在数据量少的情况下与顺序查询差异不大，但是在大数据查询下快一倍左右
// 因为是处理有序数据，所以如果要查找相同数据，可以在查询到的数组附近查找
function binSearch(array, data) {
  let upperBound = array.length - 1
  let lowerBound = 0
  while (lowerBound <= upperBound) {
    const mid = Math.floor((upperBound + lowerBound) / 2)
    if (array[mid] === data) {
      return mid
    }
    if (array[mid] < data) {
      lowerBound = mid + 1
    } else {
      upperBound = mid - 1
    }
  }
  return -1
}