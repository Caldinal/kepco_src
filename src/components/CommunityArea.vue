<template lang="">
  <div class="community_area w-full flex justify-between">
    <div class="youtube relative box-border basis-[335px] h-[442px] overflow-hidden group">
      <div  class="back_bg group-hover:scale-[120%] w-full h-full bg-cover bg-center transition-all delay-0 duration-1000" :style="{'background-image': 'url(' + require('@/assets/images/main/communi_bg3.jpg') + ')'}"></div>
      <div class="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 box-border pt-[30px] w-full h-full transition-all delay-0 duration-500 text-center text-black">
        <p class="mt-[15px] mb-[55px] text-[23px] leading-[1.2] font-semibold before:absolute before:top-[50px] before:left-1/2 before:-ml-2 before:mt-10 before:w-[15px] before:h-0.5 before:bg-black before:rounded-[3px]">
          소셜미디어
        </p>
        <a href="#" @click.prevent class="no-underline">
          <p class="hidden"></p>
          <p class="text-[18px] text-black leading-7 mb-[122px]">
            정보와 재미, 감동까지 만나는
            <br />
            KEPCO 유튜브,
            <br />
            페이스북, 인스타그램, 블로그
          </p>
        </a>
        <span class="block w-[300px] h-[71px] mt-[113px] mx-auto bg-[position:-300px_0]" :style="{'background-image': 'url(' + require('@/assets/images/main/ico_main.png') + ')'}"></span>
      </div>
    </div>
    <div class="facebook relative box-border basis-[335px] h-[442px] overflow-hidden group">
      <div class="back_bg group-hover:scale-[120%] w-full h-full bg-cover bg-center transition-all delay-0 duration-1000" :style="{'background-image': 'url(' + require('@/assets/images/main/communi_bg2.jpg') + ')'}"></div>
      <div class="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 box-border pt-[30px] w-full h-full transition-all delay-0 duration-500 text-center text-black">
        <p class="mt-[15px] mb-[55px] text-[23px] leading-[1.2] font-semibold before:absolute before:top-[50px] before:left-1/2 before:-ml-2 before:mt-10 before:w-[15px] before:h-0.5 before:bg-black before:rounded-[3px]">
          사보
        </p>
        <p class="text-black mb-[95px] text-lg">
          한전이 들려주는 따뜻한 이야기,
          <br />
          사외보 ＜빛으로 여는 세상＞
          <br />
          사내보 ＜월간 KEPCO＞
        </p>
        <a href="#" @click.prevent class="point_btn relative inline-block w-[197px] h-[40px] mx-auto my-2.5 py-2 pr-[65px] pl-5 -indent-[7px] no-underline text-center border border-solid border-black transition-all delay-0 duration-500 text-[15px] text-black bg-no-repeat bg-white bg-[position:10px_10px] after:absolute after:top-[13px] after:right-[15px] after:w-[19px] after:h-3 after:bg-no-repeat after:bg-[position:-30px_-150px]" :style="{'background-image': 'url(' + require('@/assets/images/main/light_world.png') + ')'}"></a>
        <a href="#" @click.prevent class="point_btn relative inline-block w-[197px] h-[40px] mx-auto py-2 pr-[65px] pl-5 no-underline text-left border border-solid border-black transition-all delay-0 duration-500 text-[15px] text-black bg-no-repeat bg-white bg-[position:10px_12px] after:absolute after:top-[13px] after:right-[15px] after:w-[19px] after:h-3 after:bg-no-repeat after:bg-[position:-30px_-150px]" :style="{'background-image': 'url(' + require('@/assets/images/main/kepco_link_bt.png') + ')'}"></a>
      </div>
    </div>
    <div class="bodo relative box-border basis-[335px] h-[442px] overflow-hidden group">
      <div class="back_bg group-hover:scale-[120%] w-full h-full bg-cover bg-center transition-all delay-0 duration-1000" :style="{'background-image': 'url(' + require('@/assets/images/main/communi_bg4.jpg') + ')'}"></div>
      <div class="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 box-border pt-[30px] w-full h-full transition-all delay-0 duration-500 text-center text-black">
        <p class="mt-[15px] mb-[55px] text-[23px] leading-[1.2] font-semibold before:absolute before:top-[50px] before:left-1/2 before:-ml-2 before:mt-10 before:w-[15px] before:h-0.5 before:bg-black before:rounded-[3px]">
          보도·해명 자료
        </p>
        <ul class="mt-2.5 list-none">
          <li v-for="(e, index) in BodoList.title" :key="e" class="py-1.5 border-b border-solid border-[#404040]" :class="index === 2 && 'border-b-0'">
            <a href="#" @click.prevent class="block no-underline" title=e tabindex="0">
              <p class="bodo text-[17px] h-[45px] break-words my-1.5 px-9 text-black font-medium leading-[1.4] before:absolute before:top-[50px] before:left-1/2 before:-ml-2 before:mt-10 before:w-[15px] before:h-0.5 before:bg-black before:rounded-[3px] before:text-[17px]">
                {{ e }}
              </p>
              <span class="block my-2 text-[#282828] text-center text-[13px] overflow-auto">{{ BodoList.date[index] }}</span>
            </a>
          </li>
        </ul>
        <a href="#" @click.prevent class="plus_btn top-[37px] right-[15px] absolute w-[45px] h-[45px] overflow-hidden text-transparent text-[15px] no-underline before:absolute before:top-[14px] before:left-[14px] before:w-4 before:h-4 before:bg-no-repeat before:bg-[position:-30px_-180px] before:bg-inherit"></a>
      </div>
    </div>
    <div class="blog relative box-border basis-[335px] h-[442px] overflow-hidden group">
      <div class="back_bg group-hover:scale-[120%] w-full h-full bg-cover bg-center transition-all delay-0 duration-1000" :style="{'background-image': 'url(' + require('@/assets/images/main/communi_bg1.jpg') + ')'}"></div>
      <a href="#" @click.prevent class="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 block box-border pt-[30px] w-full h-full transition-all delay-0 duration-500 text-center text-black no-underline">
        <p class="mt-[15px] mb-[55px] text-[23px] leading-[1.2] font-semibold before:absolute before:top-[50px] before:left-1/2 before:-ml-2 before:mt-10 before:w-[15px] before:h-0.5 before:bg-black before:rounded-[3px]">
          대국민 아이디어 공모
        </p>
        <p class="mb-[122px] text-lg text-black">
          우리가 꿈꾸는 더 나은 세상,
          <br />
          여러분의 아이디어를
          <br />
          기다립니다.
        </p>
        <span class="point_btn bg-white w-[197px] h-10 text-left relative inline-block py-2 pr-[65px] pl-[20px] border border-solid border-black transition-all delay-0 duration-500 text-[15px] text-black !font-light after:absolute after:top-[13px] after:right-[15px] after:w-[19px] after:h-3 after:bg-no-repeat after:bg-[position:-30px_-150px]" >
          KEPCO CROWD
        </span>
      </a>
    </div>
  </div>
</template>
<script>
import DataList from '@/assets/Data.json'
export default {
  name: "CommunityArea",
  data() {
    return {
      BodoList: DataList.Bodo,
      isHover: false,
    }
  },
}
</script>
<style>
  .point_btn::after{
    background-image: url('@/assets/images/Icon/img_common.png');
  }
  .bodo{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .plus_btn::before{
    background-image: url('@/assets/images/Icon/img_common.png');
  }
</style>