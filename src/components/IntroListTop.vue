<template lang="">
  <div>
    <ul class="w-[1400px] h-[200px] mx-auto flex justify-center mt-2.5 mb-[50px] overflow-hidden">
      <li v-for="(e, index) in 4" :key="index" class="intro relative basis-1/4 pt-2.5 text-center" :class="index !== 3 && 'after:w-[1px] after:h-[156px] after:bg-white after:absolute after:top-0 after:right-0'" :style="{'background-image': 'url(' + require(`@/assets/images/intro/intro0${index + 1}.png`) + ')'}">
        <a href="#" @click.prevent class="block pt-[112px]">
          <p class="text-[22px] mb-[5px] text-black">{{ Data[0][index] }}</p>
          <span class="block text-sm text-black">
            {{ Data[1][index] }}
            <br/>
            {{ Data[2][index] }}
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import DataList from '@/assets/Data.json'
export default {
  name: "IntroListTop",
  data() {
    return {
      Data : DataList.Intro,
    }
  },
}
</script>
<style>
  .intro{
    /* background-image: url(@/assets/images/intro/intro01.png); */
    background-repeat: no-repeat;
    background-position: top center;
  }
</style>