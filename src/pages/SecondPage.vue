<template lang="">
  <!-- :style="{'background-image': 'url(' + require('@/assets/images/main/intro_bg1.jpg') + ')'}" -->
    <!-- <img src="@/assets/images/main/intro_bg1.jpg" alt="intro-bg" class="w-full top-0 left-0"> -->
    <div class="w-full">
      <Title />
      <IntroListTop />
      <IntroListBottom />
    </div>
</template>
<script>
import Title from '@/components/SecondTitle.vue'
import IntroListTop from '@/components/IntroListTop.vue'
import IntroListBottom from '@/components/IntroListBottom.vue'
export default {
  name: 'SecondPage',
  components: {
    Title,
    IntroListTop,
    IntroListBottom,
  }
}
</script>
<style lang="">
  
</style>