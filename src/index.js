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

const add_task = document.querySelector('.add-task');
const close_form = document.querySelector('.close-form');
const task_form = document.querySelector('.overlay');   
add_task.addEventListener('click', () => {
    task_form.classList.toggle('hidden');
});
close_form.addEventListener('click', () => {
    task_form.classList.toggle('hidden');
});