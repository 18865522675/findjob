<template>
  <div class='v-search'>
      <div class="v-search-center flex-r">
          <img src="../assets/images/zhaopinLogo.png" alt="" class="searchLogo">
          <div class="searchInp">
               <el-input placeholder="请输入内容"   clearable v-model="input">
                    <template slot="append"   @click="linkUrl()">
                        搜索
                    </template>
                </el-input>
          </div>
          <div style="margin-left: 10px;">
              <el-button type="default"   @click="linkUrl()">免费发布需求</el-button>
          </div>
          <span style="color:rgba(155,155,155,1)">或</span>
          <div>
              <el-button type="default"   @click="linkUrl()">免费找官方推荐</el-button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
        input:""
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
@import url("../assets/css/search.less");
</style>