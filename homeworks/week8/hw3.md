## 什麼是 Ajax？
AJAX 是「Asynchronous JavaScript and XML」（非同步的 JavaScript 與 XML 技術）。<BR>最核心的概念，其實就是 Asynchronous 這個字。一般來說，程式是一行一行跑，如果第一個 function 還沒有執行完成，那就不會往下執行第二個程式。<br> 
早期比較常使用 XML 做為資料交換的格式，這幾年以 JSON 格式較常見。<BR>

AJAX 這個技術可以使程式碼不會被阻塞在某一個執行動作上。比如說，如果在一般的情況下，程式碼的執行就像是大隊接力，必須一棒傳一棒，如果隊友跑得慢，那就只能慢慢等<BR>
```
 function slow(a){
```
<BR>
```
執行某些帶有 a 參數的指令}
```
<BR>
```
function fast(b){
```
<BR>
```
執行某些帶有 b 參數的指令
}
```
<BR>
由於程式碼是一行一行執行的原因，所以 function slow(a) 執行完成、拿到 response 之前，function fast(b) 不會被執行。這就有點像畫面凍結在某個狀態,
人眼看起來就像是當機了。<BR>
如果使用 AJAX 這個技術就可以讓 function slow(a) & function fast(b)　都各自執行自己的程式碼; function slow(a) 執行之後，不論有沒有拿到 response, 都會直接往下執行 function fast(b) 。需要留心的是，如果是使用 AJAX，因為非同步的 Function 不能直接透過 return 把結果傳回來，所以必須搭配 Callback Function，等到拿到 response, 再利用 callback function 使程式碼被完整執行。

## 用 Ajax 與我們用表單送出資料的差別在哪？
Ajax 與使用表單送出資料，都是前端與後端交換資料的方式。<BR>
主要差異：會不會產生**換頁**的情況<BR>
###表單：<BR>
發一個 REQUEST 到**新的頁面**，之後瀏覽器再把 SERVER 的 RESPONSE 重新 RENDER 出來。就是會有**換頁**的情況<BR>
**新的頁面**指的是在`form` 的標籤內，我們在 `action`內所提供的網址。類似這樣：`<form method="GET" action="https://google.com">`<br>
可以用 **POST** 或是 **GET** 將資料送出<BR>
1. **POST**：參數會被放在 request 的 body 裡面。如果所帶的參數有會員帳號或是密碼的個資類資訊，使用 **POST** 會是比較好的方式。<BR>
2. **GET**：參數直接放在網址列上，以 **QUERY STRING** 的方式將資料送出

每一次都會重新 render 全部的頁面，把資料帶到另外一個頁面<br>
使用表單的缺點就是每次都要換頁，有時候可能只是需要頁面上其中幾個欄位的資料，其實不需要再重新 render 一個新的頁面。
### Ajax：
任何非同步且利用 JS 與 SERVER 交換資料的方式，都可以算是 Ajax 的一種。<br>
僅針對所需要的欄位做資料的更新。<br>
利用 JS 發 request 到 SERVER，SERVER 回傳的 RESPONSE 會經由瀏覽器再提供給 JS，再由 JS 處理 RESPONSE 的後續程序。此步驟就不需要由瀏覽器重新 render 整個頁面。

## JSONP 是什麼？
JSON With Padding<br>
同源政策會限制跨網域的資訊存取。<br>
然而，有些 html 裡面的標籤不受同源政策的限制。例如：`<img>`、`<script></script>`<br>
JSONP 是一種利用 `<script src=""></script>` 取得跨網域資料的方式<br>
通常`<script src=""></script>` 代表的是引入 js 的檔案，但是也可以被用來引入其他資料，突破同源政策的限制。
利用 JSONP，可以存取跨來源的資料。但 JSONP 的缺點是要帶的那些參數永遠都只能用附加在網址上的方式（GET）(query string)帶過去，沒辦法用 POST。<br>
還有一點需要注意的是，Ajax 一定是受同源政策的管理。 `<script src=""></script>` 才不受同源政策的規範。

## 要如何存取跨網域的 API？
首先定義跨網域，一般來說，只要是非本機端或者不是使用同一個網域，都算是跨網域 (a 公司跟 b公司的網路是跨網域、 http & https 也是跨網域)。<br>
不同 Domain 就是不同源。<br>
Server 端所回覆的 Response Header 如果有出現 Access-Control-Allow-Origin: * 就表示任何網域皆可以請求資源。<br>
以本周的作業串接 twitch API 為例，在 Response Header 上面就有 Access-Control-Allow-Origin: *。<br>瀏覽器收到後根據同源政策的規範，檢查條件是否符合，如果資訊一致，client 端會順利收到回覆的內容；如果條件不符合，則瀏覽器會將回覆的內容擋下來，並提示發生錯誤，使 client 端不能進一步的讀取到回覆的內容。 


## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
因為瀏覽器**同源政策**的關係。<br>
因為第四周是從本機端 (node.js ) 發出 request，本周是經由瀏覽器發 request，瀏覽器為了安全性的考量，有時候，可能會限制本機端發一些 request、或者是瀏覽器替本機端發 Request 的時候，會加一些資訊(如：瀏覽器的版本)在 Request 上面

## 參考資料：

[跨來源資源共用（CORS）](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/CORS)<BR>
[Cross Domain Ajax 跨網域抓取資料(JSONP)](https://ithelp.ithome.com.tw/articles/10094915)<BR>
[如何解決跨網域存取被拒絕問題](https://andy6804tw.github.io/2019/09/21/fix-cors-problem/)<BR>
[[web 筆記] 初探跨來源資源共用 (CORS)](https://medium.com/@a663321765/web-%E7%AD%86%E8%A8%98-%E5%88%9D%E6%8E%A2%E8%B7%A8%E4%BE%86%E6%BA%90%E8%B3%87%E6%BA%90%E5%85%B1%E7%94%A8-cors-129e88dbca87)

