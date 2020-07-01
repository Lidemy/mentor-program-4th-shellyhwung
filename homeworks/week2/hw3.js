function reverse(str) {
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



*/