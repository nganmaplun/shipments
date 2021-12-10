<template>
    <div>
        <input type="text" placeholder="Write your task name">
    </div>
</template>
<script>
export default {
    name: 'TodoItem',
    props: ['todo'],
    data: function() {
        return {
            todoItem: {
                taskName:'',
                status: ''
            }
        }
    }
}
</script>
<style>

</style>