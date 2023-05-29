<template lang="">
  <div id="app">
    <!-- :options="options" @afterLoad="afterLoad" @onLeave="onLeave" -->
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section" data-anchor="firstPage">
        <!-- <h1>First Page</h1> -->
        <div class="first-page w-full fp-auto-height h-full overflow-hidden">
          <FirstPage />
        </div>
      </div>
      <div class="section" data-anchor="secondPage">
        <!-- <h1>Second Page</h1> -->
        <div class="second-page w-full">
          <SecondPage />
        </div>
      </div>
      <div class="section" data-anchor="thirdPage">
        <!-- <h1>Third Page</h1> -->
        <div class="third-page w-full">
          <ThirdPage />
        </div>
      </div>
      <div class="section" data-anchor="forthPage">
        <!-- <h1>Forth Page</h1> -->
        <div class="forth-page w-full">
          <ForthPage />
        </div>
      </div>
      <div class="section" data-anchor="fifthPage">
        <!-- <h1>Fifth Page</h1> -->
        <div class="fifth-page w-full">
          <FifthPage />
        </div>
      </div>
      <div class="section fp-auto-height footer-area">
        <FooterArea />
      </div>
    </full-page>
  </div>
  
    <!-- <div class="first-page relative w-full">
      <SwiperSlider />
      <div class="absolute top-0 left-0 z-50">
        <HeaderTop />
        <Nav />
      </div>
    </div> -->
    <!-- <div class="first-page w-full h-screen">
      <FirstPage />
    </div> -->
    <!-- <div class="second-page w-full h-screen">
      <SecondPage />
    </div> -->
    <!-- <div class="third-page w-full h-screen">
      <ThirdPage />
    </div> -->
    <!-- <div class="forth-page w-full h-screen">
      <ForthPage />
    </div> -->
    <!-- <div class="fifth-page w-full h-screen">
      <FifthPage />
    </div> -->
    <!-- <div class="footer-area">
      <FooterArea />
    </div> -->
  
</template>
<script>
// import HeaderTop from '@/components/HeaderTop.vue'
// import Nav from '@/components/Nav.vue'
// import SwiperSlider from '@/components/SwiperSlider.vue'
import FirstPage from './FirstPage.vue'
import SecondPage from './SecondPage.vue'
import ThirdPage from './ThirdPage.vue'
import ForthPage from './ForthPage.vue'
import FifthPage from './FifthPage.vue'
import FooterArea from './FooterArea.vue'

export default {
  name: 'HomePage',
  components:{
    // HeaderTop,
    // Nav,
    // SwiperSlider,
    FirstPage,
    SecondPage,
    ThirdPage,
    ForthPage,
    FifthPage,
    FooterArea,
  },
  data() {
    return {
      options: {
        // sectionsColor: ['#41b883', '#ff5f45', '#0798ec', "orange"],
      },
    }
  },
}
</script>
<style>
  /* .section:nth-child(1){

  } */
  .section:nth-child(1){
    background-size: 100% 100%;
    background-position: center top;
  }
  .section:nth-child(2){
    background-size: 100% 65.5%;
    background-image: url('@/assets/images/main/intro_bg1.jpg');
    background-repeat: no-repeat;
    background-position: center top;
    justify-content: flex-end;
  }
  /* .section:nth-child(2).fp-table{
    justify-content: flex-end;
  } */

  .section:nth-child(4){
    background-size: 100% 100%;
    background-image: url('../assets/images/main/communi_bg.jpg');
    background-repeat: no-repeat;
    background-position: center center;
  }
  .section:nth-child(5){
    background-size: 100% 90%;
    background-image: url('@/assets/images/main/story_bg.jpg');
    background-repeat: no-repeat;
    background-position: center top;
  }
  .footer-area{
    background-size: 100% 100%;
    background-position: center top;
  }
</style>