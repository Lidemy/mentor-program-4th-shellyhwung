## hw1：好多星星
這一題就是在適應LIOJ傳檔案方式
## hw2：水仙花數
好難，分開不同時間想蠻多天的，雖然有列出類似程式碼的方式，但是寫不出來，後來是看教學影片才懂得原理。看完影片之後把檔案重新自己想過再打一次

## hw3：判斷質數
'isPrime' was used before it was defined       no-use-before-define
```
function solve(lines) {
for(let i = 1; i<lines.length; i += 1){
    if (isPrime(lines[i])) {
        console.log('Prime') 
    } else { 
        console.log('Composite')
    }
    }
    }
function isPrime(n) {
for(let i = 1; i<lines.length; i += 1){
    let i = Number(lines.length);
    const m = Number(lines[0])//表示下面共有幾個數字
    let n = Number(lines[i]);//將lines[i]轉為數字
    if (n === 1) return false;
    for (let i = 2; i < n; i +=1 ) {
        if (n % i === 0) {
            return false;
        } 
    } 
    return true;
        } 
}  
```
## hw4：判斷迴文
錯的地方很呆，程式碼的地方我是輸入true and false 不是像題目一樣True and False，結果在LIOJ上一直被判定錯,以後要小心這種小細節。以為沒差，其實是有影響的。
## hw5：聯誼順序比大小

