<template>
  <div class="sign-up-pane">
    <div class="form-section">
      <div class="logo">
        <img src="@/assets/images/logo.jpeg" alt="Logo">
        <p>Stages</p>
      </div>
      <div class="form-container">
        <form>
          <h1>Sign up</h1>
          <input type="text" name="firstName" id="firstName" placeholder="First name*">
          <input type="text" name="lastName" id="lastName" placeholder="Last name*">
          <input type="text" name="email" id="email" placeholder="Email*">
          <input type="password" name="password" id="password" placeholder="Choose password*">
          <p class="password-msg">Password must be at least 8 characters long.</p>
          <button type="submit">Sign up</button>
          <p class="alt">Already a member? <a @click="switchToSignIn">Sign in</a></p>
        </form>
      </div>
    </div>
    <ImageSection />
  </div>
</template>

<script>
import ImageSection from '@/components/ImageSection.vue'
export default {
  name: 'Sign up',
  components: { ImageSection },
  methods: {
    switchToSignIn(){
      this.$router.push({ name: 'SignIn'})
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
    margin-bottom: 5px;
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
    }
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
</style>