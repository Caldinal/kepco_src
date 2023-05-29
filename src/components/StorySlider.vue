<template>
  <swiper
    :slidesPerView="6"
    :spaceBetween="15"
    :centeredSlides="false"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper w-full"
  >
    <swiper-slide v-for="(e, index) in Data" :key="e" class="w-[219px]">
      <a href="#" @click.prevent class="inline-block w-full no-underline">
        <div class="w-full h-[302px] overflow-hidden">
          <img :src="require(`@/assets/images/main/story_bg${index + 1}.jpg`)" :alt="`storySlider${index + 1}`">
        </div>
        <div class="relative w-[224px] mt-7 ml-2.5 pb-2.5">
          <h3 class="text-xl text-black font-medium pb-[15px]">{{ e[0] }}</h3>
          <p class="text-[#454545] leading-[1.2]">
            {{ e[1] }} 
            <br />
            {{ e[2] }}
          </p>
          <span class="absolute right-[22px] bottom-2.5 inline-block w-[29px] h-[27px] text-[0px] leading-[0] bg-[position:-49px_-143px] bg-no-repeat bg-[#fb3b14]" :style="{'background-image': 'url(' + require('@/assets/images/Icon/img_common.png') + ')'}"></span>
        </div>
      </a>
    </swiper-slide>
  </swiper>
</template>
<script>
import dataList from '@/assets/Data.json'
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/navigation';

  import '@/main.css';

  // import required modules
  import { Autoplay, Navigation } from 'swiper';

  export default {
    name: 'StorySlider',
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        Data : dataList.StorySlider,
      }
    },
    setup() {
      return {
        modules: [Autoplay, Navigation],
      };
    },
  };
</script>
<style>

</style>