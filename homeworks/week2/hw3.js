/*謝謝助教的詳盡說明，
我現在了解 return 、 console.log()跟console.log(fx())的差異
*/
function reverse(str) {
  var strResult = ''
  for (var i = str.length-1; i>=0; i--){
	  strResult += str[i]  
  }
  return strResult
}

console.log(reverse('hello'))
console.log(reverse('yoyoyo'))
console.log(reverse('1abc2'))
console.log(reverse('1,2,3,2,1'))


/*function reverse(str) {
  var strResult = ''
  for (var i = str.length-1; i>=0; i--){
	  strResult += str[i]  
  }
  console.log(strResult)
}
reverse('hello')
reverse('yoyoyo')
reverse('1abc2')
reverse('1,2,3,2,1')
*/







/*
這是我的原始程式碼，我在這裡卡了三小時，
想說關於字串的概念應該是對的，不知為何結果跑不出來

function reverse(str) {
  var strResult = ''
  for (var i = str.length-1; i>=0; i--){
	  strResult += str[i]  
  }
}
console.log(reverse('hello'))
原本想說是在這裡呼叫函數，但是結果會顯示undefined
我想我這裡是錯在，對系統而言，
(reverse('hello'))是一個未被定義的函數
如果理解錯誤，還請助教指正，謝謝

以下是助教超級詳盡的回覆
其實不是未被定義的函數，reverse 這個函式的確有成功宣告，

console.log(reverse('hello')) 之所是 undefined，是因為你的 reverse 函式沒有 return 特定的值
如果沒有寫 return 特定值的話，那預設就是 return undefined，所以 console.log() 印出的就是這個 undefined

以第二題我寫的那個 function 為例子：

function capitalize(str) {
    var strNum = str.charCodeAt(0)
    if (strNum >= 97 && strNum <= 122){
         var first= String.fromCharCode(strNum-32) 
         var final = str.replace(str[0],first)
         return final
    } else {
         return str
    }
}

console.log(capitalize('hello'))
�console.log 最後印出的會是你 final 這個變數內的值，也就是 Hello，為什麼？
因為 console.log(capitalize('hello')) 你要拆成 console.log() 與 capitalize('hello') 來看

capitalize('hello') 執行後會回傳 'Hello' (因為 return final)，然後 console.log() 再去印出 'Hello' 讓你看到，可以想成這時候已經是 console.log('Hello')

再來談談你說的函式未定義情況，想想下面兩個 console.log() 差在哪：

console.log(capitalize)
console.log(capitalize('hello'))

更精確來說：

console.log(capitalize) 是去印出 capitalize 這個函式「本身」
而 console.log(capitalize('hello')) 是去印出 capitalize 這個函式「執行後回傳的結果」，注意，是回傳後的結果，也就是回傳的值，若要比喻，那就是剛剛範例中 return 的 final 這個東西
補充一點，所謂的未定義，應該是指未宣告，如果去執行一個未宣告的函式或變數，比如說我要 console.log(capitalize) 好了，但我根本沒寫這個函式，那結果應該會是：

ReferenceError: capitalize is not defined




*/