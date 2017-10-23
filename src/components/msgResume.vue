<template>
<div class="msgResume-page">
  <v-header :headerMsg="headerMsg"></v-header>
  <div class="content padding-header">
    <!--没有申请进程时样式-->
    <empty :emptyTip="emptyTip" v-if="resumeList.length === 0"></empty>

    <!--有申请数据时的样式-->
    <div class="" v-else>
      <ul class="apply-list">
        <li v-for="apply in resumeList" class="flex-box border-bottom-1px apply-item">
          <div class="logo flex">
            <img :src="base64FixPre + apply.logo" alt="">
          </div>
          <div class="info flex">
            <div class="name">{{apply.positionName}}</div>
            <span class="state">{{apply.state}}</span>
            <div class="company">{{apply.companyName}}</div>
            <button class="btn" v-if="apply.state == '待上传简历'">投简历</button>
            <button class="btn" v-else-if="apply.state == '企业面试申请'">面试详情</button>
            <button class="btn" v-else-if="apply.state == '面试中'">确认面试</button>
          </div>
        </li>
      </ul>
    </div>

    <load v-show="loadingShow"></load>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
import header from './header.vue';
import empty from './empty.vue';
import load from './loading.vue'
import $C from '../assets/js/config'
export default{
  data(){
    return {
      headerMsg:'申请进程',
      emptyTip:"你目前还没有职位申请记录！",
      base64FixPre:$C.base64FixPre,
      loadingShow:true,
      resumeList:[]
    }
  },
  components:{
    'v-header':header,
    empty,
    load
  },
  methods:{
    getData(){
      let url = $C.crmBaseUrl + '/RegiserUser/GetMyPositionApply';
      this.$http.post(
        url,
        {"Accountid":'141e9e29-bb12-e711-80f7-f92ee045e9f3'}
      )
        .then(function(data){
          this.loadingShow = false;
          this.resumeList = data.body.positionapply;
        });
    }
  },
  created(){
    this.getData();
  }
}
</script>
<style>
.msgResume-page .apply-item{padding:17px 14px;position:relative;}
.msgResume-page .apply-item .logo{flex:0 0 63px;}
.msgResume-page .apply-item .logo img{width:63px;}
.msgResume-page .apply-item .info{margin-left:15px;}
.msgResume-page .apply-item .info .name{color:#000;font-weight:bold;}
.msgResume-page .apply-item .info .state{display:inline-block;padding:3px 4px;border:1px solid #4b9df9;color:#4b9df9;border-radius:3px;margin:3px 0;}
.msgResume-page .apply-item .info .btn{background:#1982fa;color:white;border-radius:3px;padding:5px 12px;position:absolute;right:14px;top:17px;}
</style>
