## 什麼是 DOM？
1. DOM = Document Object Model 文件物件模型 
2. DOM 是把在 HTML 寫的 Document (就是那些一大堆令人眼花撩亂的標籤) 轉換成 Object，轉換成 Object 之後，才可以用 JS 操作。DOM 是瀏覽器提供的橋樑，讓 JS 可以透過 DOM ，進而改變 HTML 的元素作用，使瀏覽器上的畫面產生改變，簡單來說，就是用 JS 來操作畫面上的 HTML 元素
3. 在 HTML 的文件下，經由每一個標籤(如：div、 a、 span、 p)搭配 與 CSS配合使用的自行命名的 class，每一個元素都可以視為一個獨特的節點 (node),只要搭配適當的語法，就能抓取出正確的節點，並與 JS 併用，產生更多的功能 (目前我覺得最有趣的，就是在表單內，按下按鈕後，就能是在指定的 parentNode 下動態產生新的 div)
4. `getElementById()-->Element 是單數，因為 Id 只會有一個`
   `getElementsByClassName()`<br> 
   `getElementsByTagName()`<br>
   `getElementsByName()`<br>
   `querySelector()`<br>
   `querySelectorAll()`<br>
(1) 這些 functions 都是放在 document 上面，因此開始寫程式碼的時候會以 document 開頭document 是瀏覽器提供的特殊物件。<br>
(2) const element = document.getElementsByTagName('div')<br>
(3) 例：getElementsByTagName() 輸入 HTML 裡面的標籤可提取到該標籤內的內容<br>
(4) `<script src="./hw1.js"></script>` 或是用 `<script> </script>` 包起來的 JS 語法，所放置的位置會影響程式執行結果。因為程式是 由上而下，一行一行跑，瀏覽器的解析也是由上而下，一行一行跑，如果放在前面的話，可能會影響到最後解析的結果。<br>
(5) `getElementsByClassName()`，()內直接寫className即可，不需使用 .className 的寫法<br>
(6)` document.querySelector` 與` document.querySelectorAll` 是目前最常用的語法。Selector 指的就是「CSS 選擇器」 (CSS Selectors)。 **document.querySelectorAll** 回傳的是一個 NodeList，嚴格說起來不是陣列，但是可以當成陣列使用<br>
(7) 需要注意的是，
如果要選取的是 CSS 的 id，那麼就是`document.querySelector('#id名稱')`<br>
如果要選取的是 CSS 的標籤，那麼就是`document.querySelector('div')`<br>
如果要選取的是 CSS 的 class，那麼就是`document.querySelector('.class名稱')`<br>
如果要選取的是 CSS 的標籤再往下一層的`<p>`，那麼就是`document.querySelector('div > p')`<br>
`querySelector` 只會回傳匹配到的第一個元素，所以，如果要選取 HTML 裡面的所有` <div> `就要寫成`document.querySelectorAll(‘div’)`<br>
補充說明`querySelector` ： 後面接的是 css 的選擇器，只會回傳匹配到的第一個元素<br>
`document.querySelector('#id_name')`<br>
`document.querySelector('div')` 如果同時有很多個 div,只會針對第一個選取到的 div 產生作用<br>
`document.querySelector('.class_name')`<br>
`document.querySelector('div > a')` div 下一層的 a 節點<br>

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
參考文章：<br>[DOM 的事件傳遞機制：捕獲與冒泡](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/)<br>
[捕獲與冒泡](https://medium.com/itsems-frontend/javascript-event-bubbling-capturing-794cd2d01e61)<br>
1. 事件傳遞機制的順序：捕獲-> 目標-> 冒泡<br>
2. 先捕獲，再冒泡<br>
- 捕獲： 事件 (如：click) 發生時，會由 window 開始往下傳，稱為`CAPTURING_PHASE`<br>
- 目標：傳遞到事件本身的時候，稱為 `AT_TARGET`<br>
- 冒泡：循著原路回去的過程，就是冒泡階段 `BUBBLING_PHASE`<br>
3. 想要替 DOM 加上一個 Listener (如：click) 的時候，可以自行決定要放在捕獲階段或是冒泡階段。<br>
4. addEventListener 這個函數有三個變數：<br>
- 第一個是 Listener (如： click)、<br>
- 第二個是想要事件被觸發時執行的行為 (如： `console.log ("hello world")`)、<br>
- 第三個變數可寫可不寫：<br>
(1) 如果填 `false` 或是沒有填，那就是將 listener 加到冒泡階段<br>
(2) 如果填 `true` 代表把這個 listener 添加到捕獲階段<br>
(3) 無論有沒有加上第三個變數 (true/ false) 都會發生事件傳遞,加上第三個變數的目的是指定要在哪一個地方發生，不是改變原本事件傳遞的流程<br>

## 什麼是 event delegation，為什麼我們需要它？
1. 這個功能是我目前覺得最有趣 (也最不拿手) 的功能。
2. 這個機制可以與事件傳遞機制合併使用，運用事件 (ex: click/ keydown/ submit) 會冒泡到最上層的原理，搭配 callback function，在指定的元素加上 addEventListener 就能處理後續的事件，最方便的地方在於，只要程式碼寫好，即使是動態新增的按鈕 (button) 或是標籤 (div)也都能有相對應的反應。
3. 可以使程式碼的較為簡潔，例如，如果一份 html 的表單中有 100 個按鈕，只需在 parentNode 上面加上程式碼，而不需要在每一個按鈕中都寫上相同的程式碼。
4. 可以增加程式碼的機動性，如同第二點所述，event delegation 也可應用於動態新增的按鈕或是功能上
5. 實作的方法，是將事件 (ex: click/ keydown/ submit) 綁定在 parentNode 上，同時將希望事件發生後所產生的行為寫在 function 中並藉由 event bubbling 的原理實現

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
**event.preventDefault()**<br>
1. 防止預設行為發生<br>
2. 假設今天有一張登入表單，上面有**輸入密碼** 及**確認密碼** 兩個欄位，如果希望使用者填寫完成這兩個欄位並且兩個欄位的密碼都是相同時，才將表單送出的話，就可以經由`event.preventDefault()`達成。<br>
3. `const element = document.querySelector('.login-form')`
    `element.addEventListener('submit', function(e){`
    `const input1 = document.querySelector('input[name=password]')`
    `const input2 = document.querySelector('input[name=password2]')`
    `if (input1.value !== input2.value){`
    `alert('密碼輸入錯誤')`
    `e.preventDefault()`
    `} alert('資料已送出')`
    `});` <br>
4. 上述的程式碼中，若是密碼不相同，那麼預設的**送出表單**的行為就不會被執行<br>
5. 很重要的一點是，阻止預設行為並**沒有**停止事件傳遞
<hr>
**event.stopPropagation()**<br>
1. 阻止事件繼續傳遞<br>
2. 加在哪邊，事件的傳遞就斷在哪裡，不會繼續往下傳遞<br>
3. 需要留心的是，雖然事件傳遞被終止了，但僅是停止執行傳遞到**下一個節點**，如果在執行`event.stopPropagation()`的同一層級上面還有其他的 listener,那麼其他的 listener 還是會被執行<br>
4. 如果希望同一層級上面其他的 listener 也同時停止傳遞，需要的指令是 `event.stopImmediatePropagation`