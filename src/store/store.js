import { createStore } from "vuex";

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
    todos: [
        {taskName: 'task1', status: true},
        {taskName: 'task2', status: false}
    ],
    newTodo: ''
}

export const store = createStore({
    state,
    getters,
    mutations,
    actions
})

export default store