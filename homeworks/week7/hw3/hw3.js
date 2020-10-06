/*
助教，我想請問在 line 16 跟 line 30，
eslint 時，系統會一直跳出 prefer-destructing，
我不明白為什麼會一直建議使用解構語法
*/
document.querySelector('.btn-add').addEventListener('click', () => {
  function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
  // eslint-disable-next-line
  const value = document.querySelector('.input-todo').value;
  if (!value) return;
  const div = document.createElement('div');
  div.classList.add('todo');
  div.innerHTML = `
<input class = 'todo-checkbox' type = 'checkbox'/>
<div class = 'todo-content'>${escapeHtml(value)}</div>
<button class = 'btn-delete'>刪除</button>
`;
  document.querySelector('.todos').appendChild(div);
  document.querySelector('.input-todo').value = '';
});
document.querySelector('.todos').addEventListener('click', (e) => {
  // eslint-disable-next-line
  const target = e.target;
  // delete todo
  if (target.classList.contains('btn-delete')) {
    target.parentNode.remove();
    return;
  }
  // check/ uncheck todo
  if (target.classList.contains('todo-checkbox')) {
    if (target.checked) {
      target.parentNode.classList.add('done');
    } else {
      target.parentNode.classList.remove('done');
    }
  }
});


/*
學習重點
1. Event delegation
2.
document.querySelector(.btn-delete).addEventListener('click', ()=>{
alert('delete!')
})
這個寫法是錯誤的
(1) 因為 querySelector 只會選取到第一個元素
(2) btn-delete 是動態新增上去的，在程式剛開始執行的時候並不存在

3. appendChild
document.querySelector('.todos').appendChild(div)
document.querySelector('.todo2').appendChild(div)
假設是在同一個節點 (node)下，若是同時appendChild(div)同一個元素，那麼此元素 (這裡是div)
會產生搬移 (div 從 todos 移到 todo2)
不是同時複製兩份 div
4. 跳脫字元
https://stackoverflow.com/questions/6234773/can-i-escape-html-special-chars-in-javascript
5. 關於 flex: 1 說明好文：
https://wcc723.github.io/css/2017/07/21/css-flex/
https://wcc723.github.io/css/2020/03/08/flex-size/
https://wcc723.github.io/css/2013/10/24/css-flex-1/
*/
