
export class Author {
    constructor(data) {
        this.author = data.author

    }


    get authorTemplate() {
        return `
        <span class="bg-light text-dark">${this.author}</span>`
    }
}