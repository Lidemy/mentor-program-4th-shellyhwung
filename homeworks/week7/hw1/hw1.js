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
