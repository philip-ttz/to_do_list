class Overlay {
    #radios;
    #add_task;
    #close_form;
    #task_form;

    constructor() {
        this.#radios = document.querySelectorAll('input[name="radio"]');
        this.#add_task = document.querySelector('.add-task');
        this.#close_form = document.querySelector('.close-form');
        this.#task_form = document.querySelector('.overlay');
    }

    initialize() {
        this.#radios.forEach(radio => {
            radio.addEventListener('click', () => {
                if (radio.checked) {
                    const selectedValue = radio.value;
                    console.log(`Selected radio button value: ${selectedValue}`);
                }
            });
        });
        this.#add_task.addEventListener('click', () => {
            this.#task_form.classList.toggle('hidden');
        });
        this.#close_form.addEventListener('click', () => {
            this.#task_form.classList.toggle('hidden');
        });
        const form = document.querySelector('.form');
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            for (var pair of formData.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
            }
            console.log(data);
            document.querySelector(".overlay").classList.toggle('hidden');
        });
    }
}

export default new Overlay();