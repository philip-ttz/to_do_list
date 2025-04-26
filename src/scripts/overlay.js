class Overlay {
    #add_task;
    #add_project
    #close_form;
    #close_form2
    #task_form;
    #project_form;
    #currentproject;

    constructor() {
        this.#add_task = document.querySelector('.add-task');
        this.#close_form = document.querySelector('.close-form');
        this.#close_form2 = document.querySelector('.close-form2');
        this.#task_form = document.querySelector('.overlay');
        this.#add_project = document.querySelector('.add-project');
        this.#project_form = document.querySelector('.overlay_2');
        this.#currentproject = "All";
    }

    get currentproject() {
        return this.#currentproject;
    }
    set currentproject(value) {
        this.#currentproject = value;
    }

    initialize() {
        this.#add_task.addEventListener('click', () => {
            this.#task_form.classList.toggle('hidden');
        });
        this.#add_project.addEventListener('click', () => {
            this.#project_form.classList.toggle('hidden');
        });
        this.#close_form.addEventListener('click', () => {
            this.#task_form.classList.toggle('hidden');
        });
        this.#close_form2.addEventListener('click', () => {
            this.#project_form.classList.toggle('hidden');
        });
        this.update_project_overview();
    }

    update_project_overview() {
        const radios = document.querySelectorAll('input[name="radio"]');

        radios.forEach(radio => {
            radio.addEventListener('click', () => {
                if (radio.checked) {
                    const selectedValue = radio.value;
                    console.log(`Selected radio button value: ${selectedValue}`);
                    this.currentproject = selectedValue;
                    console.log(this.currentproject);
                }
                const customEvent = new CustomEvent('radioChange');
                document.dispatchEvent(customEvent);
            });
        });
    }
}

export default new Overlay();