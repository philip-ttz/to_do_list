class Overlay {
    #radios;
    #add_task;
    #add_project
    #close_form;
    #close_form2
    #task_form;
    #project_form;

    constructor() {
        this.#radios = document.querySelectorAll('input[name="radio"]');
        this.#add_task = document.querySelector('.add-task');
        this.#close_form = document.querySelector('.close-form');
        this.#close_form2 = document.querySelector('.close-form2');
        this.#task_form = document.querySelector('.overlay');
        this.#add_project = document.querySelector('.add-project');
        this.#project_form = document.querySelector('.overlay_2');
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
        function update_projects(radio) {
            if (radio.checked) {
                const selectedValue = radio.value;
                console.log(`Selected radio button value: ${selectedValue}`);
            }
        }
        this.#radios.forEach(radio => {
            //radio.removeEventListener('click', update_projects(radio)); // Remove previous event listener
            radio.addEventListener('click', update_projects(radio));
        });
    }
}

export default new Overlay();