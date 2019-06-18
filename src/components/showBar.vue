<template>
  <div class="v-showBar">
      <div class="v-showBar-center flex-r-c">
            <div class="v-showBar-item"  @click="linkUrl(true,'http://guest.shuidashi.com/index.html?agentId=14927')">
                <div>
                    <img src="../assets/images/shuiwu.png" alt="">
                </div>
                <span>税务筹划</span>
            </div>
            <div class="v-showBar-item"  @click="linkUrl()">
                <div>
                    <img src="../assets/images/jianzhi.png" alt="">
                </div>
                <span>兼职平台</span>
            </div>
            <div class="v-showBar-item" @click="linkUrl(true,'http://lf.firecc.cn/login')">
                <div>
                    <img src="../assets/images/xiaofang.png" alt="">
                </div>
                <span>智慧消防</span>
            </div>
            <div class="v-showBar-item"   @click="linkUrl()">
                <div>
                    <img src="../assets/images/guanggao.png" alt="">
                </div>
                <span>广告咨询</span>
            </div>
            <div class="v-showBar-item"   @click="linkUrl()">
                <div>
                    <img src="../assets/images/keji.png" alt="">
                </div>
                <span>科技楼宇</span>
            </div>
            <div class="v-showBar-item"   @click="linkUrl()">
                <div>
                    <img src="../assets/images/quanbu.png" alt="">
                </div>
                <span>全部分类</span>
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
  methods:{
  },
  created(){},
  mounted(){}
}
</script>

<style lang="less" scoped>
.v-showBar{
    .v-showBar-center{
        width: 1200px;
        height:185px;
        background:rgba(255,255,255,1);
        box-shadow:0px 2px 12px 2px rgba(226,226,226,0.5);
        margin: 0 auto;
        justify-content: space-between;
        margin-top: 30px;
    }
    .v-showBar-item{
        flex:1;
        display: flex;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        &>div{
          height: 70px;  
          display: flex;
          align-items: center;
        };
        span{
            display: block;
            font-weight: bold;
            font-family:PingFang-SC-Medium;
            color:rgba(34,34,34,1);
            font-size: 16px;
            line-height: 40px;          
        }
    }
}
</style>