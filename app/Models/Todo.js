// @ts-nocheck
export class Todo {
  constructor({ description, id, completed }) {
    this.description = description
    this.id = id
    this.completed = completed || false
  }

  get todoTemplate() {
    return `
        <div class="text-white d-flex align-items-center justify-content-between">
          <div class="mb-0">
            <b>${this.description}</b>
            <input type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.todosController.ToggleTodo('${this.id}')" >
          </div>
          <div>
            <button class="btn text-white selectable" onclick="app.todosController.deleteTodo('${this.id}')">
              <i class="mdi mdi-delete-forever"></i>
            </button>
          </div>
        </div>`


  }

}
