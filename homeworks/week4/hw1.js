const request = require('request');

request('https://lidemy-book-store.herokuapp.com/books?_limit=10', (error, response, body) => {
  console.error('error:', error); // Print the error if one occurred 如果有錯誤的話，會把錯誤印出來
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 如果沒有錯誤的話，會把 status code 印出來
  /* console.log('body:', body); // Print the content for the searching homepage.印出所要搜尋的內容
   console.log(JSON.parse(body));
   把格式轉換為較易閱讀的 js 物件格式 ，一開始串接成功就去寫下一題了，後來看了作業檢討才注意到輸出格式的問題 (for 語法是後來才加的) */
  let json; // try catch 是看到作業檢討才知道的語法
  try {
    json = JSON.parse(body);
  } catch (e) {
    // eslint-disable-next-line
    console.log(`${[exception].id}: ${[exception].name}`);// 請問助教，這一段如果是這樣寫可以嗎?
  }
  for (let i = 0; i < json.length; i += 1) {
    console.log(`${json[i].id} ${json[i].name}`);
  }
},
// line 22 一直顯示 function-paren-newline，這個無法改，所以 disable
// eslint-disable-next-line
);

/* 老師提供的範本
const request = require('request');
const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com';

request(`${API_ENDPOINT}/books?_limit=10`, (err, res, body) => {
  if (err) {
    return console.log('抓取失敗', err);
  }
  let data
  try {
    data = JSON.parse(body);
  } catch(err) {
    console.log(err);
    return
  }
  for (let i = 0; i < data.length; i += 1) {
    console.log(`${data[i].id} ${data[i].name}`);
  }
})
*/
