<template>
  <div class="v-header" ref="vHeader">
      <div class="v-header-center flex-r-c">
          <div class="v-header-left flex-r">
              <img class="v-header-locationImg"  src="../assets/images/location.png" >
              <span class="now-city">廊坊</span>
              <span class="choose-city pointer">[ 切换城市 ]</span>
          </div>
          <div class="flex-r-c v-header-right">
              <div class="v-header-loginStatus">
                  <span style="display: inline-block;margin-top: 2px;">未登陆 , </span>
                  <el-link type="success pointer"   @click="linkUrl()"> 免费注册 </el-link>
              </div>
              <div>
                  <el-badge  class="pointer">
                    <span size="small">消息</span>
                  </el-badge>
              </div>
              <div class="pointer">
                  <span>商家入驻</span>
              </div>
              <div class="pointer">
                  <span>客服中心</span>
              </div>
              <div class="pointer">
                  <span>关于我们</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  watch:{},
  components:{},
  props:{},
  computed:{
  },
  methods:{},
  created(){},
  mounted(){
  	const that=this;
//	window.onscroll=function(){
//		var t = Math.floor(document.documentElement.scrollTop || document.body.scrollTop);
//		if(t>78){
//			that.$nextTick(()=>{
//				that.$refs.vHeader.style.position="fixed";
//			})
//		}else{
//			that.$refs.vHeader.style.position="static";
//		}
//	}
  }
}
</script>

<style lang="less">
@import "../assets/css/header.less";
</style>