<template>
    <a class="btn" href="/">B<span class="t">&</span>B</a>
    <div class="subname">Task Manager</div>
    <div class="rectangle-block">
        <center>B&B</center>
        <p>
            Описание проекта:
            Первый помощник
            в проектах, включает
            в себя такие функции
            как: туду и 
            мессенджер.
        </p>
    </div>
    <div class="rectangle-block1">
        <center>Густав</center>
        <p>
            Описание проекта:
            Высокоразвитый бот,
            включающий в себя
            большое количество
            функций, что делает
            его единственным и 
            не имеющим 
            аналогов.
        </p>
    </div>
    <div class="rectangle-block2">
        <button class="new">Новый проект</button>
    </div>
    <div class="rectangle-block3">
        <button class="new">Новый проект</button>
    </div>
</template>

<script>

export default {
    methods: fetch("http://localhost:8001/create", {}).then((data) => console.log(data))
    
}
</script>

<style scoped>
    .btn {
        margin: auto;
        width: 300px;
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

    .rectangle-block {
        width:250px;
        height:500px;
        padding:30px 20px;
        background:#BBE7B7;
        border: 1px solid;
        color:#000;
        text-align:left;
        font-size:20px;
        line-height:1.8; 
        margin:50px 0 0 90px; 
        border-radius: 15px;
    }

    .rectangle-block1 {
        width:250px; 
        height:500px;
        padding:30px 20px;
        background:#BBE7B7; 
        border: 1px solid;
        color:#000; 
        text-align:left;
        font-size:20px;
        line-height:1.8; 
        margin:-562px 0 0 440px;
        border-radius: 15px;
    }

    .rectangle-block2 {
        width:250px;
        height:500px;
        padding:30px 20px; 
        background:#BBE7B7;
        border: 1px solid;
        color:#000; 
        text-align:left; 
        font-size:20px;
        line-height:1.8;
        margin:-562px 0 0 790px; 
        border-radius: 15px;
    }

    .rectangle-block3 {
        width:250px; 
        height:500px;
        padding:30px 20px; 
        background:#BBE7B7; 
        border: 1px solid;
        color:#000; 
        text-align:left;
        font-size:20px;
        line-height:1.8;
        margin:-562px 0 0 1140px; 
        border-radius: 15px;
    }

    .new{
        background-color: #629C5D;
        font-size: 20px;
        display: block;
        margin: 0 auto;
        border-radius: 15px;
        color: white;
        width: 160px;
        height: 40px;
    }
</style>