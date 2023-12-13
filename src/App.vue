<template>
    <div id="app">
        <!-- <Todos/> -->
        <router-view/>
        <!-- <todo-list v-bind:todos="todos"></todo-list> -->
        <!-- <h3 class="p-3 text-center">Vue HTTP GET Requests with Fetch</h3> -->
        <get-request/>
        <get-request-async-await/>
        <get-request-error-handling/>
        <get-request-set-headers/>
    </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
import Main from "@/pages/Main.vue";

import GetRequestAsyncAwait from "./GetRequestAsyncAwait";
import GetRequestErrorHandling from "./GetRequestErrorHandling";


export default {
        name: 'app',
        components: {
        MyButton,
        Main,
        GetRequestAsyncAwait,
        GetRequestErrorHandling,
    },
}
</script>

<style scoped>
    
</style>