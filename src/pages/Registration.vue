<template>
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"> -->
    <a class="btn" href="/">BIBA</a>
    <div class="subname">Registration</div>
    <div class="conteiner mt-4">
        <div class="row">
            <div class="col-sm-6 mx-auto">
                <form @submit.prevent="registerUser" novalidate>
                  <transition name="slide-fade">
                    <div v-show="step===1" class="step">
                    <p class="br"></p><div class="text-field">
                          <label class="text-field__label" for="name">Имя</label>
                          <input class="text-field__input"
                                v-model="formReg.name" type="text" id="name" placeholder="Введите имя">
                      </div>

                      <div class="text-field">
                          <label class="text-field__label" for="email">Email</label>
                          <input class="text-field__input" v-model="formReg.email" type="text" id="Email" placeholder="Введите email">
                      </div>

                      <div class="text-field">
                          <label class="text-field__label" for="password">Пароль</label>
                          <input class="text-field__input" v-model="formReg.password" type="password" id="password" placeholder="Введите пароль">
                      </div>
                      <button @click="next" type="submit" class="green">Регистрация</button>
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
        name: '',
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
      console.log('Регистрация прошла успешно')
      // console.log(this.formReg.name)
    }
  }
}
</script>

<style scoped>
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

    /* form-control {
        margin: auto;

    } */

    button.green{
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