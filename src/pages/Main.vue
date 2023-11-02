<template>
    <div>
        <div class="name">BIBA</div>
        <div class="subname">Your personal assistant</div>
        <my-button/>
        <router-view/>
    </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";

export default {
    name: 'app',
    components: {
        MyButton,
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