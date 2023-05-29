<template lang="">
  <div class="overflow-hidden">
    <h2 class="block w-0 h-0 text-[0px] leading-[0] m-0 p-0 overflow-hidden text-transparent">Value & Story</h2>
    <div class="pt-8">
      <div class="title_area pt-5 pb-20 text-center">
        <div class="relative w-[1400px] mx-auto">
          <h2 class="text-[45px] text-white [text-shadow:_5px_0_5px_rgb(0_0_0_/_19%)] font-medium">사업지원</h2>
          <p class="text-lg text-white mt-[5px] !font-light ">한전은 동반성장을 위하여 다양한 기술과 서비스를 제공하고 있습니다. </p>
        </div>
      </div>
      <div class="story_link overflow-hidden relative">
        <div class="relative w-[1400px] mx-auto">
          <div class="story_slide relative w-full box-border">
            <StorySlider />
          </div>
          <span class="absolute top-[138px] -left-[50px] w-9 h-[37px] block overflow-hidden bg-[position:-110px_-150px] cursor-pointer" :style="{'background-image': 'url(' + require('@/assets/images/Icon/img_common.png') + ')'}">
          </span>
          <span class="absolute top-[138px] -right-[46px] w-9 h-[37px] block overflow-hidden bg-[position:-150px_-150px] cursor-pointer" :style="{'background-image': 'url(' + require('@/assets/images/Icon/img_common.png') + ')'}"></span>
        </div>
      </div>
      <div class="story_banner overflow-hidden relative mt-[50px]">
        <div class="relative w-[1400px] mx-auto">
          <div class="relative w-full box-border">
            <BannerSlider />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StorySlider from '@/components/StorySlider.vue'
import BannerSlider from '@/components/BannerSlider.vue'
export default {
  name: 'FifthPage',
  components: {
    StorySlider,
    BannerSlider,
  }
}
</script>
<style lang="">
  
</style>