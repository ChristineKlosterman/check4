import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js";


class TodoService {
    async getTodo() {
        let res = await sandboxApi.get('/charlie/todos')
        ProxyState.todos = res.data.map(t => new Todo(t))
    }

    async createTodo(todoFormData) {
        console.log('creating party', todoFormData);
        let res = await sandboxApi.post('/charlie/todos', todoFormData)
        let todo = new Todo(res.data)
        ProxyState.todos = [...ProxyState.todos, todo]
    }

    async deleteTodo(id) {
        let url = `/charlie/todos/${id}`
        await sandboxApi.delete(url)
        ProxyState.todos = ProxyState.todos.filter(t => t.id != id)


    }

    async ToggleTodo(todoId) {
        let todo = ProxyState.todos.find(s => s.id == todoId)

        todo.completed = !todo.completed
        let todoIndex = ProxyState.todos.indexOf(todo)
        let res = await sandboxApi.put(`/charlie/todos/${todoId}`, todo)
        let updatedTodo = new Todo(res.data)
        ProxyState.todos.splice(todoIndex, 1, updatedTodo)
        ProxyState.todos = ProxyState.todos



    }




}

export const todoService = new TodoService()