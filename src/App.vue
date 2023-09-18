<template>
    <div class="name">BIBA</div>
    <div class="subname">Aesthetics for the eyes</div>
    <my-button>
        <!--<a href="#"><span></span>Task Manager <br/>
            Создайте свой профиль<br/> 
            и добавляйте<br/> 
            новые задачи в одном месте
        </a>-->
    </my-button>
    <div class="border"></div>
    <div class="circle"></div>
    <body>
        <img src="./images/screen.jpg" class="img1">
        <img src="./images/ikonka.jpg" class="img2">
    </body>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
import MyImage from "@/components/UI/MyImage";

export default {
    components: {
        MyButton,
        
    }
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

    .circle {
        width: 720px; 
        height: 720px;
        background: #D1B7E7;
        border-radius: 50%;
        position: absolute;
        top: 500px; 
        left: -150px;
        z-index: 2;
    }

    .border {
        width: 720px; 
        height: 720px;
        border: 2px solid rgb(255, 255, 255);
        border-radius: 50%;
        position: absolute;
        top: 520px; 
        left: -170px;
        z-index: 3;
    }

    .img1 {
        width: 220px;
        height: 220px;
        position: relative;
        top: -500px;
        left: 1000px;
    }

    .img2 {
        width: 220px;
        height: 220px;
        position: relative;
        top: -220px;
        left: 780px;
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