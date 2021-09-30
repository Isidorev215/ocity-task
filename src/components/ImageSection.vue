<template>
    <div class="image-section">
        <h2>Explore your creativity</h2>
        <p>Discover new skills, meet passionate teachers and become a part of the most helpful community of creatives in the world.</p>
        <Skew class="one"
            :first="{ img: require('@/assets/images/photo-man.jpg'), alt: 'Random guy taking a picture' }"
            :second="{ color: 'rgb(44, 33, 248)' }"
            :third="{ color: 'rgb(44, 33, 248)', top: 60 }"
        />
        <Skew class="two"
            :first="{ img: null, alt: null }"
            :second="{ color: 'rgb(255, 196, 0)' }"
            :third="{ color: 'rgb(255, 196, 0)', top: 20 }"
        />
        <Skew class="three"
            :first="{ img: require('@/assets/images/guy-desk.jpg'), alt: 'Random guy seating at a desk' }"
            :second="{ color: 'rgba(0, 0, 242, 0.7)' }"
            :third="{ color: null, top: null }"
        />
    </div>
</template>

<script>
import Skew from '@/components/Skew.vue'
export default {
  name: 'ImageSection',
  components: { Skew }
}
</script>

<style lang="scss">
.image-section{
  position: relative;
  flex: 0.8;
  background: url('../assets/images/bg-2.jpg') no-repeat center;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 2% 6%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  h2{
    margin-bottom: 1px;
    font-size: 1.3rem;
  }
  p{
    margin-top: 1px;
    font-size: 0.5rem;
  }
  .skew-container{
    display: none;
  }
}
@media screen and (min-width: 376px){
  .image-section{
    .two{
      display: block;
      top: -20%;
      right: 5%;
    }
  }
}
@media screen and (min-width: 576px){
    .image-section{
      flex: 1;
      border-top-right-radius: 15px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 15px;
      h2{
        font-size: 1.5rem;
      }
      p{
        font-size: 0.5rem;
      }
      .skew-container.one{
        display: block;
        bottom: 9%;
        left: -15%;
      }
      .skew-container.two{
        top: 2%;
        left: -25%;
      }
    }
}
@media screen and (min-width: 768px){
  .image-section{
    h2{
      font-size: 1.5rem;
    }
    p{
      font-size: 0.7rem;
    }
    .skew-container.one{
      left: -10%;
    }
    .skew-container.two{
      left: -15%;
    }
    .skew-container.three{
      display: block;
      right: -10%;
      top: 3%;
    }
  }
}
</style>
