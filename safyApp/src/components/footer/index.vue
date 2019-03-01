<template>
  <div class="footer">
      <router-link :to="{ path: '/safeCount/safeView' }">
        <div class="footbar" :class="{'active':(nowpage=='safeView')}">
          <div class="footimg aqst"></div>
          <div class="footzi">安全视图</div>
        </div>
      </router-link>
      <router-link :to="{ path: '/safeCount/safeTask' }">
        <div class="footbar" :class="{'active':(nowpage=='safeTask')}">
          <div class="footimg aqrw"></div>
          <div class="footzi">安全任务</div>
        </div>
      </router-link>
      <router-link :to="{ path: '/safeCount/safeFun' }">
        <div class="footbar" :class="{'active':(nowpage=='safeFun')}">
          <div class="footimg aqgn"></div>
          <div class="footzi">安全功能</div>
        </div>
      </router-link>
      <router-link :to="{ path: '/safeCount/safeRule' }">
        <div class="footbar" :class="{'active':(nowpage=='safeRule')}">
          <div class="footimg aqbz"></div>
          <div class="footzi">安全标准</div>
        </div>
      </router-link>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default{
    props:['nowpage'],
    computed:{
      ...mapState(['ctx'])
  },
	}

</script>

<style>
</style>
