<template lang="">
  <swiper
    :spaceBetween="0"
    :centeredSlides="true"
    :autoplay="
    isAutoplayEnabled
    &&
    {
      delay: 2500,
      disableOnInteraction: true,
    }"
    :pagination="{
      clickable: true,
    }"
    @update = "onSwiperInit"
    :modules="modules"
    :loop="true"
    class="mySwiper w-full"
  >
    <swiper-slide v-for="(e, index) in 3" :key="index">
      <img :src="require(`@/assets/images/main/main${index + 1}1.jpg`)" :alt="e" class="w-full">
      <!-- <div class="swiper-button-play">play</div>
      <div class="swiper-button-pause">stop</div> -->
    </swiper-slide>
    <button @click="toggleAutoplay">
      <img :src="isAutoplayEnabled ? require(`@/assets/images/Icon/pause.png`) : require(`@/assets/images/Icon/play.png`)" alt="일시정지" class="absolute top-[84.9%] left-[53.4%] w-5 h-5 bg-no-repeat bg-center z-[600]">
    </button>
  </swiper>
  <!-- <div>
    <Nav />
    <swiper :modules="modules" :space-between="10" :centered-slides="true" :autoplay="{delay: 3000, disableOnInteraction: false}" :slides-per-view="1" :pagination="{clickable: true, type: 'fraction'}" :loop="true" class="mySwiper w-screen h-screen">
      <swiper-slide v-for="(e, index) in 3" :key="index">
        <img :src="require(`@/assets/images/main/main${index + 1}1.jpg`)" :alt="e" class="w-full h-full">
      </swiper-slide>
    </swiper>
  </div> -->
</template>
<script>
// // import Nav from './Nav.vue'
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import 'swiper/css';
// import 'swiper/css/bundle';
// import 'swiper/css/pagination';
// import { Autoplay, Pagination } from 'swiper';
// export default {
//   name: 'SwiperSlide',
//   data() {
//     return {
//       modules : [Pagination, Autoplay],
//     };
//   },
//   components: {
//     // Nav,
//     Swiper,
//     SwiperSlide,
//   },
// }
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
  data() {
    return {
      isAutoplayEnabled: true,
    }
  },
  methods: {
    toggleAutoplay() {
      this.isAutoplayEnabled = !this.isAutoplayEnabled && { delay: 2500, disableOnInteraction: true }
    },
    onSwiperInit(swiper) {
      // console.log(swiper)
      if(this.isAutoplayEnabled) {
        swiper.autoplay.start()
      } else {
        swiper.autoplay.stop()
      }
    },
  },
};
</script>
<style>
  .swiper-pagination.swiper-pagination-horizontal{
    top: 84% !important;
    z-index: 500 !important;
    text-align: center;
    padding-top: 0;
    padding-right: 0;
    height: 50px !important;
  }
  .swiper-pagination-bullet{
  /* background-color: #fff; */
  opacity: 1;
  width: 20px !important;
  height: 20px !important;
  border-radius: 50%;
  margin-left: 7px !important;
  margin-right: 7px !important;
  background: url("@/assets/images/Icon/paging.png") no-repeat center center;
  display: inline-block !important;
  line-height: 50px;
  }
  span.swiper-pagination-bullet.swiper-pagination-bullet-active{
  /* background-color: red !important; */
  opacity: 1;
  width: 29px !important;
  height: 29px !important;
  border-radius: 50%;
  background: url("@/assets/images/Icon/paging_on.png") no-repeat center center;
  display: inline-block !important;
  line-height: 50px !important;
  }
</style>