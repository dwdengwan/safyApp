<template>
  <bm-overlay
    ref="customOverlay"
    :class="{sample: true, active}"
    pane="labelPane"
    @draw="draw">
    <div v-if="zoom<=5" class="sample2" @touchstart="handleClick()"></div>
    <div v-text="this.position.title" @touchstart="handleClick()" v-if='zoom>5' class="sample3"></div>
  </bm-overlay>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['position', 'active'],
  watch: {
    position: {
      handler () {
        //this.$refs.customOverlay.reload()
      },
      deep: true
    }
  },
  computed:{
      ...mapState(['ctx','zoom'])
  },
  mounted(){
  	//console.log(this.handleClick)
  },
  methods: {
    handleClick () {
      this.$store.commit("shuisimap",this.position);
      this.$router.push({path: '/safeCount/safeView'});
    },
    draw ({el, BMap, map}) {
      const {lng, lat} = this.position;
      const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat))
      el.style.left = pixel.x - 60 + 'px'
      el.style.top = pixel.y - 20 + 'px'
    }
  }
}
</script>

<style>
.sample {
  width: 120px;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  color: #fff;
  text-align: center;
  padding: 14px 10px;
  position: absolute;
  cursor: pointer;
}
.sample.active {
  background: rgba(0,0,0,0.75);
  color: #fff;
}

.sample>div>img{
	width: 100%;
}
#app .sample2 {
  width: 12px;
    height: 12px;
    margin: 0 auto;
    transform: translate(205%,-8%);
    background: url(../../assets/images/marker.png) no-repeat;
    background-size: 70%;
    font-size: 10px;
    line-height: 12px;
}
.sample>div{
	  width: 40px;
    height: 28px;
    margin: 0 auto;
    transform: translate(0,-50%);
    background: url(../../assets/images/shuisbj.png) no-repeat;
    background-size: 100%;
    font-size: 10px;
    line-height: 22px;

    /* background: url('../../assets/images/marker.png') no-repeat;
    font-size: 10px; */
}
#app .sample3{
   transform: translate(0,-50%);
    background: url(../../assets/images/shuisbj.png) no-repeat;
    background-size: 100%;
}
</style>
