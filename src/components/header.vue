<template>
  <div class="v-header">
      <div class="v-header-center flex-r-c">
          <div class="v-header-left flex-r">
              <img class="v-header-locationImg"  src="../assets/images/location.png" >
              <span class="now-city">杭州</span>
              <span class="choose-city pointer">[ 切换城市 ]</span>
          </div>
          <div class="flex-r-c v-header-right">
              <div class="v-header-loginStatus">
                  <span>未登陆 , </span>
                  <el-link type="success pointer"   @click="linkUrl()"> 免费注册 </el-link>
              </div>
              <div>
                  <el-badge :value="3" class="pointer">
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
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>

<style lang="less">
@import "../assets/css/header.less";
</style>