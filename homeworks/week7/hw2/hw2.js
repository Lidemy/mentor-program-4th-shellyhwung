document.querySelector('.faq__block').addEventListener('click', (e) => {
  const element = e.target.closest('.faq__item');
  if (element) {
    element.classList.toggle('faq__hide');
  }
});

/*
利用
.faq__hide {
height: 16px;
overflow: hidden;
}
搭配 toggle 的功能達到畫面縮放的效果
*/

/*
e.target 和 e.currentTarget 的差異
e.target 會顯示滑鼠所點到的元素
e.currentTarget 會顯示加上 addEventListener 的元素
*/

/*
document.querySelector('.faq__block').addEventListener('click', function(e){
const element = e.target.closest('.faq__item')
if (e.target.tagname.toLowerCase() === 'h2'){console.log('123')
}
})

//加上 toLowerCase 是因為此處的 tagname 為 h2，但是有時候回傳時會變成 H2
*/
