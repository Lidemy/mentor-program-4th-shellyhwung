## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
TEXT：不設定長度，如果不確定屬性最大長度時，適合用 text<br>
VARCHAR：<br>
可以變更長度<br>
可以指定儲存長度，當實際長度與預設不符時，會以空格填補。<br>
在知道資料長度的狀況下，可以使用 VARCHAR<br>
查詢資料時的速度，VARCHAR 比較快，如果可以的話， VARCHAR 會是較佳的選擇。


## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
1. Cookie 是網站伺服器存在客戶端 (瀏覽器) 的小型文字資料檔案。<br>
1. 需要 Cookie 的原因，是因為 HTTP Protocol 本身是無狀態性 (stateless) 的，這樣的特性使得每個頁面彼此間沒有相互關聯。以本周的留言板作業為例，註冊是一個頁面、登入是一個頁面、留言送出後又是另外一個頁面，每個 Request 都是單獨的，而 Cookie 是網站伺服器儲存在使用者瀏覽器中的一部分資訊，使用 Cookie 就可以紀錄 HTTP 狀態。因此伺服器將 Cookie 存在瀏覽器上，用以辨識這些請求是不是同一個人發出來的。
1. 建立與使用 Cookie：<br>
瀏覽器發出一個 HTTP request 給 Server ，Server 可以傳送一個 Set-Cookie 的 response header， 連同 response 一併傳回給瀏覽器，之後把 Cookie 存於瀏覽器中;可以註明 Cookie 的有效或終止時間 (比如說一小時、一天或是一個月)，超過時間後 Cookie 將不再發送。此外，也可以限制 Cookie 不傳送到特定的網域或路徑。當需要再度訪問同個網頁時，瀏覽器會把符合以下條件：<br>
(1) 沒有過期<br>(2) 位在同個 domain 下<br> 
符合上述兩個條件的 Cookie 隨著 request 被放在 HTTP header 內，一起被發出去，傳給同個伺服器。伺服器認得這個 Cookie 就能記住使用者的資訊。cookie 會跟著 request 一起被發出去，也會跟著 response 回來，瀏覽器可以透過 cookie 裡的資訊來確認 request 和 response 是不是同一位使用者的，藉此機制讓 HTTP 保持在狀態內 (stateful)。
補充：<br>
使用 set-Cookie 可以設定 Cookie 或者直接使用 Cookie<br>
簡單來說，就是瀏覽器發送 Request 給 Server，Server 要求瀏覽器設定 Cookie<br>
基於安全性的考量，fb 只能發送 fb 的 cookie 給 fb  使用者，IG 只能發送 IG 的 cookie 給 IG。不同的 Server 之間的 cookie 不能互相干擾。

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
1. 任何可以填入字串的地方，都有可能被竄改<br>
像是在註冊時的 username/ nickname/ password/ content 都需小心。<br>
2. 密碼沒有經過加密處理。密碼直接顯示在資料庫中，如果被駭客入侵資料庫，會讓使用者的個資流失<br>
3. 帳號密碼沒有限定輸入類型，中文跟一些特殊符號都可以註冊且登入成功，可能會有問題。<br>
<hr>
參考資料：<br>
[資料型態 char varchar nchar nvarchar](https://ithelp.ithome.com.tw/articles/10213922)

