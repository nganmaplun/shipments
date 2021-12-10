export default {
    addTodo(state, newTodo){
        state.todos.push({
            taskName: newTodo,
            status: false
        })
    },
    editTodo(state, todo) {
        var todos = state.todos
        todos.splice(todos.indexOf(todo), 1)
        state.todos = todos
        state.newTodo = todo.taskName
    },
    removeTodo(state, todo) { 
        var todos = state.todos
        todos.splice(todos.indexOf(todo), 1)
        
    },
    completeTodo(state, todo) {
        todo.status = !todo.status
    }
}