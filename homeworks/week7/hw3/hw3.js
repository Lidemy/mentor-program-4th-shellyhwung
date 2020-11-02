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
  if (target.classList.contains('btn-delete')) {
    target.parentNode.remove();
    return;
  }
  if (target.classList.contains('todo-checkbox')) {
    if (target.checked) {
      target.parentNode.classList.add('done');
    } else {
      target.parentNode.classList.remove('done');
    }
  }
});
