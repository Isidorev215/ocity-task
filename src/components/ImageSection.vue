<template>
    <div class="image-section">
        <h2>Explore your creativity</h2>
        <p>Discover new skills, meet passionate teachers and become a part of the most helpful community of creatives in the world.</p>
        <Skew class="one"
            :first="{ img: require('@/assets/images/photo-man.jpg'), alt: 'Random guy taking a picture' }"
            :second="{ color: 'steelblue' }"
            :third="{ color: 'steelblue', top: 40 }"
        />  
        <Skew class="two"
            :first="{ img: null, alt: null }"
            :second="{ color: 'rgb(255, 196, 0)' }"
            :third="{ color: 'rgb(255, 196, 0)', top: 15 }"
        />
        <Skew class="three"
            :first="{ img: require('@/assets/images/guy-desk.jpg'), alt: 'Random guy seating at a desk' }"
            :second="{ color: 'rgb(0, 72, 255)' }"
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
</style>