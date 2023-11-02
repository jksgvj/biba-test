<template>
    <a class="btn" href="/">BIBA</a>
    <div class="subname">About Us</div>
    <div>
        <div class="h2">Главный создатель сайта - БИБА</div>
        <p></p>
        <div class="h3">*Контактная информация Бибы засекречена<br><br></div>
            <p></p>
        <div class="h4">В разработке сайта ему помогали:<br>
            <p></p>
        Хусаинов Эдуард<br>
        Хисымутдинова Регина</div>
    </div>
    
    <div class="rectangle text">Сайт разработан Бибой и студентами БГПУ им. М. Акмуллы в 2023 году</div>
</template>

<script>
export default{
    
}
</script>

<style>
    .btn {
        margin: auto;
        text-align: center;
        display:block;
        font: 110px "Times New Roman", sans-serif;
        color: black;
    }

    .subname {
        margin: auto;
        margin-top: -20px;
        text-align: center;
        font-size: 32px;
        font: "Fira Sans", sans-serif;
    }

    .rectangle {
        margin: 250px 0 0 0;
        width: 100%;
        height: 100px;
        background: black;
    }

    .h2 {
        margin-top: 100px;
        margin-left: 100px;
        font-size: 30px;
        font: "Fira Sans", sans-serif;
    }

    .h3 {
        margin-left: 100px;
        font-size: 20px;
        font: "Fira Sans", sans-serif;
        font-style: italic;
    }

    .h4 {
        margin-left: 100px;
        font-size: 25px;
        font: "Fira Sans", sans-serif;
    }

    .text {
        color: white;
        text-align: center;
        line-height: 100px;
        font-size: 15px;
        text-transform: uppercase;
    }
</style>