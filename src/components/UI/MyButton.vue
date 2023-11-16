<template>
    <body>
      <slot></slot>
      <div class="container">
        <div class="row cf">
            <div class="six col">
              <a href="/manager" class="manager" id="button-5">Task Manager<br><br>
                  Создайте свой профиль
                  и добавляйте<br> 
                  новые задачи в одном месте
              </a>
            </div>
        </div>
          <div class="row cf">
            <div class="six col">
              <a href="/messenger" class="messenger" id="button-5">Messenger<br><br>
                  Переписывайтесь с друзьями<br> 
                  и обсуждайте проекты вместе
              </a>
            </div>
          </div>
          <div class="row cf">
            <div class="six col">
              <a href="/music" class="music" id="button-5">Music<br><br>
                  Слушайте вашу любимую музыку,<br>
                  пока обсуждаете проекты
              </a>
            </div>
          </div>
          <div class="row cf">
            <div class="six col">
              <a href="/registration" class="registration" id="button-5">Registration<br><br>
                  Создайте свой уникальный профиль
              </a>
            </div>
          </div>
          <div class="row cf">
            <div class="six col">
              <a href="/aboutus" class="aboutus" id="button-5">О нас</a>
            </div>
          </div>
      </div>
    </body>
</template>

<script>
export default {

}
</script>

<style>

    html, body{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    }

    a{
    text-decoration: none;
    }

    .five { width: 40.73%; }

    .col {
    display: block;
    float:left;
    margin: 1% 0 1% 1.6%;
    }

    .col:first-of-type {
    margin-left: 0;
    }

    .container{
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    text-align: center;
    }

    /* CLEARFIX */

    .cf:before,
    .cf:after {
        content: " ";
        display: table;
    }

    .cf:after {
        clear: both;
    }

    .cf {
        zoom: 1;
    }

    /* ALL BUTTONS */

    .manager{
    display: inline-block;
    padding: 20px 50px;
    margin: 10px 10px;
    position: relative;
    color: #ecf0f1;
    left: -250px;
    top: 100px;
    text-align: left;
    z-index: 2;
    }

    .messenger{
    display: inline-block;
    padding: 20px 50px;
    margin: 10px 10px;
    position: relative;
    color: #ecf0f1;
    left: 400px;
    top: -80px;
    text-align: left;
    z-index: 4;
    }

    .music{
    display: inline-block;
    padding: 20px 50px;
    margin: 10px 10px;
    position: relative;
    color: #ecf0f1;
    left: -250px;
    top: 100px;
    text-align: left;
    z-index: 4;
    }

    .aboutus{
    display: inline-block;
    padding: 20px 50px;
    margin: 20px 10px;
    position: relative;
    color: #ecf0f1;
    top: 250px;
    left: 220px;
    text-align: left;
    z-index: 4;
    }

    .registration{
    display: inline-block;
    padding: 20px 50px;
    margin: 10px 10px;
    position: relative;
    color: #ecf0f1;
    top: -80px;
    left: 400px;
    text-align: left;
    z-index: 4;
    }

    #button-5{
    color: #000000;
    overflow: hidden;
    font: 22px "Fira Sans", sans-serif;
    }

    #button-5:before, #button-5:after{
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #629C5D;
    top: 0;
    left: -100%;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    }

    #button-5:after{
    bottom: 0 !important;
    top: auto !important;
    right: -100%;
    left: auto;
    }

    #button-5:hover:before{
    left: 0;
    }

    #button-5:hover:after{
    right: 0;
    }

</style>