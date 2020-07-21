## hw1：好多星星
這一題就是在適應LIOJ傳檔案方式
還沒開始寫題目就在 LIOJ 的教學影片先卡關了。  
一開始一直搞不懂模板的原理，邊聽進度的課程邊想，想了快兩天，後來想說我也不懂電跟火的原理，一樣用的好好的，現在會用比較重用，所以就放棄思考模板的緣由了 (很容易放棄這樣)。我知道 Huli 在影片中有說明，不過程度不到，有聽沒懂。後來覺得，比起搞懂模板，讓自己熟悉迴圈跟判斷式更加重要，就很乾脆地放棄思考了。第三周的作業拖了好久，有些知識要追根究柢 (像是迴圈、判斷式之類的)、有些知識可以暫時適可而止以後再說，我還要好好的學習，必要的時候就要取捨一下。
## hw2：水仙花數
好難，分開不同時間想蠻多天的，雖然有列出類似程式碼的方式，但是寫不出來，後來是看教學影片才懂得原理。看完影片之後把檔案重新自己想過再打一次

## hw3：判斷質數
傳進去的參數越單純越好 (我一開始太貪心了，想把第一個代表組別的數字也傳入) (其實有點困惑，如果遇到需要傳入組別的題目該怎麼辦，如果以後遇到我就…我就再想了(好弱的結論…))
eslint 有時候會給出下面這樣的建議： (LIOJ 上面有拿到AC了)

``` 
'isPrime' was used before it was defined       no-use-before-define
```

我在檔案中先用 `eslint-disable-next-line`處理。如果依照 eslint 的規定，我把`function isPrime(n)` 移到`function solve(input)`前面的話,那在一開始就會return 然後整個程式終止。因為不處理這一塊也可以得到正確答案，所以我是先用 `// eslint-disable-next-line` 處理，我想請問助教，對於工作上執行程式時，function 順序會有影響到正確結果的輸出嗎? 然後可能是這幾天一直在想這一題有沒有可以再優化的可能，剛剛有寫出一個可以執行而且順序也是符合 eslint 的規定的程式碼 (就是把`function isPrime(n)`包到`function solve(input)`裡面),用 node.js 跟 [網站](http://www.pythontutor.com/visualize.html#mode=edit) 都可以得到正確答案，只是因為我已經在第三周的作業花太多時間了 (大概十天吧) 所以我就沒有把這段程式碼貼到作業檔案了。


    const readline = require('readline');
    const lines = [];
    const rl = readline.createInterface({
    input: process.stdin,
    });

    rl.on('line', (line) => {
    lines.push(line);
    });

    function solve(input) {
    for (let i = 1; i < input.length; i += 1) {
     const n = Number(input[i]);
    if (isPrime(n)) {
      console.log('Prime');
    } else {
      console.log('Composite');
    }
    function isPrime(n) {
    if (n === 1) return false;
    for (let i = 2; i <= n - 1; i += 1) {
    if (n % i === 0) {
      return false;
    }
    }
    return true;
    }
     }
    }
    rl.on('close', () => {
    solve(lines);
    }); 
    

## hw4：判斷迴文
錯的地方很呆，程式碼的地方我是輸入true and false 不是像題目一樣True and False，結果在LIOJ上一直被判定錯,以後要小心這種小細節。以為沒差，其實是有影響的。
## hw5：聯誼順序比大小
這一題也是解了好久解不出來，後來爬文看到先前有同學是採用BigInt才解出來
