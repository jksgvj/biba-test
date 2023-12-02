<template>
    <div id="app">
        <Todos/>
        <router-view/>
        <todo-list v-bind:todos="todos"></todo-list>
    </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
import Main from "@/pages/Main.vue";
import { onMounted } from '@vue/runtime-core'
  import Todos from './components/Todos/Todos.vue'

export default {
        name: 'app',
        components: {
        MyButton,
        Main,
        Todos
    },
    stup(){
      onMounted(() => {
        console.log(" b m");
      })
    }
}
</script>

<style scoped>
    
</style>