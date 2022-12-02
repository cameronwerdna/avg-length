function averageLength(arr) { 
    let arrLen = 0
    arr.map(item => arrLen += item.length)
    let mean = Math.round(arrLen/arr.length)
    return arr.map(item => item[0].repeat(mean))
  }

console.log(averageLength(['aa', 'bbb', 'ccc', 'dd'])) // => [ 'aaa', 'bbb', 'ccc', 'ddd' ]
console.log(averageLength(['aaaa', 'bbbbb', 'ccc', 'dddddddd'])) // => [ 'aaaaa', 'bbbbb', 'ccccc', 'ddddd' ]
console.log(averageLength(['aaa', 'b', 'c', 'd'])) // => [ 'aa', 'bb', 'cc', 'dd' ]