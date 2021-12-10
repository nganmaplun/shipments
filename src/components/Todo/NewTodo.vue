<template>
    <div class="container">
        <div class="row">
            <div class="col offset-md-4">
                <div class="d-flex align-items-center mb-3">
                    <div class="form-group mr-3 mb-0">
                    <input
                        ng-model="yourTask"
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder="Write new Task Name"
                        v-model="newTodo"
                    />
                    </div>
                    <button
                    type="button"
                    class="btn btn-primary mr-3"
                    @click="addTodo(newTodo)"
                    >
                    Add
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
    name: 'NewTodo',
    setup() {
        const store = useStore()
        const newTodo = ''
        const addTodo = (newTodo) => store.dispatch('addTodo', newTodo)

        return {
             newTodo,
             addTodo
        }
    }
}
</script>
<style>

</style>