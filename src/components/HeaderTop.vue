<template lang="">
  <div class="h-[43px] bg-[#010304] text-[14px] w-full">
    <div class="max-w-[1700px] w-[1400px] mx-auto relative">
      <ul class="absolute right-0 top-0 flex">
        <li class="px-2 relative after:h-[9px] after:w-[1px] after:bg-[#fff] after:absolute after:top-[15px] after:right-0 after:opacity-70">
          <a href="#" @click.prevent class="leading-[39px]">
            <img src="../assets/images/main/mois_icon.png" alt="mois_icon">
          </a>
        </li>
        <li class="relative after:h-[9px] after:w-[1px] after:bg-[#fff] after:absolute after:top-[15px] after:right-0 after:opacity-70">
          <a href="#" @click.prevent class="text-[#fff] opacity-70 px-2 h-[39px] leading-[39px] text-[13px] font-extralight">LOGIN</a>
        </li>
        <li class="relative after:h-[9px] after:w-[1px] after:bg-[#fff] after:absolute after:top-[15px] after:right-0 after:opacity-70">
          <a href="#" @click.prevent class="icon_1 text-[#fff] opacity-70 mr-4 px-2 h-[39px] leading-[39px] text-[13px] font-extralight after:absolute after:top-[18px] after:ml-2">전국사업소</a>
          <img src=""  alt="">
        </li>
        <li class="relative after:h-[9px] after:w-[1px] after:bg-[#fff] after:absolute after:top-[15px] after:right-0 after:opacity-70">
          <a href="#" @click.prevent class="icon_2 text-[#fff] opacity-70 mr-4 px-2 h-[39px] leading-[39px] text-[13px] font-extralight after:absolute after:top-[18px] after:ml-2">LANGUAGE</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'HeaderTop',
}
</script>
<style>
  .icon_1::after{
    width: 5px;
    height: 3px;
    background-position: -220px -120px;
    background-image: url("@/assets/images/Icon/img_common.png");
  }
  .icon_2::after{
    width: 5px;
    height: 3px;
    background-position: -220px -120px;
    background-image: url("@/assets/images/Icon/img_common.png");
  }
</style>