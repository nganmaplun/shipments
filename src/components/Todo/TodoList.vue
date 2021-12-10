<template>
      <Header/>
       <h1>Todo list</h1>
       <NewTodo/>

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="card card-white">
                        <div class="card-body">
                            <div class="todo-list">
                                <div class="todo-item d-flex" v-for="todo, index in todos" :key="index">
                                    <div class="checker ml-auto"><span>
                                        <input type="checkbox" 
                                        :value="todo.status" 
                                        v-model="todo.status" 
                                        @click="completeTodo(todo)"></span>
                                    </div>
                                    <span :class="{ doneTask: todo.status }">{{ todo.taskName }}</span>
                                    <button 
                                        type="button"
                                        class="btn btn-primary mr-3 ms-auto"
                                        @click="removeTodo(todo)">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
   
</template>
<script>
import { useStore } from 'vuex'
import NewTodo from './NewTodo.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

    
export default{
        name: 'TodoList',
        components: {
            NewTodo,
            Header,
            Footer
        },
                Header,
        setup() {
            const store = useStore()
            const todos = store.state.todos
            const removeTodo = (todo) => store.dispatch('removeTodo', todo)
            const completeTodo = (todo) => store.dispatch('completeTodo', todo)


            return {
                todos,
                removeTodo,
                completeTodo
            }
        }
       
    }
</script>
<style>
    
.todo-list {
    margin: 10px 0
}

.todo-list .todo-item {
    padding: 15px;
    margin: 5px 0;
    border-radius: 0;
    background: #f7f7f7
}

.todo-list.only-active .todo-item.complete {
    display: none
}

.todo-list.only-active .todo-item:not(.complete) {
    display: block
}

.todo-list.only-complete .todo-item:not(.complete) {
    display: none
}

.todo-list.only-complete .todo-item.complete {
    display: block
}

.todo-list .todo-item.complete span {
    text-decoration: line-through
}
.doneTask {
    text-decoration: line-through rgb(107, 5, 5);
}
.remove-todo-item {
    color: #ccc;
    visibility: hidden
}

.remove-todo-item:hover {
    color: #5f5f5f
}

.todo-item:hover .remove-todo-item {
    visibility: visible
}
div.checker {
    width: 18px;
    height: 18px
}

div.checker input,
div.checker span {
    width: 18px;
    height: 18px
}

div.checker span {
    display: -moz-inline-box;
    display: inline-block;
    zoom: 1;
    text-align: center;
    background-position: 0 -260px;
}

div.checker, div.checker input, div.checker span {
    width: 19px;
    height: 19px;
}

div.checker, div.radio, div.uploader {
    position: relative;
}

div.button, div.button *, div.checker, div.checker *, div.radio, div.radio *, div.selector, div.selector *, div.uploader, div.uploader * {
    margin: 0;
    padding: 0;
}

div.button, div.checker, div.radio, div.selector, div.uploader {
    display: -moz-inline-box;
    display: inline-block;
    zoom: 1;
    vertical-align: middle;
}

.card {
    padding: 25px;
    margin-bottom: 20px;
    border: initial;
    background: #fff;
    border-radius: calc(.15rem - 1px);
    box-shadow: 0 1px 15px rgba(0,0,0,0.04), 0 1px 6px rgba(0,0,0,0.04);
}

</style>