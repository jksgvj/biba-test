<template>
    <div>
        <div class="name">BIBA</div>
        <div class="subname">Your personal assistant</div>
        <my-button/>
        <router-view/>
        <div class="border"></div>
        <div class="circle"></div>
        <div class="border1"></div>
        <div class="circle1"></div>
        <div class="border2"></div>
        <div class="circle2"></div>
    </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";

export default {
    name: 'app',
    components: {
        MyButton
    },

}
</script>

<style scoped>
    .circle {
        width: 720px; 
        height: 720px;
        background: #BBE7B7;
        border-radius: 50%;
        position: absolute;
        margin: auto;
        top: 500px; 
        left: -150px;
        z-index: -2;
    }

    .border {
        width: 720px; 
        height: 720px;
        border: 1px solid rgb(255, 255, 255);
        border-radius: 50%;
        position: absolute;
        top: 520px; 
        left: -170px;
        z-index: -1;
    }

    .circle1 {
        width: 300px; 
        height: 300px;
        background: #BBE7B7;
        border-radius: 50%;
        position: absolute;
        margin: auto;
        top: 200px; 
        left: -100px;
        z-index: -2;
    }

    .border1 {
        width: 300px; 
        height: 300px;
        border: 1px solid #629C5D;
        border-radius: 50%;
        position: absolute;
        top: 180px; 
        left: -120px;
        z-index: -1;
    }

    .circle2 {
        width: 150px; 
        height: 150px;
        background: #BBE7B7;
        border-radius: 50%;
        position: absolute;
        margin: auto;
        top: 320px; 
        left: 250px;
        z-index: -2;
    }

    .border2 {
        width: 150px; 
        height: 150px;
        border: 1px solid #ffffff;
        border-radius: 50%;
        position: absolute;
        top: 330px; 
        left: 240px;
        z-index: -1;
    }

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