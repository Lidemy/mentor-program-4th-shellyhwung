## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
<ol>
<li>&lt strong&gt</li>
具有語意化<b>重要</b>之意，
視覺效果上跟&lt b&gt一樣都是<b>粗體</b>，但是對於瀏覽器來說的意義不同
<li>&lt em&gt</li>  emphasize的縮寫，具有語意化<b><em>強調</b></em>之意，視覺效果上跟&lt i &gt看起來一樣都是<i>斜體</i>，但是對於瀏覽器來說的意義不同
<li>&lt cite &gt</li>標示書籍、電影或論文的註解來源
</ol>

## 請問什麼是盒模型（box modal）
![盒模型](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScmueTQkiLPdc_EinBDsRapcnh1PjAD3oIYw&usqp=CAU)</br>
HTML 裡面，每個元素都可當成是一個盒子 (如：div), 元素內可以再設定 width、heigh、padding、border、margin。
<ul>
<li>padding 內距：是指元素的內容需要和邊框保持多少距離</li>
<li>border 邊框：圍繞元素的方框</li>
<li>margin 邊界：一個方框和另外一個方框之間的距離</li>
<li>改變padding 跟 border都會影響 box 的高度寬度。假設今天想要一個 box 是 1000*100，不想要這個 box 因為調整 padding 或是 border而變大，就可以使用另外一個屬性：<b>box-sizing</b>
<pre>box-sizing: border-box </pre>這個語法可以讓 box 的寬度高度固定，減少計算的困擾
</li>
</ul>

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
<ul>
<li>display: inline</li>元素會排列在同一行，圖片或文字均不換行，設定 padding 及 margin 在排版上看不出效果。 
<li>display: block</li>每個元素會各自佔滿一整行
<li>display: inline-block</li>inline的方式呈現，但同時擁有block的屬性，所以同一行會出現不同的元素，但是這些元素又具有 block 的特性，可以設定元素的 width、height、margin、padding。
</ul>

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
<ul>
<li>position: static</li>這是 HTML 的預設值，每個元素是由上往下依序排列，在切版的時候，如果沒有特別指定語法，就會直接以position: static 的方式呈現版面。
<li>position: relative</li><b>相對定位</b>是指相對於<b>原本位置</b>的排列方式。比如說：<pre>
position: relative
top: 10px;
left: 100px;  
</pre>
用此語法，可讓方框向上移 10 px，向左移100 px
<li>position: absolute</li> 跳脫原本的排序方式，以 <b>視窗</b>或是上一層標示為<b>position: relative</b>或是<b>position: fixed</b>的元素作為定位。
<li>position: fixed</li>以<b>視窗</b>為定位點，當方框由上而下捲動時，被標記為<pre>position:fixed</pre>的元素會固定在指定的視窗位置上，不會因為欄位的捲動而消失
</ul>
