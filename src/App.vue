<template>
  <!-- <div id="nav">
    <router-link to="/">Sign in</router-link> |
    <router-link to="/signIn">Sign up</router-link>
  </div> -->
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  &::before{
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: url('./assets/images/bg-2.jpg') no-repeat center;
    background-size: cover;
    opacity: 0.6;
  }
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
