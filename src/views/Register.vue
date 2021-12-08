<template>
<Header/>
<div class="wrapper fadeInDown">
    <div id="formContent">
        <form class="form" @submit.prevent="register()">
        <fieldset>
            <div id="legend">
            <legend class="">Register</legend>
            </div>
            <div class="control-group">
            <!-- Username -->
            <label class="control-label"  for="username" >Username</label>
            <div class="controls">
                <input type="text" id="username" name="username" placeholder="" class="input-xlarge" v-model="user.name">
            </div>
            </div>
        
            <div class="control-group">
            <!-- E-mail -->
            <label class="control-label" for="email"  >E-mail</label>
            <div class="controls">
                <input type="text" id="email" name="email" placeholder="" class="input-xlarge" v-model="user.email">
            </div>
            </div>
        
            <div class="control-group">
            <!-- Password-->
            <label class="control-label" for="password" >Password</label>
            <div class="controls">
                <input type="password" id="password" name="password" placeholder="" class="input-xlarge" v-model="user.password">
            </div>
            </div>
        
            <div class="control-group">
            <!-- Password -->
            <label class="control-label"  for="password_confirm">Password (Confirm)</label>
            <div class="controls">
                <input type="password" id="password_confirm" name="password_confirm" placeholder="" class="input-xlarge" v-model="user.password_confirmation">
                <p class="help-block">Please confirm password</p>
            </div>
            </div>
        
            <div class="control-group">
            <!-- Button -->
            <div class="controls">
                <button class="btn btn-success">Register</button>
            </div>
            </div>
        </fieldset>
    </form>

    </div>
</div>

<Footer/>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Register',
    components: {
        Header,
        Footer
    },
    data: function () {
        return ({
            user: {
                name:'',
                email: '',
                password: '',
                password_confirmation: ''
            }
        })
    },
    methods: {
        register(){
            console.log(this.user)
        }
    }
}
</script>
<style>
.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
#formContent {
  margin: 20px;
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;
}
form {
    margin: 20px;
}
</style>