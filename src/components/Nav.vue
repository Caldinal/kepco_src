<template lang="">
  <div class="h-[88px] bg-black opacity-95">
    <div class="max-w-[1700px] w-[1400px] mx-auto flex gap-x-0">
      <div class="mt-[27px] h-[58px]">
        <a href="#" @click.prevent class="block logo-img logo"></a>
      </div>
      <nav class="mt-[30px] ml-[2px] h-[58px]">
        <ul class="flex gap-x-0 h-full overflow-hidden m-0 p-0">
          <li v-for="(e,index) in Data" :key="e" class="h-full">
            <a href="#" @click.prevent class="relative block px-[12px] font-light text-[17px] text-white" :class="index !== 11 && 'after:absolute after:top-3 after:right-0 after:w-[3px] after:h-[3px] after:bg-white after:rounded-[10px]'">{{ e }}</a>
          </li>
          <!-- <li class="h-full">
            <a href="#" @click.prevent class="relative block px-[12px] font-light text-[17px] text-white after:absolute after:top-3 after:right-0 after:w-[3px] after:h-[3px] after:bg-white after:rounded-[10px]">정보공개</a>
          </li>
          <li class="h-full">
            <a href="#" @click.prevent class="relative block px-[12px] font-light text-[17px] text-white after:absolute after:top-3 after:right-0 after:w-[3px] after:h-[3px] after:bg-white after:rounded-[10px]">사이버지점</a>
          </li>
          <li class="h-full">
            <a href="#" @click.prevent class="relative block px-[12px] font-light text-[17px] text-white after:absolute after:top-3 after:right-0 after:w-[3px] after:h-[3px] after:bg-white after:rounded-[10px]">민원센터</a>
          </li>
          <li class="h-full">
            <a href="#" @click.prevent class="relative block px-[12px] font-light text-[17px] text-white after:absolute after:top-3 after:right-0 after:w-[3px] after:h-[3px] after:bg-white after:rounded-[10px]">기업센터</a>
          </li>
          <li class="h-full">
            <a href="#" @click.prevent class="relative block px-[12px] font-light text-[17px] text-white after:absolute after:top-3 after:right-0 after:w-[3px] after:h-[3px] after:bg-white after:rounded-[10px]">IR센터</a>
          </li>
          <li class="h-full">
            <a href="#" @click.prevent class="relative block px-[12px] font-light text-[17px] text-white after:absolute after:top-3 after:right-0 after:w-[3px] after:h-[3px] after:bg-white after:rounded-[10px]">홍보센터</a>
          </li>
          <li class="h-full">
            <a href="#" @click.prevent class="relative block px-[12px] font-light text-[17px] text-white after:absolute after:top-3 after:right-0 after:w-[3px] after:h-[3px] after:bg-white after:rounded-[10px]">지식센터</a>
          </li>
          <li class="h-full">
            <a href="#" @click.prevent class="relative block px-[12px] font-light text-[17px] text-white after:absolute after:top-3 after:right-0 after:w-[3px] after:h-[3px] after:bg-white after:rounded-[10px]">ESG경영</a>
          </li>
          <li class="h-full">
            <a href="#" @click.prevent class="relative block px-[12px] font-light text-[17px] text-white after:absolute after:top-3 after:right-0 after:w-[3px] after:h-[3px] after:bg-white after:rounded-[10px]">탄소중립</a>
          </li>
          <li class="h-full">
            <a href="#" @click.prevent class="relative block px-[12px] font-light text-[17px] text-white after:absolute after:top-3 after:right-0 after:w-[3px] after:h-[3px] after:bg-white after:rounded-[10px]">열린경영</a>
          </li>
          <li class="h-full">
            <a href="#" @click.prevent class="relative block px-[12px] font-light text-[17px] text-white">경영공시</a>
          </li> -->
        </ul>
      </nav>
      <div class="flex justify-between mt-[34px] mr-[10px]">
        <div class="cursor-pointer">
          <a href="#" @click.prevent class="site-map map-image block mr-5"></a>
        </div>
        <div class="cursor-pointer w-[47px]">
          <a href="#" @click.prevent class="search search-image relative block ml-5 before:absolute before:w-[1px] before:h-[30px] before:bg-white before:-top-[2px] before:-left-5 before:cursor-auto"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DataList from '@/assets/Data.json'
export default {
  name: 'NavArea',
  data() {
    return {
      Data: DataList.Nav,
    }
  },
}
</script>
<style>
  .logo{
    width: 181px;
    height: 35px;
    background-position: 0 0;
  }
  .logo-img{
    background-image: url("../assets/images/Icon/img_common.png");
  }
  .site-map{
    width: 26px;
    height: 20px;
    background-position: -220px 0;
  }
  .map-image{
    background-image: url("../assets/images/Icon/img_common.png");
  }
  .search{
    width: 27px;
    height: 27px;
    background-position: -255px 0;
  }
  .search-image{
    background-image: url("../assets/images/Icon/img_common.png");
  }
</style>