// eslint-disable-next-line
alert('哈囉，歡迎報名參加新拖延運動，等等，回來啊，填完表單再拖延');

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  let hasError = false;
  const values = {};
  const elements = document.querySelectorAll('.filled');
  // eslint-disable-next-line
  for (const element of elements) {
    const radios = element.querySelectorAll('input[type=radio]');
    const input = element.querySelector('.filled input[type=text]');
    let isValid = true;
    if (input) {
      values[input.name] = input.value;
      if (!input.value) {
        isValid = false;
      }
    } else if (radios.length) {
      isValid = [...radios].some(radio => radio.checked);
      if (isValid) {
        const r = element.querySelector('input[type=radio]:checked');
        values[r.name] = r.value;
      }
    } else { // eslint-disable-next-line
      continue;
    }
    if (!isValid) {
      element.classList.remove('hide__error');
      hasError = true;
    } else {
      element.classList.add('hide__error');
    }
  }
  if (!hasError) {
    alert(JSON.stringify(values));
  }
});


/*
下面是一開始的寫法，可以得到結果，但是在最後一步跳出一個 alert 展示使用者填寫的資料時，
報名類型會出現在表單的最後面，而不是依照問題順序產生
因為程式是一行一行跑，下面的寫法是執行完 type=text 之後，
才會執行type=radio
document.querySelector('form').addEventListener('submit',(e)=> {
e.preventDefault()
let hasError = false
let values = {}
const inputs = document.querySelectorAll('.filled input[type=text]')
for (let input of inputs){
values[input.name] = input.value
//console.log(values)
if(!input.value){
input.parentNode.classList.remove('hide__error')
hasError = true
}else{
input.parentNode.classList.add('hide__error')
}
}
const options = document.querySelectorAll('.filled')
for (option of options) {
const radios = option.querySelectorAll('input[type=radio]')
//console.log(radios)
//console出來的值是 NodeList，看起來很像陣列，但其實不是陣列
//如果用陣列相關的語法(如：.map)會出錯
if(!radios.length) continue
let hasValue = [...radios].some(radio => radio.checked)
// [...radios]打散再組裝回陣列之意
// 利用 array.some 檢查有沒有 radio 被 checked
// 關於 some 的用法 https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/some
if(hasValue){
let r = option.querySelector('input[type=radio]:checked')
values[r.name]= r.value
}
if(!hasValue){
option.classList.remove('hide__error')
hasError = true
}else{
option.classList.add('hide__error')
}
}
if(!hasError){
alert(JSON.stringify(values))
}
})

*/
