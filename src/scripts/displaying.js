class Displaying {
    #main;
    #projects

    constructor() {
        this.#main = document.querySelector('main');
        this.#projects = document.querySelector('.radio-inputs');
    }

    display_project_overview(projects, currentproject){
        this.#projects.innerHTML = ''; // Clear previous project elements
        
        Object.keys(projects).forEach((project) => {
            const projectElement = document.createElement('label');
            projectElement.classList.add('radio');
            projectElement.innerHTML = `
                <input type="radio" name="radio" value="${project} ">
                <span class="name">${project}</span>
            `;
            this.#projects.appendChild(projectElement);
        });
    }
}

export default new Displaying();