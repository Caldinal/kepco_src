<template>
  <swiper
  :slidesPerView="6"
    :spaceBetween="1"
    :centeredSlides="false"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :modules="modules"
    class="mySwiper w-full"
  >
    <swiper-slide v-for="(e, index) in 8" :key="e" class="w-[233px]">
      <a href="#" @click.prevent class="inline-block w-full no-underline text-center">
        <div class="w-full h-[93px] overflow-hidden">
          <img :src="require(`@/assets/images/main/banner${index + 1}.jpg`)" :alt="index">
        </div>
      </a>
    </swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import '@/main.css';

  // import required modules
  import { Autoplay } from 'swiper';

  export default {
    name: 'BannerSlider',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay],
      };
    },
  };
</script>
