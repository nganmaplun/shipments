export default {
    getTodo({commit}, todo) {
        commit('getTodo', todo)
    },
    addTodo({commit}, newTodo) {
        commit('addTodo', newTodo)
    },
    editTodo({commit}, todo) {
        commit('editTodo', todo)
    },
    removeTodo({commit}, todo) {
        commit('removeTodo', todo)
    },
    completeTodo({commit}, todo) {
        commit('completeTodo', todo)
    }
}