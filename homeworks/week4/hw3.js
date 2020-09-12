const request = require('request');

const source = 'https://restcountries.eu/rest/v2';
const process = require('process'); // node.js 內建模組，process.argv 可將欲查詢的項目當成參數帶入，有這個模組，就可以在 terminal 直接輸入想查詢的資料

const country = process.argv[2];
console.log(process.argv);
if (!country) {
  console.log('請輸入國家名稱');
}
// eslint-disable-next-line
request(`${source}/name/${country}`, (error, response, body) => { // 反引號不是單引號
  console.error('error:', error); // Print the error if one occurred 如果有錯誤的話，會把錯誤印出來
  // console.log('statusCode:', response && response.statusCode);
  // Print the response status code if a response was received 如果沒有錯誤的話，會把 status code 印出來

  if (error) {
    return console.log('資料輸入失敗');
  }
  const code = response.statusCode;
  if (code >= 400 && code < 600) {
    // 這裡一開始的條件設定是code >= 400 && code < 500，結果用亂碼試跑的時候，statusCode是521，無法如預期印出'找不到國家資訊'
    return console.log('找不到國家資訊');
  }
  if (code >= 200 && code < 400) {
    const output = JSON.parse(body);
    for (let i = 0; i < output.length; i += 1) {
      console.log('============');
      console.log(`國家：${output[i].name}`);
      console.log(`首都：${output[i].capital}`);
      console.log(`貨幣：${output[i].currencies[0].code}`);
      console.log(`國碼：${output[i].callingCodes[0]}`);
    }
  }
});

/*
這是我原先的程式碼，如果鍵入【tai】搜尋，只會得到一筆資料，後來才想到，output[0] 這樣的寫法會導致只列出第一筆的搜尋結果
if (code >= 200 && code <400){
let output = JSON.parse(body);// 把 json 格式轉換為較易閱讀的 js 物件格式
//console.log(JSON.parse(body));
console.log('============')
console.log('國家：'+ output[0].name);
console.log('首都：' + output[0].capital);
console.log('貨幣：' + output[0].currencies[0].code);
console.log('國碼：' + output[0].callingCodes);
  }
  */

/*
const request = require('request');
const source = 'https://restcountries.eu/rest/v2/all?fields=name;capital;currency;callingcode'
const process = require ('process'); //node.js 內建模組，process.argv 可將欲查詢的項目當成參數帶入參數
console.log(process.argv);
request('https://restcountries.eu/rest/v2/alpha?', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred 如果有錯誤的話，會把錯誤印出來
  console.log('statusCode:', response && response.statusCode);
  // Print the response status code if a response was received 如果沒有錯誤的話，會把 status code 印出來
  console.log('body:', body); // Print the content for the searching homepage.印出所要搜尋的內容
  console.log(JSON.parse(body)); // 把格式轉換為較易閱讀的 js 物件格式
  }
  );
 */
