<template>
    <a class="btn" href="/">BIBA</a>
    <div class="subname">Messenger</div>
  <body>
    <!-- Main container -->
    <div class="container">
      <!-- msg-header section starts -->
      <div class="msg-header">
        <div class="container1">
          <!-- <img src="1.png" class="msgimg" /> -->
          <div class="active">
            <p>o</p>
          </div>
        </div>
      </div>
      <!-- msg-header section ends -->

      <!-- Chat inbox  -->
      <div class="chat-page">
        <div class="msg-inbox">
          <div class="chats">
            <!-- Message container -->
            <div class="msg-page">
              <!-- Incoming messages -->

              <div class="received-chats">
                <div class="received-chats-img">
                  <!-- <img src="user2.png" /> -->
                </div>
                <div class="received-msg">
                  <div class="received-msg-inbox">
                    <p>
                      Нужно сделать проект. О чем он будет?
                    </p>
                    <span class="time">18:06 PM | November 24</span>
                  </div>
                </div>
              </div>
              <!-- Outgoing messages -->
              <div class="outgoing-chats">
                <div class="outgoing-chats-img">
                  <!-- <img src="1.png" /> -->
                </div>
                <div class="outgoing-msg">
                  <div class="outgoing-chats-msg">
                    <p class="multi-msg">
                      Не знаю, нужно что-то необычное
                    </p>
                    <p class="multi-msg">
                      Биба предлагает сделать его
                    </p>

                    <span class="time">18:30 PM | November 24</span>
                  </div>
                </div>
              </div>
              <div class="received-chats">
                <div class="received-chats-img">
                  <!-- <img src="1.png" /> -->
                </div>
                <div class="received-msg">
                  <div class="received-msg-inbox">
                    <p class="single-msg">
                      Круто! Мне нравится. Он будет руководить.
                    </p>
                    <span class="time">18:31 PM | November 24</span>
                  </div>
                </div>
              </div>
              <div class="outgoing-chats">
                <div class="outgoing-chats-img">
                  <!-- <img src="1.png" /> -->
                </div>
                <div class="outgoing-msg">
                  <div class="outgoing-chats-msg">
                    <p>
                      Договорились
                    </p>

                    <span class="time">18:34 PM | November 24</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- msg-bottom section -->

          <div class="msg-bottom">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Введите сообщение..."
              />
              
              <span class="input-group-text send-icon">
                <i class="bi bi-send"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="msg-inbox2"></div>
        <div class="kont">
          <p class="dialog">Биба</p>
        </div>
        <div class="kont2">
          <p class="dialog">Хусаинов Эдуард</p>
        </div>
        <div class="kont3">
          <p class="dialog">Регина Хисымутдинова</p>
        </div>
        <div class="kont4">
          <p class="dialog">Помощь</p>
        </div>
    </div>
  </body>
</template>

<script>
export default {

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
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

/* Styling the main container */
.container {
    width: 80%;
    margin: auto;
    margin-top: 2rem;
    letter-spacing: 0.5px;
    height: 80%;
}

img {
    width: 50px;
    vertical-align: middle;
    border-style: none;
    border-radius: 100%;
}
/* Styling the msg-header container */
.msg-header {
    border: 1px solid black;
    width: 150%;
    height: 10%;
    display: inline-block;
    background-color: #BBE7B7;
    margin: 0 -200px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
/* Styling the profile picture */
.msgimg {
    margin-left: 2%;
    float: left;
}

.container1 {
    width: 270px;
    height: auto; 
    float: left;
    margin: 0;
}

/* styling user-name */
.active {
    width: 150px;
    float: left;
    color: #BBE7B7;
    font-weight: bold;
    margin: 0 40px;
    height: 10%;
 
}
/* Styling the inbox */
.chat-page {
    padding: 0 0 50px 0;
}

.msg-inbox {
    border: 1px solid black;
    width: 100%;
    margin: 0 150px;
    overflow: hidden;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}

.msg-inbox2 {
    border: 1px solid black;
    width: 49%;
    height: 532px;
    margin: -633px 0 0 -150px;
    overflow: hidden;
    background-color: #BBE7B7;
    border-bottom-left-radius: 15px;
    background-image: linear-gradient(360deg, #629C5D 0%, #9fcf99 50%, #BBE7B7 100%);
}

.dialog {
  margin: auto;
  text-align: left;
  display:block;
  font: 15px sans-serif;
  color: black;
  padding: 1rem;
}

.kont {
    border: 1px solid black;
    width: 49%;
    height: 50px;
    margin: -532px 0 0 -150px;
    overflow: hidden;
}
.kont2 {
    border: 1px solid black;
    width: 49%;
    height: 50px;
    margin: -1px 0 0 -150px;
    overflow: hidden;
    background-color: #629C5D;
}
.kont3 {
    border: 1px solid black;
    width: 49%;
    height: 50px;
    margin: -1px 0 0 -150px;
    overflow: hidden;
}
.kont4 {
    border: 1px solid black;
    width: 49%;
    height: 50px;
    margin: -0.5px 0 0 -150px;
    overflow: hidden;
}

.chats {
    padding: 30px 15px 0 25px;
}

.msg-page {
    max-height: 500px;
    overflow-y: auto;
}

/* Styling the msg-bottom container */
 .msg-bottom {
        border-top: 1px solid black;
        position: relative;
        height: 11%;
        background-color: rgb(239 239 239);
    }
/* Styling the input field */
    .input-group {
        float: right;
        margin-top: 13px;
        margin-right: 20px;
        outline: none !important;
        border-radius: 20px;
        width: 61% !important;
        background-color: #fff;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
    }
    
    .input-group>.form-control {
        position: relative;
        flex: 1 1 auto;
        width: 1%;
        margin: -10px 0 0 -210px;
    }
    
    .form-control {
        border: none !important;
        border-radius: 20px !important;
        display: block;
        height: calc(2.25rem + 2px);
        padding: 1.5rem 1.5rem;
        font-size: 1rem;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    }
    
    .input-group-text {
        background: transparent !important;
        border: none !important;
        display: flex;
        align-items: center;
        padding: 0.375rem 0.75rem;
        margin-bottom: 0;
        font-size: 1.5rem;
        font-weight: b;
        line-height: 1.5;
        color: #495057;
        text-align: center;
        white-space: nowrap;
        background-color: #e9ecef;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        font-weight: bold !important;
        cursor: pointer;
    }
    
    input:focus {
        outline: none;
        border: none !important;
        box-shadow: none !important;
    }
    
    .send-icon {
        font-weight: bold !important;
    }

/* Styling the avatar  */
received-chats-img {
    display: inline-block;
    width: 50px;
    /* float: left; */
}

.received-msg {
    display: inline-block;
    padding: 0 0 0 10px;
    vertical-align: top;
    width: 92%;
}
.received-msg-inbox {
    width: 57%;
}

.received-msg-inbox p {
    background: #efefef none repeat scroll 0 0;
    border-radius: 10px;
    color: black;
    font-size: 14px;
    margin-left: -30px;
    padding: 1rem;
    width: 100%;
    /* box-shadow: rgb(0 0 0 / 25%) 0px 5px 5px 2px; */
}
    p {
    overflow-wrap: break-word;
}

/* Styling the msg-sent time  */
.time {
    color: #777;
    display: block;
    font-size: 12px;
    margin: 8px 0 0;
}
.outgoing-chats {
    overflow: hidden;
    margin: 26px 20px;
}

.outgoing-chats-msg p {
    background-color: #629C5D;
    background-image: linear-gradient(45deg, #BBE7B7 0%, #7bad76 50%, #629C5D 100%);
    color: #fff;
    border-radius: 10px;
    font-size: 14px;
    color: #fff;
    padding: 5px 10px 5px 12px;
    width: 100%;
    padding: 1rem;
    /* box-shadow: rgb(0 0 0 / 25%) 0px 2px 5px 2px; */
}
.outgoing-chats-msg {
        float: right;
        width: 46%;
    }

/* Styling the avatar */
.outgoing-chats-img {
    display: inline-block;
    width: 50px;
    /* float: right; */
    margin-right: 1rem;
}
@media only screen and (max-device-width: 850px) {
    *,
    .time {
        font-size: 28px;
    }
    img {
        width: 65px;
    }
    .msg-header {
        height: 5%;
    }
    .msg-page {
        max-height: none;
    }
    .received-msg-inbox p {
        font-size: 28px;
    }
    .outgoing-chats-msg p {
        font-size: 28px;
    }
}

@media only screen and (max-device-width: 450px) {
    *,
    .time {
        font-size: 28px;
    }
    img {
        width: 65px;
    }
    .msg-header {
        height: 5%;
    }
    .msg-page {
        max-height: none;
    }
    .received-msg-inbox p {
        font-size: 28px;
    }
    .outgoing-chats-msg p {
        font-size: 28px;
    }
}

</style>