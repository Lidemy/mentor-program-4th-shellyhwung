function join(arr, concatStr) {
var result = arr[0]
  for (i=1; i<=arr.length-1; i+=1){
	   result += concatStr + arr[i] 
}
return result
}


join(['a'], '!')
join([1, 2, 3], '')
join(["a", "b", "c"], "!")
join(["aaa", "bb", "c", "dddd"], ',,')
join(["a", 1, "b", 2, "c", 3], ',')

/*要印出的話，才需要console.log(join())
console.log(join(['a'], '!'))
console.log(join([1, 2, 3], ''))
console.log(join(["a", "b", "c"], "!"))
console.log(join(["aaa", "bb", "c", "dddd"], ',,'))
console.log(join(["a", 1, "b", 2, "c", 3], ','))
*/

function repeat(str, times) {
  var result = ''
  for (i=1; i<=times; i+=1){
	  result += str  
  }
  return result
}
repeat('a', 5)
repeat('yoyo', 2)

/*如果要印出結果，才需要下面的
console.log(repeat('a', 5))
console.log(repeat('yoyo', 2))
*/

