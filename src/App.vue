<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
import Main from "@/pages/Main.vue";

export default {
    name: 'app',
    components: { 
        MyButton,
        Main
    },

}
</script>

<style scoped>
    
</style>