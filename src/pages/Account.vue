<template>
    <a class="btn" href="/">B<span class="t">&</span>B</a>
    <div class="subname">Account</div>
    <img class="avatar" src="@/assets/avatar.jpg">
    <div class="nik">jksgvj</div>
    <div class="id">ID: 6d7cb5da-71c6-4e00-a3c0-705faa65b5eb</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
     .btn {
        margin: auto;
        width: 300px;
        text-align: center;
        display: block;
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

    .avatar {
        width: 200px; 
        height: 200px;
        background: white;
        border-radius: 50%;
        position: absolute;
        /* border: 1px solid black; */
        top: 230px; 
        left: 270px;
        box-shadow: 0 0 10px #444;
    }

    .nik {
        color:black;
        font: 30px "Fira Sans", sans-serif;
        margin: 90px 0 0 550px;
    }

    .id {
        color:black;
        font: 20px "Fira Sans", sans-serif;
        margin: 10px 0 0 550px;
    }

</style>