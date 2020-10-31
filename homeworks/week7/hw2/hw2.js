document.querySelector('.faq__block').addEventListener('click', (e) => {
  const element = e.target.closest('.faq__item');
  if (element) {
    element.classList.toggle('faq__hide');
  }
});
