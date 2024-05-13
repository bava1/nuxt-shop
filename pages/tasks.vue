<template>
    <section class="tasks">
        <h2 class="tasks-title">Tasks</h2>
        <div class="tasks-form input-group my-3">
            <input type="text" class="form-control" placeholder="Add your task" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class="btn btn-success" type="button" id="button-addon2">Add Task</button>
        </div>
        <div v-for="task of 5" :key="task">
            <Task :title="task"/>
        </div>
    </section>
</template>

<script setup>
import Task from '../components/Task.vue';
useHead({title:'NuxtEx tasks'})
//import { ref } from 'vue';
//import { useTasksStore } from '../store/tasks.js';
//import { storeToRefs } from '@pinia/nuxt';

//const store = useTasksStore();
//const { getTasks } = storeToRefs(store);

</script>

<style scoped>

.tasks-form {
    width: 60%;
} 
.tasks-title {
    color: #049068 !important;
}
</style>