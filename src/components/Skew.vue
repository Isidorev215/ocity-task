<template>
  <div class="skew-container">
      <div class="card first" v-if="first.img">
          <img :src="first.img" :alt="first.alt">
      </div>
      <div class="card second" v-if="second.color" :style="{ backgroundColor: second.color }"></div>
      <div class="card third" v-if="third.color" :style="{ backgroundColor: third.color, top: third.top + '%' }"></div>
  </div>
</template>

<script>
export default {
    name: 'skew',
    props: [ 'first', 'second', 'third']
}
</script>

<style lang="scss">
.skew-container{
    width: 15vw;
    height: 15vh;
    position: absolute;
    .card{
        height: 100%;
        position: absolute;
    }
    .first{
        background-color: white;
        width: 45%;
        z-index: 5;
        transform: skewY(20deg);
        img{
            width: 100%;
            height: 100%;
            border-radius: 5px;
        }
    }
    .second{
        // background-color: yellow;
        width: 40%;
        z-index: 4;
        border-radius: 2px;
        transform: skewY(20deg);
        left: 15%;
        top: 15%
    }
    .third{
        // background-color: grey;
        width: 15%;
        height: 45%;
        z-index: 3;
        right: 20%;
        // top: 20%;
        border-radius: 3px;
        transform: skewY(20deg);
    }
}
@media screen and (min-width: 576px){
  .skew-container{
    width: 25vw;
    height: 25vh;
  }
}
@media screen and (min-width: 768px){
  .skew-container{
    width: 20vw;
    height: 25vh;
  }
}
</style>
