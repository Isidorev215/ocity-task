<template>
  <div class="sign-in">
    <h1>Sign in Page</h1>
    <router-link to="/">Back to Sign up</router-link>
    <Skew 
      :first="{
        img: require('@/assets/images/photo-man.jpg'),
        alt: 'Random guy taking a picture' 
      }"
      :second="{
        color: 'yellow' 
      }"
      :third="{
        color: 'yellow',
        top: 20
      }"
    />
  </div>
</template>

<script>
import Skew from '@/components/Skew.vue'
export default {
  name: 'SignIn',
  components: { Skew }
}
</script>

<style lang="scss">
.sign-in{
  position: relative;
  .container{
    right: 0;
    // this is to style the container of the skew component
  }
}

</style>
