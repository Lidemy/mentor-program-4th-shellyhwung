## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫
加密可以還原， HASH 不行<br>
加密是一對一，如果被破解，可以拿帳號跟密碼到各大網站去嘗試，造成使用者更大的資安危險<br>
HASH 是多對一， Sever 端可以存取到的不是密碼，而是 HASH 過後的隨機排列字串，所以就連 Server 端都不知道使用者的密碼。當使用者要登入時， Server 端是把輸入的密碼先 HASH 再比對是否與儲存的資料相符。 就算 SEVER端被駭客攻擊，駭客拿到一連串的亂碼也難以逆推回使用者正確的密碼，造成的資安問題也較小<br>
1. 加密可逆，雜湊不可逆：可逆與不可逆的原因也是一對一 VS 多對一 的原理<br>
2. 加密只要有金鑰就可還原，雜湊則不能<br>
3. 雜湊不是加密。<br>

## `include`、`require`、`include_once`、`require_once` 的差別


1. `include` 和 `require` 都可以引入外部文件並且執行外部文件內的程式碼，差別在於，如果由外部引入的文件內容有誤的話，include 會繼續執行後面的程式碼，但是 require 會停止執行。<br>


2. 
`require()` 通常来導入静態的内容，而 `include()` 適合用於動態網頁，比如說，如果所寫的程式碼是動態抓取後端資料再顯示到前台的話，就適合使用 `include()`。<br>
3. <?php include 'no.php';<br> 
echo '123';<br> 
?><br>
執行上述程式碼的時候，經由`include` 引入一個不存在的 php 檔案，並且 echo `123`<br>因為碰到錯誤 (要求引入不存在的檔案)，會給出下面的提示，並**繼續**運行後續的程式碼，echo 出 123。<br>
> Warning: include(no.php): failed to open stream: No such file or directory in C:\xampp\htdocs\shelly\test.php on line 1

> Warning: include(): Failed opening 'no.php' for inclusion (include_path='C:\xampp\php\PEAR') in C:\xampp\htdocs\shelly\test.php on line 1
123

4. <?php require 'no.php';<br> 
echo '123';<br> 
?><br>
執行上述程式碼的時候，經由`require` 引入一個不存在的 php 檔案，並且 echo `123`<br>因為碰到錯誤 (要求引入不存在的檔案)，會給出提示，並**停止**運行後續的程式碼。
> Warning: require(no.php): failed to open stream: No such file or directory in C:\xampp\htdocs\shelly\test.php on line 1

> Fatal error: require(): Failed opening required 'no.php' (include_path='C:\xampp\php\PEAR') in C:\xampp\htdocs\shelly\test.php on line 1


參考資料：<br>
* [PHP函數include include_once require和require_once的區別](https://kknews.cc/code/5rxmlb6.html)<br>
* [PHP中include和require的區別詳解](https://kknews.cc/code/aglqzej.html)

## 請說明 SQL Injection 的攻擊原理以及防範方法
**攻擊原理**- 類似 Cross-Site scripting，只是 SQL Injection 是針對 SQL。<br>
利用符號、字串等插入 SQL QUERY 中<br>
一個 INSERT INTO 其實可以塞入多筆資料，利用字串拼接的方式，可以偽造他人身分發言<br>

    insert into comments(nickname, content) 
    values("%s", "%s")
上面的語法是原始、正常的語法。 **content** 的內容是能夠由使用者掌控的<br>
 
    insert into comments(nickname, content) 
    values("%s", "%s"), ("%s", "%s")
    
    insert into comments(nickname, content) 
    values("aaa",""),("admin", "test")
    
    content:"),("admin", "test 

上述利用字串拼接的方式，可以模仿/ 偽造他人身分發言<br>

    insert into comments(nickname, content) values("aaa",(select password from users limit 1))
這樣能把其他人的密碼從資料庫撈出並顯示在留言板上<br>


    insert into comments(nickname, content) 
    values("%s", "%s"), ("%s", "%s")
    
    insert into comments(nickname, content) 
    values("aaa",""),("admin", "test")
    
    content:"),("admin", "test 
    
    
    content:"),("admin", (select password from users where id = 23))#

這樣能夠以**留言**的方式取得 **id = 23** 的密碼<br>
* INSERT INTO 的內容可以是　SELECT 的內容，類似 SUBQUERY 的概念，一個 QUERY 裡面可以有其他 QUERY。<br>
* 把上面這一整串填入留言框內，就可以得到密碼<br>

    select * from users where username = "" or 1=1# 
    
上面的語法中，**`#`** 後面會被判讀為註解，所以 **`#`** 不論放什麼都不會影響到語法結果。這樣的寫法會被判斷為真 (因為 or ，兩者間只要有一事為真就為真，1=1永遠為真)，就能把資料庫中的資料全部撈出來 (包含帳號、密碼、留言等等)<br>

**防範方法**：<br>
**只要是 user 可以自己控制輸入的地方，都要記得使用。**<br>
1. 用 mySQL 本身內建的機制做字串拼接，這樣就不會被解讀成指令 (類似前面的 XSS 用 HTML escape)<br>
2. [Prepared Statements](https://www.php.net/manual/en/mysqli.quickstart.prepared-statements.php)<br>
3.範例：<br>

    $sql = 'update users set nickname = ? where username = ?';
    $stmt = $conn -> prepare($sql);
    $stmt -> bind_param('ss', $nickname, $username);
    $result = $stmt->execute();
    if (!$result){
    	die($conn->error);//看看有無執行成功 
    } 
    $result = $stmt->get_result();//執行成功之後，如果要把結果取出，需要再加上這行程式碼



##  請說明 XSS 的攻擊原理以及防範方法
Cross-Site scripting - 跨站 (在別人的網站上)執行 JS<br>
攻擊原理 - 在可以輸入 string 的地方輸入程式碼達到特定效果，例如：<br>
1. 註冊頁面的 帳號、暱稱、密碼<br>
2. 留言頁面的留言框<br>
輸入的內容可以像是：<br>

    <h1>我只是想出現 h1 tag</h1>
如果沒有處理的話， user 在顯示頁面上看到的會是 h1 字體大小的　**我只是想出現 h1 tag**　這行字 <br>
又或者是輸入<br>

    <script>document.cookie</script>
結果就可以取得 user 的 cookie，取得 cookie 代表可以取的許多資料，以下內容引用自胡立的課程
> Cookie 是個儲存在瀏覽器的小型文字檔案，在 HTTP 這層 Server 可以透過 Set-Cookie 這個 response header 來讓瀏覽器儲存相對應的 Cookie。而瀏覽器發送 Request 時，會把相對應的 Cookie 放在 Cookie 這個 Header，Server 就可以拿到資料。
> 「相對應的」指的是每一個 Cookie 都有一些選項可以設置，要符合條件才能寫入以及傳送，例如說你無法寫入其他 domain 的 cookie。
> Cookie 的本質就是儲存資料，而其中一個重點就是伺服器可以把資料寫在 Cookie，瀏覽器也會幫使用者把 Cookie 帶給伺服器。而瀏覽器會經由 cookie 所帶的 session-ID 來判斷使用者的身分，因此身份驗證是 cookie 其中的用途之一。

由上述可以得知，如果沒有適當的防範，使用者可以在輸入字串的欄位，經由特定字串取得他人的 cookie, 一旦取得他人的 cookie，就能取得他人的 session-ID。<br>
防範方式：<br>
使用 PHP 內建 function 即可<br>
**只要是 user 可以自己控制輸入的地方，都要記得使用。**<br>
[htmlspecialchars](https://www.php.net/manual/zh/function.htmlspecialchars)<br>
[PHP htmlspecialchars 函數功能與用法](https://www.webtech.tw/info.php?tid=PHP_htmlspecialchars_%E5%87%BD%E6%95%B8%E5%8A%9F%E8%83%BD%E8%88%87%E7%94%A8%E6%B3%95)
## 請說明 CSRF 的攻擊原理以及防範方法
CSRF 是一種 Web 上的攻擊手法，全稱是 Cross Site Request Forgery，跨站請求偽造，又稱作 one-click attack。使用者可能在不知情的情形點擊網頁按鈕，因為瀏覽器的運行機制，除了發送一個 GET 請求還會一併把使用者的 cookie 都一起帶上去。如果此時使用者是登入狀態，那這個 request 就包含了他的資訊（比如說 session id），這 request 看起來就像是使用者本人發出的。


防禦方法：<br>

(一)、使用者的防禦：<br>
很簡單，每次使用完網站就登出。<br>

(二)、Server 的防禦：<br>
1.	檢查 Referer<br>
檢查request 的 header 裡面的 referer 是不是合法的 domain<br>
2.	加上圖形驗證碼、簡訊驗證碼等等<br>
就跟網路銀行轉帳的時候一樣，都會要你收簡訊驗證碼，多了這一道檢查就可以確保不會被 CSRF 攻擊。<br>
3.	加上 CSRF token，把產生的 token 存放在 server 裡<br>
接下來的方法是，Double Submit Cookie 。Double Submit Cookie 靠的核心概念是：「攻擊者的沒辦法讀寫目標網站的 cookie，所以 request 的 csrf token 會跟 cookie 內的不一樣」<br>
4.	Double Submit Cookie<br>
由 server 產生一組隨機的 token 並且加在 form 上面，同時也讓 client side 設定一個名叫 csrftoken 的 cookie，token 和 csrftoken兩者的數值相等。<br>
當使用者按下 submit 的時候，server 比對 cookie 內的 csrftoken 與 form 裡面的 csrftoken，檢查是否有值並且相等，就知道是不是使用者發的了。<br>
5.	client side 的 Double Submit Cookie<br>
由 client side 來產生 csrf token，生成之後放到 form 裡面以及寫到 cookie，也可以把這資訊直接放到 request header，這樣就不需要每個表單都做重複的事情。。<br>

(三)、browser 本身的防禦：SameSite cookie<br>


參考資料：[讓我們來談談 CSRF](https://blog.techbridge.cc/2017/02/25/csrf-introduction/)

