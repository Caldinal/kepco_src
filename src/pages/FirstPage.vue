<template lang="">
  <div class="first-page relative w-full">
    <div>
      <SwiperSlider />
    </div>
    <div class="absolute w-full top-0 left-0 z-50">
      <HeaderTop />
      <Nav />
    </div>
  </div>
</template>
<script>
import HeaderTop from '@/components/HeaderTop.vue'
import Nav from '@/components/Nav.vue'
import SwiperSlider from '@/components/SwiperSlider.vue'

export default {
  name: 'FirstPage',
  components: {
    HeaderTop,
    Nav,
    SwiperSlider,
  },
}
</script>
<style lang="">
  
</style>