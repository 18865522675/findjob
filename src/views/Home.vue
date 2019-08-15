<template>
  <div class="v-home">
  	<vHeader></vHeader>
    <div class="v-home-center">
      <vSearch></vSearch>
      <vShowBar></vShowBar>
      <div class="homeContent flex-r">
          <div class="homeContent-left flex-r">
            <div class="homeContent-left-item marB30"  style="width:230px"   @click="linkUrl(true,'http://guest.shuidashi.com/index.html?agentId=14927')">
              <div class="bigTitle">
                税务统筹
              </div>
              <span class="subTitle">
                Tax Penalty
              </span>
              <div class="rangeBox">
                <div>
                  工商服务
                </div>
                <div>
                  财税服务
                </div>
                <div>
                  资质许可
                </div>
                <div>
                  税筹服务
                </div>
              </div>
            </div>
            

            <div class="homeContent-left-item marB30" style="width:620px"   @click="linkUrl()">
              <div class="bigTitle">
                兼职平台
              </div>
              <span class="subTitle">
                Part-Time
              </span>
              <div class="rangeBox">
                <div>
                  普工/技工
                </div>
                <div>
                  仓储/物流
                </div>
                <div>
                  前台/接待
                </div>
                <div>
                  仓库管理
                </div>
                <div>
                  快递员
                </div>
                <div>
                  服务员
                </div>
                <div>
                  收银员
                </div>
                <div>
                  营业员
                </div>
                <div>
                  销售
                </div>
                <div>
                  文员
                </div>
                <div>
                  厨师
                </div>
                <div>
                  前台
                </div>
                <div>
                  司机
                </div>
                <div>
                  客服
                </div>
                <div>
                  导购
                </div>
                <div>
                  促销
                </div>
                <div>
                  保洁
                </div>
                <div>
                  保姆
                </div>
                <div>
                  保安
                </div>
              </div>
            </div>

            <div class="homeContent-left-item"   style="width:260px"   @click="linkUrl()">
              <div class="bigTitle">
                科技楼宇
              </div>
              <span class="subTitle">
                Technology
              </span>
              <div class="rangeBox">
                <div>
                  建筑智能化工程
                </div>
                <div>
                  施工
                </div>
                <div>
                  弱电工程
                </div>
                <div>
                  网络工程设计
                </div>
              </div>
            </div>

            <div class="homeContent-left-item"   style="width:300px"   @click="linkUrl()">
              <div class="bigTitle">
                广告咨询
              </div>
              <span class="subTitle">
                Advertisement
              </span>
              <div class="rangeBox">
                <div>
                  商务信息咨询
                </div>
                <div>
                  市场营销策划
                </div>
                <div>
                  企业管理咨询
                </div>
                <div>
                  会议及展示服务
                </div>
                <div>
                  日常百货
                </div>
              </div>
            </div>

            <div class="homeContent-left-item"   style="width:260px"   @click="linkUrl(true,'http://lf.firecc.cn/login')">
              <div class="bigTitle">
                智慧消防
              </div>
              <span class="subTitle">
                Fire Protection
              </span>
              <div class="rangeBox">
                <div>
                  智能温控系统
                </div>
                <div>
                  智慧消防系统工程
                </div>
                <!--<div>
                  资质许可
                </div>
                <div>
                  税筹服务
                </div>-->
              </div>
            </div>
          </div>
          <div class="homeContent-right">
            <div>
              <img src="../assets/images/avator.png" alt="">
            </div>
            <div class="homeContent-welcome">
              hi，欢迎来到招聘者
            </div>
            <div class="homeContent-right-btns">
                <div>
                  <el-button type="success"   @click="linkUrl()">登陆</el-button>
                </div>
                <div class="marT20">
                  <el-button type="default"   @click="linkUrl()">注册</el-button>
                </div>
            </div>
            <div class="homeContent-right-needs marT30">
              <div class="homeContent-right-need">
                  <span class="homeContent-right-need-border">
                    我有需求
                  </span>    
                  <div class="homeContent-right-need-con  flex-r  marT20">
                    <el-input  placeholder="请输入您的需求"></el-input>
                    <el-button  class="primaryColorBtn isPlain" plain   @click="linkUrl()">免费报价</el-button>
                  </div>              
              </div>
              <div class="homeContent-right-need  marT30">
                  <span class="homeContent-right-need-border">
                    我有技能
                  </span>    
                  <div  class="homeContent-right-need-con flex-r marT20">
                    <el-input placeholder="请输入您的技能"></el-input>
                    <el-button class="primaryColorBtn"   @click="linkUrl()">立即入驻</el-button>
                  </div>              
              </div> 
            </div>
          </div>
      </div>
    </div>
    <vFooter></vFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import header from "@/components/header";
import footer from "@/components/footer";
import search from "@/components/search";
import showBar from "@/components/showBar";
import { win32 } from 'path';
export default {
  name: 'home',
  components:{
    vHeader:header,
    vFooter:footer,
    vSearch:search,
    vShowBar:showBar
  }
}
</script>
<style lang="less">
  @import url("../assets/css/home.less");
  .v-home-center  {
    padding: 30px;
  }
</style>
