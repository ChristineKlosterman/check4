
export class Quotes {
    constructor(data) {

        this.content = data.content
        this.author = data.author
    }

    get quoteTemplate() {
        return `  <div id="quotes" class="col-8 bg-light text-dark align-items-center text-center rounded">${this.content}
        <span class="on-hover bg-light text-dark rounded">${this.author}</span></div>`


    }



}

