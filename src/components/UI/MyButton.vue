<template>
    <body>
      <slot></slot>
    <div class="border"></div>
    <div class="circle"></div>
    <div class="border1"></div>
    <div class="circle1"></div>
    <div class="border2"></div>
    <div class="circle2"></div>
      <div class="container">
        <div class="row cf">
            <div class="six col">
              <a href="#" class="manager" id="button-5">Task Manager<br/><br/>
                  Создайте свой профиль
                  и добавляйте<br/> 
                  новые задачи в одном месте
              </a>
            </div>
        </div>
          <div class="row cf">
            <div class="six col">
              <a href="#" class="messenger" id="button-5">Messenger<br/><br/>
                  Переписывайтесь с друзьями<br/> 
                  и обсуждайте проекты вместе
              </a>
            </div>
          </div>
          <div class="row cf">
            <div class="six col">
              <a href="#" class="music" id="button-5">Music<br/><br/>
                  Слушайте вашу любимую музыку,<br/>
                  пока обсуждаете проекты
              </a>
            </div>
          </div>
          <div class="row cf">
            <div class="six col">
              <a href="#" class="registration" id="button-5">Registration<br/><br/>
                  Создайте свой уникальный профиль
              </a>
            </div>
          </div>
          <div class="row cf">
            <div class="six col">
              <a href="#" class="aboutus" id="button-5">О нас</a>
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

.circle {
  width: 720px; 
  height: 720px;
  background: #BBE7B7;
  border-radius: 50%;
  position: absolute;
  margin: auto;
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

.circle1 {
  width: 300px; 
  height: 300px;
  background: #BBE7B7;
  border-radius: 50%;
  position: absolute;
  margin: auto;
  top: 200px; 
  left: -100px;
  z-index: 2;
}

.border1 {
  width: 300px; 
  height: 300px;
  border: 2px solid #629C5D;
  border-radius: 50%;
  position: absolute;
  top: 180px; 
  left: -120px;
  z-index: 3;
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
  z-index: 1;
}

.border2 {
  width: 150px; 
  height: 150px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  position: absolute;
  top: 330px; 
  left: 240px;
  z-index: 2;
}

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