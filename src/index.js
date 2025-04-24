import './styles/index.css';

const radios = document.querySelectorAll('input[name="radio"]');
radios.forEach(radio => {
  radio.addEventListener('click', () => {
    if (radio.checked) {
      const selectedValue = radio.value;
      console.log(`Selected radio button value: ${selectedValue}`);
      }
  });
});
