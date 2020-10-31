const apiUrl = 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery';
const errMessage = '系統不穩定，請再試一次';
// 先寫一個負責 call 抽獎 API 的 fx
function getPrize(callback) {
  const request = new XMLHttpRequest();
  request.open('GET', apiUrl, true);
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      let data;
      try {
        data = JSON.parse(request.response);
      } catch (err) {
        callback(errMessage);
        return;
      }
      if (!data.prize) {
        callback(errMessage);
        return;
      }
      callback(null, data);// 如果有錯誤的話，會把錯誤訊息放在第一個參數；正確的話，會把真正的 data 放在第二個參數
    }
  };
  request.onerror = () => {
    callback(errMessage);
  };
  request.send();
}
document.querySelector('.lottery-info__btn').addEventListener('click', () => {
  getPrize((err, data) => {
    if (err) {
      // eslint-disable-next-line
      alert(err);
      return;
    }
    const prizes = {
      FIRST: {
        className: 'first-prize',
        title: '恭喜你中頭獎了！日本東京來回雙人遊！',
      },
      SECOND: {
        className: 'second-prize',
        title: '二獎！90 吋電視一台！',
      },
      THIRD: {
        className: 'third-prize',
        title: '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！',
      },
      NONE: {
        className: 'none-prize',
        title: '銘謝惠顧',
      },
    };
    // const className = prizes[data.prize].className
    // const title = prizes[data.prize].title
    const { className, title } = prizes[data.prize];
    document.querySelector('.section-lottery').classList.add(className);
    document.querySelector('.lottery-result__title').innerText = title;
    document.querySelector('.lottery-info').classList.add('hide');
    document.querySelector('.lottery-result').classList.remove('hide');
  });
});
