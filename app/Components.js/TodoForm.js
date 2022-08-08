import { Todo } from "../Models/Todo";

export function getTodoForm(house = new Todo({})) {



    let submitAction = 'app.TodoController.createTodo()'


    return ` <form class="col-4" onsubmit="${submitAction}">
        <input type="text" id="name" name="name" value="${Todo.name}">
      </form>`

}