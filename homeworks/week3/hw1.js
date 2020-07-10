// 輸入為一個數字 N，請按照規律輸出正確圖形

function stars(n) {
  let result = '';
  const star = '*';
  for (let i = 1; i <= n; i += 1) {
    result += star;
    console.log(result);
  }
}
stars(1);
stars(3);
stars(5);
stars(7);
