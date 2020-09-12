// 這一題有些疑問打在下方，希望助教能給我一些提示或是討論，謝謝
// 命名方式參考 https://juejin.im/entry/6844903492415406088
const request = require('request');

const BASE_URL = 'https://api.twitch.tv/kraken';
const CLIENT_ID = 'v9b7l2fpmf6umuu6jkn41ju0hex882';
request({
  method: 'GET', // (1)GET 需大寫(2)這裡是逗號，一開始寫成;
  url: `${BASE_URL}/games/top`,
  headers: {
    'Client-ID': CLIENT_ID, // 這裡是逗號，一開始寫成;
    // eslint-disable-next-line
    'Accept': 'application/vnd.twitchtv.v5+json',
  }, // 下面是逗號，一開始寫成;
},
// eslint-disable-next-line
(err, res, body) => { // 參數可以隨自己的意思命名，但是！後面再提到參數的時候，要跟前面一致。不要前面用res，後面用response，這樣程式碼會出錯
  console.error('error:', err); // Print the error if one occurred 如果有錯誤的話，會把錯誤印出來
  console.log('statusCode:', res && res.statusCode); // Print the response status code if a response was received 如果沒有錯誤的話，會把 status code 印出來
  if (err) {
    return console.error('下載失敗', err);
  }
  if (!err && res.statusCode < 400) {
    const DATA = JSON.parse(body);
    // console.log(typeof (DATA));//DATA 是物件
    // console.log(DATA)// { 印出的資料像這樣→ top:[{game: [Object], viewers: 294273, channels: 3532 }]
    const topgames = DATA.top;// 指定.top 的部分(陣列裡面包裹物件)
    // console.log(typeof (topgames));//topgames 是物件
    // console.log(topgames)// { 會將原本game: [Object]的細項都列印出來 }
    /*
for(let i=0; i<10; i+=1){//這個寫法也可以，但是新語法更簡潔
console.log(`${topgames[i].viewers} ${topgames[i].game.name}`);
}
*/
    /*
 line 44 會出現以下訊息，但是我不知道該如何再簡化程式碼
 error
 iterators/generators require regenerator-runtime,
 which is too heavyweight for this guide to allow them.
 Separately, loops should be avoided in favor of array iterations
 no-restricted-syntax
*/
    // eslint-disable-next-line
    for (const game of topgames) { // 有沒有let，都可顯示答案，還不清楚原因，先把問題記錄下來
      // console.log(game.viewers + ' ' + game.game.name); 舊式語法
      console.log(`${game.viewers} ${game.game.name}`);
      // console.log(topgames.viewers + ' ' + topgames.game.name)
      /* 上面是原本的打法，但是結果會顯示 undefined，我不明白的地方有兩個，
(1)既然已經在前面用const topgames = DATA.top定義topgames，為什麼無法用topgames.viewers/topgames.game.name得到答案呢?
是不是因為 top:[{game: [Object], viewers: 294273, channels: 3532 }]，
陣列裡面包裹物件，所以要取值的時候，必須用(`${topgames[i].viewers} ${topgames[i].game.name}`)的語法?
(2)有先上網查過for in 跟 for of 的語法文章，可是我還是不懂，我卡住的地方是，
如果game of topgames的game 已經代表 JS 物件裡的 game 了， 那麼寫成game.game.name的話，感覺是多寫一層 game?
*/
    }
  }
});
