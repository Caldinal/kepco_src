<template lang="">
<!-- <vue-ellipse-progress :progress="50" /> -->
  <!-- <vue-ellipse-progress 
  :data="circles"                    
  :progress="progress"
  :angle="-90"
  color="blue"
  :colorFill="colorFillGradient"
  emptyColor="#8ec5fc"
  :emptyColorFill="emptyColorFillGradient"                      
  :size="300"
  :thickness="10"
  emptyThickness="10%"
  lineMode="in 10"
  :legend="true"
  :legendValue="180"
  legendClass="legend-custom-style"
  dash="60 0.9"
  animation="reverse 700 400"
  :noData="false"
  :loading="false"                      
  fontColor="white"
  :half="false"
  :gap="10"
  dot="10 blue"
  fontSize="5rem">
  
  <span slot="legend-value">/200</span>
  <p slot="legend-caption">GOOD JOB</p>
  
</vue-ellipse-progress> -->
<!-- <ve-progress 
  :progress="progress"
  :data="circles"
  :angle="0"
  color="#0aa8f6"
  :color-fill="colorFillGradient"
  empty-color="gray"
  :empty-color-fill="emptyColorFillGradient"                      
  :size="100"
  :thickness="20"
  empty-thickness="20"
  line-mode="center 10"
  line-position="out 10"
  empty-line-position="in"
  :hide-legend="false"
  :legend="180"
  :legend-formatter="({currentValue}) => new Intl.NumberFormat('de-DE').format(currentValue)"
  legend-class="legend-custom-style"
  dash="60 0.9"
  animation="reverse 700 400"
  :noData="false"
  :loading="false"  
  :loader="{ color: 'green' }"                    
  font-color="white"
  :half="true"
  :gap="10"
  dot="10 #0aa8f6"
  reverse
  font-size="5rem"
  class="w-[140px] h-[100px] absolute top-[26px] left-5"
  >
  
  <template #legend>
    <span>/200</span>
  </template>
  <template #legend-caption>
    <p>TASKS DONE</p>
  </template>
  
</ve-progress> -->
<!-- <div class="progress">
  <div class="barOverflow">
    <div class="bar"></div>
  </div>
  <span>100</span>%
</div> -->

<!-- <div class="progress-wrapper">
    <svg class="progress-circle">
      <circle class="progress-background" :cx="radius" :cy="radius" :r="radius" />
      <circle class="progress-foreground" :cx="radius" :cy="radius" :r="radius" :stroke-dasharray="circumference" :stroke-dashoffset="circumference - progress" />
    </svg>
    <div class="progress-text">{{ progress }}%</div>
  </div> -->




  <div class="progress">
    <div class="barOverflow">
      <div class="bar" :style="{ transform: 'rotate(' + rotation + 'deg)' }"></div>
    </div>
    <span>{{ percentage }}</span>%
  </div>



</template>
<script>

// export default {
//   name: "ProgressBar",
//   components:{
//   },
  
// }



// $(".progress").each(function(){
  
//   var $bar = $(this).find(".bar");
//   var $val = $(this).find("span");
//   var perc = parseInt( $val.text(), 10);

//   $({p:0}).animate({p:perc}, {
//     duration: 3000,
//     easing: "swing",
//     step: function(p) {
//       $bar.css({
//         transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
//         // 45 is to add the needed rotation to have the green borders at the bottom
//       });
//       $val.text(p|0);
//     }
//   });
// });

// export default {
//   data() {
//     return {
//       progress: 0,
//     };
//   },
//   mounted() {
//     this.animateProgress();
//   },
//   methods: {
//     animateProgress() {
//       let i = 0;
//       const intervalId = setInterval(() => {
//         if (i < 51) {
//           this.progress = i * 2;
//           i++;
//         } else {
//           clearInterval(intervalId);
//         }
//       }, 20);
//     },
//   },
// };





export default {
  data() {
    return {
      radius: 50,
      circumference: Math.PI * 100,
      progress: 0,
    };
  },
  mounted() {
    this.animateProgress();
  },
  methods: {
    animateProgress() {
      let i = 0;
      const intervalId = setInterval(() => {
        if (i <= 100) {
          this.progress = i;
          i++;
        } else {
          clearInterval(intervalId);
        }
      }, 20);
    },
  },
};


// document.querySelectorAll(".progress").forEach(function(progress) {
//   var bar = progress.querySelector(".bar");
//   var val = progress.querySelector("span");
//   var perc = parseInt(val.textContent, 10);
//   var p = {p: 0};
//   var animation = function() {
//     var degree = 45 + (p.p * 1.8);
//     bar.style.transform = "rotate(" + degree + "deg)";
//     val.textContent = p.p | 0;
//   };
//   var animateP = function(progressValue) {
//     p.p = progressValue;
//     animation();
//   };
//   animateP(0);
//   var startTime = null;
//   var animate = function(currentTime) {
//     if (startTime === null) startTime = currentTime;
//     var timeElapsed = currentTime - startTime;
//     if (timeElapsed < 3000) {
//       animateP(perc * (timeElapsed / 3000));
//       requestAnimationFrame(animate);
//     } else {
//       animateP(perc);
//     }
//   };
//   requestAnimationFrame(animate);
// });




// const progressBars = document.querySelectorAll('.progress');

// progressBars.forEach(progressBar => {
//   const bar = progressBar.querySelector('.bar');
//   const value = progressBar.querySelector('span');
//   const perc = parseInt(value.textContent, 10);

//   let p = { value: 0 };
//   const animation = anime({
//     targets: p,
//     value: perc,
//     duration: 3000,
//     easing: "linear",
//     update: function() {
//       bar.style.transform = `rotate(${45 + p.value * 1.8}deg)`;
//       value.textContent = Math.floor(p.value);
//     }
//   });
// });


</script>
<style>
  /* .progress{
  position: relative;
  margin: 4px;
  float:left;
  text-align: center;
}
.barOverflow{ Wraps the rotating .bar
  position: relative;
  overflow: hidden; Comment this line to understand the trick
  width: 90px; height: 45px; Half circle (overflow)
  margin-bottom: -14px; bring the numbers up
}
.bar{
  position: absolute;
  top: 0; left: 0;
  width: 90px; height: 90px; full circle!
  border-radius: 50%;
  box-sizing: border-box;
  border: 5px solid #eee;     half gray,
  border-bottom-color: #0bf;  half azure
  border-right-color: #0bf;
} */


/* .progress-wrapper {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 50px auto;
}

.progress-circle {
  width: 100%;
  height: 50%;
}

.progress-background {
  fill: transparent;
  stroke: #ccc;
  stroke-width: 5;
}

.progress-foreground {
  fill: transparent;
  stroke: #007aff;
  stroke-width: 5;
  stroke-linecap: round;
  transform-origin: center;
  transform: rotate(-90deg);
  transition: stroke-dashoffset 1s;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  font-weight: bold;
  color: #007aff;
} */



.progress {
  position: relative;
  margin: 4px;
  float: left;
  text-align: center;
}

.barOverflow {
  /* Wraps the rotating .bar */
  position: relative;
  overflow: hidden; /* Comment this line to understand the trick */
  width: 90px;
  height: 45px; /* Half circle (overflow) */
  margin-bottom: -14px; /* bring the numbers up */
}

.bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 90px;
  height: 90px; /* full circle! */
  border-radius: 50%;
  box-sizing: border-box;
  border: 5px solid #eee; /* half gray, */
  border-bottom-color: #0bf; /* half azure */
  border-right-color: #0bf;
}


</style>