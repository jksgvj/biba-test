<template>
    <body>
        <slot></slot>
        <div class="container">
    <div class="row cf">
      <div class="six col">
        <a href="#" class="button1" id="button-5">Task Manager<br/><br/>
            Создайте свой профиль
            и добавляйте<br/> 
            новые задачи в одном месте
        </a>
      </div>
    </div>
    <div class="row cf">
      <div class="six col">
        <a href="#" class="button2" id="button-5">Messenger<br/><br/>
            Переписывайтесь с друзьями<br/> 
            и обсуждайте проекты вместе
        </a>
      </div>
    </div>
    <div class="row cf">
      <div class="six col">
        <a href="#" class="button3" id="button-5">И другое</a>
      </div>
    </div>
    <div class="row cf">
      <div class="six col">
        <a href="#" class="button4" id="button-5">О нас</a>
      </div>
    </div>
  </div>
        <!--<section>
            <div id="wrap">
                <div> <a class="btn-slide" href="#" >
                    <span class="circle">
                        <i class="fa-solid fa-film"></i>        
                    </span>
  
                    <span class="title">Task Manager</span>
                     <span class="title title-hover">BIBA</span>
                    </a> 
                </div>
                <div> <a class="btn-slide" href="#" >
                    <span class="circle">
                        <i class="fa fa-save"></i>
                    </span>
   
                    <span class="title" > Hover Button</span>
                    <span class="title title-hover">Download Now</span>
                    </a> 
                </div>
            </div>
        </section>-->
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

.button1{
  display: inline-block;
  padding: 20px 50px;
  margin: 10px 10px;
  position: relative;
  color: #ecf0f1;
  left: -250px;
  top: 100px;
  text-align: left;
}

.button2{
  display: inline-block;
  padding: 20px 50px;
  margin: 10px 10px;
  position: relative;
  color: #ecf0f1;
  left: -250px;
  top: 200px;
  text-align: left;
  z-index: 4;
}

.button3{
  display: inline-block;
  padding: 20px 50px;
  margin: 10px 10px;
  position: relative;
  color: #ecf0f1;
  left: -250px;
  top: 300px;
  text-align: left;
  z-index: 4;
}

.button4{
  display: inline-block;
  padding: 20px 50px;
  margin: 20px 10px;
  position: relative;
  color: #ecf0f1;
  top: 450px;
  left: 220px;
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
  background-color: #610DA8;
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

/*#wrap {
  text-align: left;
  z-index: 10;
}

.fa { 
    font-size: 19px; 
    width: 20px; 
}

.btn-slide { 
    position: relative;
    display: inline-block; 
    height: 50px;
    width: 260px;
    line-height: 50px;
    margin: 25px 0;
    padding: 0px;
    border-radius: 25px;
    background: linear-gradient(135deg, #610DA8 0%,#610DA8 100%);
        }
        
.btn-slide:active { 
    -webkit-transform: scale(0.98);
    transform: scale(0.96); }
    
.btn-slide:hover { 
    background: linear-gradient(-135deg, #610DA8 0%,#610DA8 100%); }
        
.btn-slide span.circle { 
    display: block;
    background-color: #fff;
    color: #e570e7;
    position: absolute;
    margin: 5px;
    height: 40px; 
    width: 40px;
    top: 0; left: 0;
    border-radius: 50%;
    transition: all 1.5s ease;
 }
        
.btn-slide:hover span.circle { 
    left: 100%;
    margin-left: -45px;
    background-color: #fff;
    color: #79f1fc; }
        
.btn-slide span.title { 
    font-family: 'Nunito Sans';
    position: absolute;
    left: 85px;
    font-size: 20px;
    letter-spacing: 1px;
    color: #fff;
    transition: all 1.5s linear; 
 }
        
.btn-slide span.title-hover { opacity: 0;}
.btn-slide:hover span.title { opacity: 0; }
.btn-slide:hover span.title-hover { opacity: 1; left: 60px; }   
    
@media (max-width: 540px) {
  h1 { font-size: 36px; }
  p { font-size: 20px; }
  
  .btn-slide { width: 240px; }
}

    /*.btn {
        border: none;
        background: none;
        font: 27px "Times New Roman", sans-serif;
    }

    .btn2 {
        border: none;
        background: none;
        font: 27px "Times New Roman", sans-serif;

    }*/
</style>