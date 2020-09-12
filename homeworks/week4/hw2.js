/*
我一開始想得很簡單，就是一小題一小題解開 (我的原始解法在最下面)
然後要跑程式碼的時候，就用註解的方式把其他小題的程式碼屏蔽。
等到檢討的時候看到答案覺得好驚豔，原來還有這種解法，
也是拉，如果每一小題都要重開一個新檔、
或是每次都要用註解的方式把其他的程式碼屏蔽住，
這種方式也太沒效率了
還有就是，eslint真的好在乎順序
我比較喜歡 switch 放在前面的寫法，
但是會一直跳出 error
*/
const request = require('request');

const args = process.argv;
const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com';

const action = args[2];
const params = args[3];

function listBooks() {
  // eslint-disable-next-line
  request(`${API_ENDPOINT}/books?_limit=20`, (err, res, body) => {
    if (err) {
      return console.log('抓取失敗', err);
    }
    const data = JSON.parse(body);
    for (let i = 0; i < data.length; i += 1) {
      console.log(`${data[i].id} ${data[i].name}`);
    }
  });
}

function readBook(id) {
  // eslint-disable-next-line
  request(`${API_ENDPOINT}/books/${id}`, (err, res, body) => {
    if (err) {
      return console.log('抓取失敗', err);
    }
    const data = JSON.parse(body);
    console.log(data);
  });
}

function deleteBook(id) {
  // eslint-disable-next-line
  request.delete(`${API_ENDPOINT}/books/${id}`, (err, res, body) => {
    if (err) {
      return console.log('刪除失敗', err);
    }
    console.log('刪除成功！');
  });
}

function createBook(name) {
  request.post({
    url: `${API_ENDPOINT}/books`,
    form: {
      name,
    },
    // eslint-disable-next-line
  }, (err, res) => {
    if (err) {
      return console.log('新增失敗', err);
    }
    console.log('新增成功！');
  });
}

function updateBook(id, name) {
  request.patch({
    url: `${API_ENDPOINT}/books/${id}`,
    form: {
      name,
    },
    // eslint-disable-next-line
  }, (err, res) => {
    if (err) {
      return console.log('更新失敗', err);
    }
    console.log('更新成功！');
  });
}
switch (action) {
  case 'list':
    listBooks();
    break;
  case 'read':
    readBook(params);
    break;
  case 'delete':
    deleteBook(params);
    break;
  case 'create':
    createBook(params);
    break;
  case 'update':
    updateBook(params, args[4]);
    break;
  default:
    console.log('Available commands: list, read, delete, create and update');
}

/*
function listBooks() {
  request(`${API_ENDPOINT}/books?_limit=20`, (err, res, body) => {
    if (err) {
      return console.log('抓取失敗', err);
    }
    const data = JSON.parse(body);
    for (let i = 0; i < data.length; i += 1) {
      console.log(`${data[i].id} ${data[i].name}`);
    }
  });
}

function readBook(id) {
  request(`${API_ENDPOINT}/books/${id}`, (err, res, body) => {
    if (err) {
      return console.log('抓取失敗', err);
    }
    const data = JSON.parse(body);
    console.log(data)
  })
}

function deleteBook(id) {
  request.delete(`${API_ENDPOINT}/books/${id}`, (err, res, body) => {
    if (err) {
      return console.log('刪除失敗', err);
    }
    console.log('刪除成功！');
  });
}

function createBook(name) {
  request.post({
    url: `${API_ENDPOINT}/books`,
    form: {
      name,
    },
  }, (err, res) => {
    if (err) {
      return console.log('新增失敗', err);
    }
    console.log('新增成功！');
  })
}

function updateBook(id, name) {
  request.patch({
    url: `${API_ENDPOINT}/books/${id}`,
    form: {
      name,
    },
  }, (err, res) => {
    if (err) {
      return console.log('更新失敗', err);
    }
    console.log('更新成功！');
  });
}
*/

/*
// 印出前二十本書的 id 與書名
const request = require('request');
request('https://lidemy-book-store.herokuapp.com/books?_limit=20', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred 如果有錯誤的話，會把錯誤印出來
  console.log('statusCode:', response && response.statusCode);
// Print the response status code if a response was received 如果沒有錯誤的話，會把 status code 印出來
//console.log('body:', body); // Print the content for the searching homepage.印出所要搜尋的內容
  console.log(JSON.parse(body)); // 把格式轉換為較易閱讀的 js 物件格式
  let json = JSON.parse(body);
  for (i=0; i <json.length; i+=1){
console.log(`${json[i].id} ${json[i].name}`)
  }
  }
  );
*/
/*
// 輸出 id 為 1 的書籍
const request = require('request');
request.get('https://lidemy-book-store.herokuapp.com/books/1', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred 如果有錯誤的話，會把錯誤印出來
  console.log('statusCode:', response && response.statusCode);
  // Print the response status code if a response was received 如果沒有錯誤的話，會把 status code 印出來
  //console.log('body:', body); // Print the content for the searching homepage.印出所要搜尋的內容
  console.log(JSON.parse(body)); // 把格式轉換為較易閱讀的 js 物件格式
  let json = JSON.parse(body);
  console.log(json);
})
*/
/* 關於這裡，我有問題想要發問。因為想要印出類似題目1的效果【1 克雷的橋】所以打了下面 (for~) 的程式碼，但是在試跑的時候，無法印出耶
  for (let i=0; i<json.length; i<1){
console.log(`${json[i].id} ${json[i].name}`)
  }
  */
/*
  try {
json = JSON.parse(body)
  } catch (e){
console.log(`${[exception].id}: ${[exception].name}`)
  }
  }
  );
*/
/*
// 新增一本名為 I love coding 的書
const request = require ('request');
request.post(
{url: "https://lidemy-book-store.herokuapp.com/books",
form:
{
"id": 21,
    "name": "I love coding"
}},
function (error, response, body) {
console.log(JSON.parse(body));
}
);
*/
/*
// 更新 id 為 21 的書名為 new name
const request = require ('request');
request.patch(
{url: "https://lidemy-book-store.herokuapp.com/books/21",
form:
{
"id": 21,
    "name": "new name"
}},
function (error, response, body) {
console.log(JSON.parse(body));
}
);
*/
/*
// 刪除一本名為 I love coding 的書
const request = require ('request');
request.delete(
{url: "https://lidemy-book-store.herokuapp.com/books/21",
form: {
    "id": 21,
    "name": "I love coding"}},
function (error, response, body) {
console.error('error:', error); // Print the error if one occurred 如果有錯誤的話，會把錯誤印出來
console.log('statusCode:', response && response.statusCode);
// Print the response status code if a response was received 如果沒有錯誤的話，會把 status code 印出來
console.log(JSON.parse(body));
}
);
*/


/*
const request = require ('request');
const process = require ('process'); //'process' 是 Node.js 內建的模組
console.log(process.argv)
request('https://lidemy-book-store.herokuapp.com/books/21', function (error, response, body) {
console.log('body:', body);
});
*/
