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

    .name {
        margin: auto;
        text-align: center;
        display:block;
        font: 110px "Times New Roman", sans-serif;
        
    }

    .subname {
        margin: auto;
        margin-top: -20px;
        text-align: center;
        font-size: 32px;
        font: "Fira Sans", sans-serif;
    }
</style>