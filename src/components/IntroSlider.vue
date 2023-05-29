<template lang="">
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(e, index) in 8" :key="e">
      <img :src="require(`@/assets/images/getImage/getImage${index + 1}.png`)" alt="슬라이드 사진">
    </swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';

  import '@/main.css';

  // import required modules
  import { Autoplay, Pagination } from 'swiper';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination],
      };
    },
  };
</script>
<style>
  .swiper-pagination-horizontal{
    top: 3px !important;
    text-align: right;
    padding-top: 6px;
    padding-right: 8px;
  }
  .swiper-pagination-bullet{
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-right: 2px;
    margin-left: 2px;
    background-color: rgba(255, 255, 255, 1.0);
  }
  .swiper-pagination-bullet-active{
    background-color: rgba(39, 83, 131, 1.0) !important;
  }
</style>