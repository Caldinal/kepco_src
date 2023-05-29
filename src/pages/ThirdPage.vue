<template lang="">
  <div class="w-full box-border">
    <h2 class="w-0 h-0 text-[0px] m-0 p-0 leading-[0px] overflow-hidden text-transparent">고객지원</h2>
      <div class="w-[1400px] mx-auto mt-[132px]">
        <div class="w-full mx-auto pt-5 pb-10 text-center">
          <h2 class="w-full text-black text-[45px] font-medium text-center">고객지원</h2>
        </div>
        <div class="-mt-0.5">
          <CustomList />
        </div>
      </div>
    <div>

    </div>
  </div>
</template>
<script>
import CustomList from '@/components/CostomList.vue'
export default {
  name: 'ThirdPage',
  components: {
    CustomList,
  }
}
</script>
<style lang="">
  
</style>