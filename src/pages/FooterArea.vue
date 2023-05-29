<template lang="">
  <div class="relative z-[90] bg-white mt-[100]">
    <button class="top_btn opacity-0 text-[0px] cursor-pointer bg-none leading-[1.2] align-middle border-0" title="위로이동">TOP</button>
    <div class="footer_top h-[47px] border-y border-solid border-[#e5e5e5] box-border">
      <div class="relative w-[1400px] mx-auto flex justify-between">
        <div class="footer_nav inline-block">
          <ul class="overflow-hidden flex gap-x-0">
            <li v-for="(e, index) in FooterNav" :key="e">
              <a href="#" @click.prevent class="text-[#333] hover:text-[#4988e4] leading-[45px] block transition-all delay-0 duration-500" :class="index === 0 ? 'pl-0' : 'pl-5'" tabindex="0">{{ e }}</a>
            </li>
          </ul>
        </div>
        <div class="sns absolute top-0 right-[220px]">
          <ul class="overflow-hidden flex gap-x-0">
            <li v-for="(e, index) in FooterSNS" :key="e">
              <!-- bg-left-top 내가 class 에 bg-left-top 를 줘서 background position이 안 먹었던것이었다 무조건 background는 좌측 상단에 가있어서 좌측 상단에 이미지만 나왔던 것이었다 -->
              <a href="#" @click.prevent class="block w-[23px] h-[45px] mx-[5px] text-[0px] bg-no-repeat" :class="index === 0 ? 'bg-[position:0px_-89px]' : index === 1 ? 'bg-[position:-30px_-89px]' : index === 2 ? 'bg-[position:-90px_-89px]' : index === 3 ? 'bg-[position:-120px_-89px]' : 'bg-[position:-150px_-89px]'" :style="{'background-image': 'url(' + require('@/assets/images/Icon/img_common.png') + ')'}" tabindex="0">{{ e }}</a>
            </li>
          </ul>
        </div>
        <div class="familySite">
          <!-- @mouseover="isMouseover = true" @mouseout="isMouseover = false" -->
          <div class="relative">
            <button @mouseover="isMouseover = true" @mouseout="isMouseover = false" class="family_site block box-border pl-5 w-[200px] h-[45px] border-r border-l border-solid border-[#e5e5e5] !z-[500] text-left text-sm text-black font-medium leading-[1.2] align-middle cursor-pointer bg-none after:absolute after:top-[18px] after:right-5 after:w-2.5 after:h-2.5 after:bg-no-repeat after:bg-[position:-60px_-180px]">Family Site</button>
            <div class="layer_list absolute overflow-hidden w-full h-0 mt-0 mb-0 pl-5 box-border top-auto bottom-[45px] !-z-50 bg-white shadow-none text-left" :class="isMouseover === true && '!block !transition-all !duration-500 !delay-0 w-full h-[583px] pt-5 pb-5 border border-solid border-[#e5e5e5]'">
              <ul class="border-0 box-border">
                <!-- :class="isMouseover === true && 'block'" -->
                <li class="group_layer mb-2.5 pb-2.5 border-b border-dotted border-[#ccc]">
                  <span class="group_title block overflow-hidden mb-2 font-medium text-[#2880ae]">전력그룹사</span>
                  <ul>
                    <li v-for="e in GroupLayer" :key="e">
                      <a href="#" @click.prevent class="text-[#454545]" target="_blank" title="새창열림" tabindex="0">{{ e }}</a>
                    </li>
                  </ul>
                </li>
                <li class="site_layer">
                  <span class="site_title block mb-2 font-medium text-[#2880ae]">관련사이트</span>
                  <ul>
                    <li v-for="e in SiteLayer" :key="e">
                      <a href="#" @click.prevent class="text-[#454545]" target="_blank" title="새창열림" tabindex="0">{{ e }}</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_bottom mt-[22px] overflow-hidden">
      <div class="w-[1400px] mx-auto flex justify-between gap-x-0">
        <h1 class="footer_logo w-[200px] h-[26px] mt-4 mr-[15px] text-[0px] text-transparent bg-no-repeat bg-[position:0px_-50px]" :style="{'background-image': 'url(' + require('@/assets/images/Icon/img_common.png') + ')'}">
          <a href="#" @click.prevent tabindex="0">KEPCO</a>
        </h1>
        <div class="address relative box-border py-3.5 px-3">
          <p class="text-[13px] text-[#333] after:absolute after:top-4 after:right-0 after:w-[1px] after:h-[43px] after:bg-[#ccc]">
            (우) 58322 전라남도 나주시 전력로 55 (빛가람동 120) Copyright@2019 KEPCO. All Rights Reserved.
            <br />
            안내번호 : 
            <a href="#" @click.prevent title="안내 전화번호" tabindex="0" class="text-[#454545]">061-345-3114</a>
            당직상황실(야간 및 주말,공휴일) : 
            <a href="#" @click.prevent title="당직상황실(야간 및 주말,공휴일) 전화번호" tabindex="0" class="text-[#454545]">061-345-3203</a>
          </p>
        </div>
        <div class="custom_center relative flex box-border py-3.5 px-3 overflow-hidden">
          <p class="text-[13px] text-[#333]">
            24시간 전기상담고객센터(전기상담, 고장신고)
            <br />
            휴대폰 : 지역번호 +123 (유료)
          </p>
          <a href="#" @click.prevent tabindex="0" class="relative top-[7px] ml-5 inline-block leading-[7px] text-[#454545]">
            국번없이 
            <br />
            (유료)
            <span class="text-[44px] relative top-0 left-3.5 text-[#fb3b14] font-medium leading-[7px]">123</span>
          </a>
        </div>
        <div class="mark pt-[7px] pr-0 pb-3.5 pl-3 w-auto h-auto top-auto left-auto relative flex box-border">
          <a href="#" @click.prevent title="한국웹접근성평가센터 인증현황 바로가기_새창" target="_blank" tabindex="0" class="mr-2.5 block">
            <img src="@/assets/images/Icon/web_mark.jpg" alt="국가공인 웹 접근성 품질인증마크" class="align-middle border-0">
          </a>
          <a href="#" @click.prevent title="KEPCO QR CODE(한국전력공사 모바일 웹사이트로 이동)" tabindex="0" class="block">
            <img src="@/assets/images/Icon/qr_code.jpg" alt="KEPCO QR코드 (http://m.site.naver.com/0xuhR)" class="align-middle border-0">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DataList from '@/assets/Data.json'
export default {
  name: 'FooterArea',
  data() {
    return {
      FooterNav: DataList.FooterNav,
      FooterSNS: DataList.FooterSNS,
      GroupLayer: DataList.GroupLayer,
      SiteLayer: DataList.SiteLayer,
      isMouseover: false,
    }
  },
}
</script>
<style>
  .family_site::after{
    background-image: url('@/assets/images/Icon/img_common.png');
  }
</style>