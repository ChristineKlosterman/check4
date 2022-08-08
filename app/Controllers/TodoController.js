import { ProxyState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { todoService } from "../Services/TodoService.js";

function _drawTodo() {
    let template = ''
    let todo = ProxyState.todos
    todo.forEach(t => template += t.todoTemplate)

    document.getElementById('todo').innerHTML = template
}

export class TodoController {
    constructor() {
        ProxyState.on('todos', _drawTodo)
        this.getTodo()
    }

    async getTodo() {
        try {
            await todoService.getTodo()
        } catch (error) {
            console.log('[get todos]', error);
            Pop.error(error)
        }
    }

    async createTodo() {

        try {
            window.event.preventDefault()
            let form = window.event.target
            let newTodo = {
                description: form.name.value
            }
            await todoService.createTodo(newTodo)

        } catch (error) {
            console.log('[create todo]', error);
            Pop.error(error)

        }
    }

    async ToggleTodo(todoId) {
        try {
            await todoService.ToggleTodo(todoId)
        } catch (error) {
            console.log('[toggle todo]', error);
            Pop.error(error)

        }
    }

    async deleteTodo(id) {
        try {
            const yes = await Pop.confirm('Delete Todo')
            if (!yes) { return }

            await todoService.deleteTodo(id)

        } catch (error) {
            console.log('[delete todo]', error);
            Pop.error(error)
        }
    }

}