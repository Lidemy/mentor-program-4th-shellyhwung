## 請以自己的話解釋 API 是什麼
API ：Application Programming Interface</br>
提供者來自四面八方，也可來自作業系統，不一定需要經由網路。</br>
有點像是，需要資料的需求方，必須依照提供資料的供應方的規範，提出一份合於規範的文件，然後拿取自己所需的資料。</br>
Web API ： 通常是指 HTTP API, 是指透過 HTTP 協定的 API
DOM 也有提供 API，只要依據提供的規範實作，就能操作 DOM 的內容、結構、樣式 

## 請找出三個課程沒教的 HTTP status code 並簡單介紹
###**521**</br>Web Server Is Down：指目標伺服器掛了。</br>
我對 521 印象深刻，因為好不容易寫完第四題，測試也都 ok，然後！最後一次的測試突然就當了，我想說怎麼可能，明明剛剛就跑得出來，難道是不小心刪到什麼嗎? 接著就是一連串無章法的測試，中間也用了大量的 console.log 想歸納出原因，到最後的最後(此時又過了三小時了)，才想到，不然看一下錯誤內容裡面到底寫了甚麼好了，然後！我自己明明就有印出 status Code，結果自己卻沒有仔細看。 Code 顯示 521，那不就是伺服器有問題嘛！馬上把連結點開來一看，果然是網頁當了 orz，因為伺服器當掉，白白浪費自己三小時 (哭)，如果一開始有仔細看內容的話，就可以灑脫的先關掉作業、等網站修好再說。真的是痛過就會學到，我以後一定會先好好仔細看訊息的提示內容@@

###**504**</br> Gateway Timeout：SERVER的服務沒有回應。</br>
###**403**</br> Forbidden：為沒有權限存取此站，伺服器收到請求但拒絕提供服務。</br>
再往下查，才發現還有更進一步的寫法。
例如：
<ul>
<li>403.1 - 禁止執行存取。</li>
<li>403.2 - 禁止讀取存取。</li>
<li>403.3 - 禁止寫入存取。</li>
</ul>
蠻有趣的，只是好像沒有真的見過


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。
Base URL: https://findRestaurant.com
<table border="1">
  <thead>
    <tr>
    <th>說明</th>
    <th>Method</th>
    <th>Path</th>
    <th>Parameter</th>
    <th>範例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>取所有餐廳資料</td>
    <td>GET</td>
    <td>/restaurants</td>
    <td>_limit:限制回傳資料數量</td>
    <td>/restaurants?_limit=10</td>
    </tr>
    <tr>
    <td>獲取排名前五名的餐廳資料</td>
    <td>GET</td>
    <td>/restaurants/scores</td>
    <td>_limit:限制回傳資料數量</td>
    <td>/restaurants/scores?_limit=5</td>
    </tr>
    <tr>
    <td>新增餐廳</td>
    <td>POST</td>
    <td>/restaurants</td>
    <td>name: 店名</td>
    <td>N/A</td>
    </tr>
    <tr>
    <td>刪除歇業餐廳</td>
    <td>DELETE</td>
    <td>/reataurants/:id</td>
    <td>N/A</td>
    <td>N/A</td>
    </tr>
    <tr>
    <td>更改餐廳資訊</td>
    <td>PATCH</td>
    <td>/restaurants/:id</td>
    <td>name: 店名</td>
    <td>N/A</td>
    </tr>
  </tbody>
