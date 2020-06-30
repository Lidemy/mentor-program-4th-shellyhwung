//有用console.log()印出測試結果，答案ok
function capitalize(str) {
	var strNum = str.charCodeAt(0)
  if (strNum>=97&& strNum<=122){
	var first= String.fromCharCode(strNum-32) 
	var final = str.replace(str[0],first)
	return(final)
  }
  else if (strNum>=65&& strNum<=90){
	  return(str)
  }
  else {return(str)
  }
}

capitalize('nick')
capitalize('Nick')
capitalize(',hello')
capitalize(',Hello')
capitalize('hello')


/*function capitalize(str) {
	var strNum = str.charCodeAt(0)
  if (strNum>=97&& strNum<=122){
	var first= String.fromCharCode(strNum-32) 
	var final = str.replace(str[0],first)
	console.log(final)
  }
  else if (strNum>=65&& strNum<=90){
	  console.log(str)
  }
  else {console.log(str)
  }
}

capitalize('nick')
capitalize('Nick')
capitalize(',hello')
capitalize(',Hello')
capitalize('hello')
*/

/*
(log加到爆的版本)
function capitalize(str) {
	var strNum = str.charCodeAt(0)
	console.log(strNum)
  if (strNum>=97&& strNum<=122){
	var first= String.fromCharCode(strNum-32) 
	console.log(first)
	var final = str.replace(str[0],first)
	console.log(final)
  }
  else if (strNum>=65&& strNum<=90){
	  console.log(str)
  }
  else {console.log(str)
  }
}

capitalize('nick')
capitalize('Nick')
capitalize(',hello')
capitalize(',Hello')
capitalize('hello')
*/