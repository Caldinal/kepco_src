<template lang="">
  <div class="w-full overflow-x-hidden">
    <div class="custom_list_top mb-1">
      <ul v-for="(e, index) in Data" :key="e" class="w-full flex justify-center mb-1">
        <li v-for="(el, i) in e" :key="el" class="basis-1/6 h-48 text-center box-border" :class="i % 2 === 0 ? 'bg-[#4970a6]' : 'bg-[#335382]'">
          <a href="#" @click.prevent class="custom_top custom_top_image block box-border h-full pt-[38px] no-underline">
            <img :src="require(`@/assets/images/custom/custom-top${i + 1}.png`)" alt="custom-img" class="w-20 h-20 mx-auto">
            <p class="pt-[22px] text-base text-white">{{ Data[index][i] }}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="custom_list_middle w-full mx-auto my-2.5 overflow-hidden">
      <ul class="custom_center flex justify-center w-full">
        <li class="custom_center1 relative basis-1/3 h-[102px] border border-solid border-[#d0cece] box-border p-[25px]">
          <h3 class="text-xl text-black inline-block font-medium m-0 p-0">전기상담/고장신고</h3>
          <p class="m-0 p-0 text-[#4c4c4c]">24시간 전기상담 고객센터</p>
          <div class="absolute top-3 right-[30px] leading-[102px]">
            <span class="text-[15px] font-semibold inline-block relative -top-2.5">국번없이</span>
            <span class="text-5xl font-medium inline-block relative">123</span>
          </div>
        </li>
        <li class="custom_center2 relative basis-1/3 h-[102px] border-t border-b border-solid border-[#d0cece] box-border p-[25px]">
          <h3 class="text-xl text-black inline-block font-medium m-0 p-0">
            가까운
            <br />
            사업소 찾기
          </h3>
          <form id="frmDefault2" name="defaultForm2" action="https://home.kepco.co.kr/kepco/main.do" method="post">
            <div class="absolute flex gap-x-0 overflow-hidden top-[30px] right-[25px] w-[280px]">
              <label for="searchCondition" class="block w-0 h-0 text-[0px] leading-none m-0 p-0 overflow-hidden text-transparent cursor-pointer">가까운 사업소 찾기</label>
              <select name="searchCondition" id="searchCondition" title="가까운 사업소찾기 검색 기준 선택" tabindex="0" class="basis-[90px] h-[35px] pt-0 pr-[25px] pb-[3px] pl-1 border border-solid border-[#d3d3d3] leading-6 align-middle bg-white bg-no-repeat bg-[right_top_10px]">
                <option value="3" class="align-middle py-3 leading-6">도로명</option>
                <option value="1" class="align-middle py-3 leading-6">지번</option>
                <option value="2" class="align-middle py-3 leading-6">사업소명</option>
              </select>
              <label for="searchKeyword" class="block w-0 h-0 text-[0px] leading-none m-0 p-0 overflow-hidden text-transparent cursor-pointer">주소입력</label>
              <input id="searchKeyword" name="searchKeyword" title="주소입력" type="text" value maxlength="20" tabindex="0" class="mx-1.5 basis-[126px] h-[35px] pt-1 pb-[1px] bg-white border border-solid border-[#d3d3d3] box-border text-[#454545] indent-[7px] align-middle overflow-hidden">
              <span class="block basis-[37px] h-[35px]">
                <a href="#" @click.prevent class="search_btn search_btn_image relative block bg-[#fb3b14] basis-[37px] h-[35px] text-[0px] leading-none no-underline text-[#454545] m-0 p-0 before:absolute before:top-1 before:left-[5px] before:bg-no-repeat"></a>
              </span>
            </div>
          </form>
        </li>
        <li class="custom_center3 relative basis-1/3 h-[102px] border border-solid border-[#d0cece] box-border p-[25px]">
          <h3 class="text-xl text-black inline-block font-medium">
            고객의
            <br />
            소리
          </h3>
          <ul class="overflow-hidden absolute top-[25px] right-[15px] flex w-[340px] h-[58px]">
            <li v-for="(e, index) in Opinions" :key="e" class="basis-1/4 h-full relative" :class="index !== 3 && 'claim claim_image after:block after:absolute after:top-0 after:right-0'" >
              <a href="#" @click.prevent class="block w-full box-border text-center text-[#454545] bg-no-repeat bg-[center_top] before:block before:w-8 before:h-9 before:bg-inherit" :style="{'background-image': 'url(' + require(`@/assets/images/main/ico_claim${index + 1}.png`) + ')'}">
                <p class="text-[13px] text-[#333] font-medium">{{ e }}</p>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="custom_bottom overflow-hidden mb-[50px] w-full">
      <ul class="flex w-full h-[151px] justify-center">
        <li class="overflow-hidden relative basis-1/2 border border-solid border-[#d0cece] h-full border-r-0 box-border p-[25px]">
          <h3 class="block text-xl font-medium">전력수급현황</h3>
          <a href="#" @click.prevent class="inline-block w-[30px] h-[30px] -mt-[26px] ml-[115px] text-[0px] leading-none absolute no-underline text-[#454545] bg-[position:-75px_-176px]" :style="{'background-image': 'url(' + require('@/assets/images/Icon/img_common.png') + ')'}">
            <span class="block w-0 h-0 text-[0px] leading-none m-0 p-0 overflow-hidden text-transparent">더보기</span>
          </a>
          <div class="w-[140px] h-[100px] -mt-[11px] -ml-2.5 relative">
            <!-- <ve-progress :progress="50"/> -->
            <ProgressBar />
          </div>
          <ul class="overflow-hidden list-none flex justify-center w-[472px] h-[73px] absolute bottom-[18px] right-[29px]">
            <li v-for="(e, index) in Supplement" :key="index" class="basis-1/4 text-center m-0 p-0">
              <span class="block text-xs text-black font-medium relative" :class="index !== 3 && 'after:w-[1px] after:h-2.5 after:bg-[#cfcece] after:block after:absolute after:top-1 after:right-0'">{{ e[0] }}</span>
              <span class="block text-[13px] text-white w-full h-[50px] leading-[50px] mt-[5px] relative" :style="e[2]">{{ e[1] }}</span>
            </li>
          </ul>
          <div class="absolute w-[130px] top-[25px] right-[25px]">
            <div class="relative">
              <span class="absolute mr-2 text-[#4c4c4c]">4.18(화) 11:09</span>
              <a href="#" @click.prevent class="inline-block absolute top-0 right-0 w-[30px] h-[30px] -mt-[5px] bg-no-repeat bg-[position:-75px_-143px] text-[0px] leading-none" :style="{'background-image': 'url(' + require('@/assets/images/Icon/img_common.png') + ')'}">
                <span class="block w-0 h-0 text-[0px] leading-none m-0 p-0 overflow-hidden text-transparent mr-2"></span>
              </a>
            </div>
          </div>
        </li>
        <li class="basis-1/2 h-full">
          <ul class="flex w-full h-full">
            <li v-for="(e, index) in Short" :key="e" class="basis-1/4 h-full p-0 border border-solid border-[#d0cece] box-border border-r-0" :class="index === 3 && 'border-r'">
              <a href="#" @mouseover="`isMouseOver${index + 1} = true`" @mouseout="`isMouseOver${index + 1} = false`" class="block box-border h-full pt-[35px] text-center no-underline bg-no-repeat bg-[center_top_35px] before:block before:w-[52px] before:h-[52px] before:mx-auto before:bg-no-repeat before:bg-inherit" :style="{'background-image': `isMouseOver${index + 1} === false` ? 'url(' + require(`@/assets/images/main/custom_c${index + 1}.png`) + ')' : 'url(' + require(`@/assets/images/main/custom_c_hover${index + 1}.png`) + ')'}">
                <p class="pt-[13px] text-base font-medium text-[#485362]">{{ e }}</p>
              </a>
            </li>
            <!-- <li class="basis-1/4 h-full p-0 border border-solid border-[#d0cece] box-border border-r-0">
              <a href="#" class="block box-border h-full pt-[35px] text-center no-underline bg-no-repeat bg-[center_top_35px] before:block before:w-[52px] before:h-[52px] before:mx-auto before:bg-no-repeat before:bg-inherit" :style="{'background-image': 'url(' + require(`@/assets/images/main/custom_c1.png`) + ')'}">
                <p class="pt-[13px] text-base font-medium text-[#485362]"></p>
              </a>
            </li> -->
          </ul>
          {{isMouseOver1}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import DataList from '@/assets/Data.json'
import ProgressBar from './ProgressBar.vue'

export default {
  name: "CustomList",
  components: {
    ProgressBar,
  },
  data() {
    return {
      Data: DataList.Custom,
      Opinions: DataList.Opinions,
      Supplement: DataList.Supplement,
      Short: DataList.Short,
      isMouseOver1: false,
      isMouseOver2: false,
      isMouseOver3: false,
      isMouseOver4: false,
    }
  },
}
</script>
<style>
  .search_btn::before{
    width: 27px;
    height: 27px;
    background-position: -255px 0;
  }
  .search_btn_image::before{
    background-image: url("@/assets/images/Icon/img_common.png");
  }
  .claim::after{
    width: 1px;
    height: 26px;
    background-position: -299px -100px;
  }
  .claim_image::after{
    background-image: url("@/assets/images/Icon/img_common.png");
  }
</style>