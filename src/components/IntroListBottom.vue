<template lang="">
  <div class="w-full h-[419px]">
    <ul class="w-full h-full overflow-hidden flex justify-center">
      <li class="basis-[31%] h-full" :style="{'background-image': 'url(' + require('@/assets/images/main/intro_bg2.jpg') + ')'}">
        <a href="#" @click.prevent class="relative block h-full box-border pt-[50px] pr-5 text-right">
          <div class="relative w-full h-full">
            <div class="absolute top-0 right-0 text-left inline-block">
              <h3 class="text-[25px] font-medium text-white ml-4">CEO 인사말</h3>
              <p class="text-[17px] leading-6 py-[18px] ml-[15px]">
                한국전력에 늘 따뜻한 관심과
                <br />
                성원을 보내주셔서 고맙습니다.
              </p>
              <p class="text-sm leading-[18px] text-black pt-0 mb-[25px] ml-[15px] hidden 2xl:block">
                좋은 일자리 창출,
                <br />
                지역상생, 중소기업과의 동반성장,
                <br />  
                어려운 이웃을 살피는 국민의 기업으로서
                <br />
                늘 여러분과 함께 하겠습니다.
              </p>
              <span class="point_btn point_btn_image absolute top-[295px] right-[45px] inline-block w-[60px] h-[60px] border border-white border-solid before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2"></span>
            </div>
          </div>
        </a>
      </li>
      <li class="basis-[39%] h-full pt-0 overflow-hidden bg-white">
        <ul class="flex w-full h-full justify-center">
          <li class="relative basis-1/2 pt-[37px] pr-[26px] pb-0 pl-[30px]">
            <h3 class="text-[25px] text-black">공지사항</h3>
            <ul class="mt-5">
              <li class="pb-[15px] border-b-[1px] border-b-[#dcdcdc]">
                <a href="#" @click.prevent class="block no-underline hover:underline">
                  <p class="text-[17px] text-[#1546a1] leading-[1.3rem] h-[2.8rem] mb-2.5">'23년 제2차 사외공모 위탁연구개발과제 수행기관 공모</p>
                  <span class="text-[13px] text-[#4c4c4c]">2023.04.11</span>
                </a>
              </li>
              <li class="pt-2.5 pb-[15px] border-b-[1px] border-b-[#dcdcdc]">
                <a href="#" @click.prevent class="block no-underline hover:underline">
                  <p class="text-[17px]  text-[#1546a1] leading-[1.3rem] h-[2.8rem] mb-2.5">(한국전력) 2023년 신규 R&D 추진계획</p>
                  <span class="text-[13px] text-[#4c4c4c]">2023.04.07</span>
                </a>
              </li>
              <li class="pt-2.5 pb-[15px]">
                <a href="#" @click.prevent class="block no-underline hover:underline">
                  <p class="text-[17px]  text-[#1546a1] leading-[1.3rem] h-[2.8rem] mb-2.5">'23년 제1차 사외공모 위탁연구개발과제 수행기관 연장...</p>
                  <span class="text-[13px] text-[#4c4c4c]">2023.04.06</span>
                </a>
              </li>
            </ul>
            <a href="#" @click.prevent class="plus_btn plus_btn_image absolute w-[45px] h-[45px] overflow-hidden text-transparent text-[15px] p-0 no-underline top-[34px] right-2.5 before:absolute before:top-[14px] before:left-[14px]"></a>
          </li>
          <li class="basis-1/2 pt-[22px] pr-[25px] pb-[20px] pl-[15px] box-border">
            <div class="relative w-full h-full">
              <div class="relative overflow-hidden w-[316px] h-[375px]">
                <IntroSlider />
              </div>
            </div>
          </li>
        </ul>
      </li>
      <li class="basis-[31%] h-full" :style="{'background-image': 'url(' + require('@/assets/images/main/intro_bg3.jpg') + ')'}">
        <a href="#" @click.prevent class="relative block box-border h-full pt-[50px] pl-[50px] no-underline">
          <div>
            <h3 class="text-[25px] font-medium text-white">인재채용</h3>
            <p class="text-base w-[150px] pt-12 text-black">
              한국전력과 함께 꿈을
              <br />
              펼쳐 나아갈 인재를 모십니다.
            </p>
            <span class="point_btn point_btn_image absolute top-[295px] left-[50px] inline-block w-[60px] h-[60px] border border-white border-solid before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2"></span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import IntroSlider from './IntroSlider.vue'
export default {
  name: "IntroListBottom",
  components: {
    IntroSlider,
  },
}
</script>
<style>
  .plus_btn::before{
    width: 16px;
    height: 16px;
    background-position: -30px -180px;
  }
  .plus_btn_image::before{
    background-image: url("@/assets/images/Icon/img_common.png");
  }
  .point_btn::before{
    width: 19px;
    height: 12px;
    background-position: 0 -150px;
  }
  .point_btn_image::before{
    background-image: url("@/assets/images/Icon/img_common.png");
  }
</style>