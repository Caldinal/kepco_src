<template>
  <div v-for="(progress, index) in progressList" :key="index" class="progress">
    <div class="barOverflow">
      <div :ref="'bar' + index" class="bar"></div>
    </div>
    <!-- <span>{{ progress }}</span>% -->
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  data() {
    return {
      progressList: [100], // replace with your desired progress values
      degreesPerPercent: 1.8,
      animationDuration: 3000 // in milliseconds
    };
  },
  mounted() {
    this.animateBars();
  },
  methods: {
    animateBars() {
      (el, index) => {
        const bar = el[`bar${index}`];
        const val = el.querySelector("span");
        const perc = parseInt(val.textContent, 10);
        const p = { p: 0 };
        const animateP = (progressValue) => {
          p.p = progressValue;
          this.animateBar(bar, p, val);
        };
        animateP(0);
        let startTime = null;
        const animate = (currentTime) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          if (timeElapsed < this.animationDuration) {
            animateP(perc * (timeElapsed / this.animationDuration));
            requestAnimationFrame(animate);
          } else {
            animateP(perc);
          }
        };
        requestAnimationFrame(animate);
      };
    },
    animateBar(bar, p, val) {
      const degree = 45 + (p.p * this.degreesPerPercent);
      bar.style.transform = `rotate(${degree}deg)`;
      val.textContent = p.p | 0;
    }
  }
};
</script>

<style>
.progress{
  position: relative;
  margin: 4px;
  float:left;
  text-align: center;
}
.barOverflow{
  position: absolute;
  overflow: hidden;
  width: 100px; height: 50px;
  margin-bottom: -14px;
  top: 22px; left: 16px;
}
.bar{
  position: absolute;
  top: 0; left: 0;
  width: 100px; height: 100px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 20px solid #eee;
  border-bottom-color: #08a9f8;
  border-right-color: #08a9f8;
}
</style>
