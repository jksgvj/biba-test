<template>
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"> -->
    <a class="btn" href="/">B<span class="t">&</span>B</a>
    <div class="subname">Authorization</div>
    <div class="border1"></div>
    <div class="circle1"></div>
    <div class="border2"></div>
    <div class="circle2"></div>
    <div class="border3"></div>
    <div class="circle3"></div>
    <div class="conteiner mt-4">
        <div class="row">
            <div class="col-sm-6 mx-auto">
                <form @submit.prevent="registerUser" novalidate>
                  <transition name="slide-fade">
                    <div v-show="step===1" class="step">
                    <p class="br"></p>
                      <div class="text-field">
                          <label class="text-field__label" for="email">Логин</label>
                          <input class="text-field__input" v-model="formReg.login" type="text" id="login" placeholder="Введите логин">
                      </div>

                      <div class="text-field">
                          <label class="text-field__label" for="password">Пароль</label>
                          <input class="text-field__input" v-model="formReg.password" type="password" id="password" placeholder="Введите пароль">
                      </div>
                      <a href="" @click="next" type="submit" class="green">Войти</a>
                      <a href="/registration" type="submit" class="auth">Нет аккаунта</a>
                    </div>
                  </transition>
                    <!-- <a type="submit" class="green" href="/account">Регистрация</a> -->
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      step: 1,
      formReg: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    next (){
      if (this.step < 2) {
        this.step++
      }
    },
    back () {
      if (this.step > 1) {
        this.step--
      }
    },
    registerUser() {
      console.log('Вход успешно выполнен!')
    //   console.log(this.formReg.name)
    }
  },
  
}
</script>

<style scoped>
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
        filter: blur(3px);
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
        filter: blur(3px);
    }

    .circle2 {
        width: 150px; 
        height: 150px;
        background: #BBE7B7;
        border-radius: 50%;
        position: absolute;
        margin: auto;
        top: 500px; 
        left: 1150px;
        z-index: -2;
        filter: blur(3px);
    }

    .border2 {
        width: 150px; 
        height: 150px;
        border: 1px solid #ffffff;
        border-radius: 50%;
        position: absolute;
        top: 510px; 
        left: 1140px;
        z-index: -1;
        filter: blur(3px);
    }

    .circle3 {
        width: 300px; 
        height: 300px;
        background: #BBE7B7;
        border-radius: 50%;
        position: absolute;
        margin: auto;
        top: 110px; 
        left: 1210px;
        z-index: -2;
        filter: blur(3px);
    }

    .border3 {
        width: 300px; 
        height: 300px;
        border: 1px solid #629C5D;
        border-radius: 50%;
        position: absolute;
        top: 90px; 
        left: 1200px;
        z-index: -1;
        filter: blur(3px);
    }
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

    /* form-control {
        margin: auto;

    } */

    a.green{
        border-radius: 10px;
        color: #fff;
        display: block;
        width: 130px;
        text-align: center;
        font-size: 15px;
        padding: 8px 20px;
        margin: 40px auto;
        text-decoration: none;   
        background-color: #629C5D;   
    }
    a.auth{
        border-radius: 10px;
        color: black;
        display: block;
        width: 130px;
        text-align: center;
        font-size: 15px;
        padding: 8px 20px;
        margin: -30px auto;
        text-decoration: none;   
        background-color: transparent;   
    }
    
    /* text-field */
    .text-field {
      margin-bottom: 1rem;
    }

    .text-field__label {
      display: block;
      /* margin-bottom: 0.25rem; */
      color: transparent;
    }

    .text-field__input {
      display: block;
      width: 350px;
      height: calc(2.25rem + 2px);
      font-family: inherit;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      background-color: #BBE7B7;
      background-clip: padding-box;
      border: 1px solid black;
      border-radius: 10px;
      margin: 10px auto;
      /* margin-left: 40%; */
      box-sizing: border-box;
      padding: 1rem;
    }

    .text-field__input::placeholder {
      color: #629C5D;
    }

    .text-field__input:focus {
      color: #212529;
      background-color: #BBE7B7;
      outline: 0;
    }

    .text-field__input:disabled,
    .text-field__input[readonly] {
      background-color: #f5f5f5;
      opacity: 1;
    }
    .br {
      margin-top: 7em;
    }

    .slide-fade-enter-activ {
      transition: all 0.3s ease;
    }

    .slide-fade-enter {
      transition: translate(10px);
      opacity: 0;
    }

</style>