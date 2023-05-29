<template lang="">
  <!--  :style="{'background-image': 'url(' + require('../assets/images/main/communi_bg.jpg') + ')'}" -->
  <div class="forth_bg box-border">
    <h2 class="block w-0 h-0 text-[0px] leading-none m-0 p-0 overflow-hidden text-transparent">Communication</h2>
    <div class="pt-0">
      <div class="w-[1400px] mx-auto mt-[179px]">
        <h2 class="text-[45px] text-white drop-shadow-[5px_0_5px_rgba(0,0,0,0.19)] font-medium text-center mb-20">소통공간</h2>
        <div class="pb-[100px] overflow-hidden">
          <CommunityArea />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CommunityArea from '@/components/CommunityArea.vue'
export default {
  name: "ForthPage",
  components: {
    CommunityArea,
  }
}
</script>
<style>
  /* .forth_bg{
    background-size: 100% 100%;
    background-image: url('../assets/images/main/communi_bg.jpg');
    background-repeat: no-repeat;
    background-position: center center;
  } */
</style>