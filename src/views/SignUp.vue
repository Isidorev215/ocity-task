<template>
  <div class="sign-up-pane">
    <div class="form-section">
      <div class="logo">
        <img src="@/assets/images/logo.jpeg" alt="Logo">
        <p>Stages</p>
      </div>
      <div class="form-container">
        <form @submit.prevent="signupSubmit">
          <h1>Sign up</h1>
          <div class="names">
            <input type="text" name="firstName" id="firstName" placeholder="First name*" required v-model="fName">
            <input type="text" name="lastName" id="lastName" placeholder="Last name*" required v-model="lName">
          </div>
          <input type="email" name="email" id="email" placeholder="Email*" required v-model="email">
          <input type="password" name="password" id="password" placeholder="Choose password*" required v-model="pWord">
          <p class="password-msg">Password must be at least 8 characters long.</p>

          <button type="submit">Sign up</button>

          <p class="alt">Already a member? <a @click="switchToSignIn">Sign In</a></p>
          <p class="err-msg" v-show="errMsg">Axios engaged: {{errMsg}}</p>
        </form>
      </div>
    </div>
    <ImageSection />
  </div>
</template>

<script>
import axios from 'axios'
import ImageSection from '@/components/ImageSection.vue'
export default {
  name: 'Sign up',
  components: { ImageSection },
  data(){
    return {
      fName: '',
      lName: '',
      email: '',
      pWord: '',
      errMsg: null
    }
  },
  methods: {
    switchToSignIn(){
      this.$router.push({ name: 'SignIn'})
      // submit form and serve on heroku
    },
    signupSubmit(e){
      this.errMsg = null

      let formData = {
        firstName: this.fName,
        lastName: this.lName,
        email: this.email,
        password: this.pWord
      }
      axios({
        url: 'http://receive-my-form-data.com/isidore',
        method: 'post',
        headers: {
          'Content-type': 'text/json'
        },
        data: formData
      }).then(res => {
        console.log(res)
        this.$router.push({ name: 'Dashboard' })
      })
      .catch(err => {
        console.log(err)
        this.errMsg = 'CATCH BLOCK ERROR: Non-existent URL!'
        setTimeout(() => {
          this.errMsg = null
        }, 2000)
        e.target.reset()
      })
    }
  }
}
</script>

<style lang="scss">
.sign-up-pane{
  position: relative;
  width: 95vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
}
.form-section{
  flex: 2;
  background-color: white;
  padding: 5% 10% 0 10%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .logo{
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    img{
      width: 100%;
    }
    p{
      font-size: 0.8rem;
      font-weight: 800;
    }
  }
}
.form-section .form-container form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1{
    font-size: 1rem;
  }
  input{
    width: 100%;
    border: 1px solid gray;
    margin-bottom: 10px;
    padding: 2%;
    border-radius: 3px;
  }
  input::placeholder{
    font-size: 0.5rem;
  }
  p{
    font-size: 0.5rem;
    a{
      text-decoration: underline;
      cursor: pointer;
    }
  }
  p.err-msg{
    margin: 0;
    color: red;
  }
  button{
    width: 100%;
    padding: 3%;
    border: 1px solid rgba(43, 43, 255, 0.8);
    border-radius: 3px;
    font-size: 0.5rem;
    color: white;
    background-color: rgba(43, 43, 255, 0.8);
  }
}
@media screen and (min-width: 576px){
  .sign-up-pane{
    flex-direction: row;
    .form-section{
      flex: 2;
      border-top-left-radius: 15px;
      border-top-right-radius: 0;
      border-bottom-left-radius: 15px;
      padding-top: 0;
      justify-content: center;
      .logo{
        flex: 0.5;
      }
      .form-container{
        flex: 5;
        display: flex;
      }
    }
    .form-section .form-container form{
      flex: 2;
      input::placeholder, p, button{
        font-size: 0.5rem;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .sign-up-pane{
    .form-section{
      flex: 1;
    }
    .form-section .form-container form{
      h1{
        font-size: 1.2rem;
      }
      .names{
        display: flex;
        justify-content: space-between;
        input{
          width: 49%;
        }
      }
      input::placeholder, p, button{
        font-size: 0.6rem;
      }
    }
  }
}
</style>
