function join(arr, concatStr) {
  var result = ''
  for (i=0; i<=arr.length-2; i+=1){
	  result += arr[i] + concatStr
}
if(arr.length-1<=0){
	return (result+ arr[0]+ concatStr)

}
else if (i=arr.length-1){
	return (result+ arr[arr.length-1])
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

/*請問助教，當我打出下面這段時，跑出來的結果會出現undefined，兩題都有類似的狀況，但是我不知道該如何調整，請問這裡是錯在哪裡呢?
console.log(join(['a'], '!'))
console.log(join([1, 2, 3], ''))
console.log(join(["a", "b", "c"], "!"))
console.log(join(["aaa", "bb", "c", "dddd"], ',,'))
console.log(join(["a", 1, "b", 2, "c", 3], ','))

結果會出現下面的情況
a!
undefined
123
undefined
a!b!c
undefined
aaa,,bb,,c,,dddd
undefined
a,1,b,2,c,3
undefined

*/
/*
function repeat(str, times) {
  var result = ''
  for (i=1; i<=times; i+=1){
	  result += str
  }
  console.log(result)
}
repeat('a', 5)
repeat('yoyo', 2)
/*請問助教，當我打出下面這段時，跑出來的結果會是undefined，兩題都有類似的狀況，但是我不知道該如何調整，請問這裡是錯在哪裡呢?
function repeat(str, times) {
  var result = ''
  for (i=1; i<=times; i+=1){
	  result += str
  }
  console.log(result)
}
repeat('a', 5)
repeat('yoyo', 2)
console.log(repeat('a', 5))
console.log(repeat('yoyo', 2))
結果會出現下面的情況
aaaaa
yoyoyoyo
aaaaa
undefined
yoyoyoyo
undefined



/*log加到爆版本
function join(arr, concatStr) {
  var result = ''
  for (i=0; i<=arr.length-2; i+=1){
	  result += arr[i] + concatStr
}
if(arr.length-1<=0){
	console.log(result+ arr[0]+ concatStr)

}
else if (i=arr.length-1){
	console.log(result+ arr[arr.length-1])
}
}

console.log(join(['a'], '!'))
console.log(join([1, 2, 3], ''))
console.log(join(["a", "b", "c"], "!"))
console.log(join(["aaa", "bb", "c", "dddd"], ',,'))
console.log(join(["a", 1, "b", 2, "c", 3], ','))
*/
