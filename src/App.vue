<template>
    <div class="name">BIBA</div>
    <div class="subname">Your personal assistant</div>
    <my-button></my-button>
</template>

<script>
import MyButton from "@/components/UI/MyButton";

export default {
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
        margin-top: -201px;
        text-align: center;
        font-size: 32px;
        font: "Fira Sans", sans-serif;
    }

    /*button{
        text-align: center;
        display: block;
        color: #000000;
        padding: 0;
        border: none;
        background: none;
        font-style: normal;
    }*/
</style>