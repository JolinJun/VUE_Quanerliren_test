<template>
  <div class="msg-state-page padding-52">
    <v-header :headerMsg="headerMsg"></v-header>
    <ul class="state-list" v-if="msgStateList.length > 0">
      <li class="state-item border-bottom-1px" v-for="item in msgStateList">
        <div class="user flex-box">
          <img :src="item.logo" alt="" class="avatar flex">
          <span class="name flex">{{item.name}}</span>
          <div class="time flex" v-show="item.days">有效期：{{item.days}}天</div>
        </div>
        <ul class="state flex-box border-top-1px">
          <li class="progress flex" v-for="p in item.process" :class="{cur: p.isCur}">{{p.text}}</li>
          <!--<li class="progress flex">入职</li>-->
          <!--<li class="progress flex">过试用期</li>-->
        </ul>
      </li>
    </ul>

    <empty :emptyTip="emptyTip" v-if="msgStateList.length === 0"></empty>
    <loading v-show="loadingShow"></loading>
  </div>
</template>
<script type="text/ecmascript-6">
import header from '../components/header'
import loading from '../components/loading';
import $C from  '../assets/js/config';
import empty from '../components/empty'
export default{
  data(){
    return {
      headerMsg:'奖励进度',
      loadingShow:true,
      baseUrl:$C.base64FixPre,
      msgStateList:[],
      emptyTip:'你推荐的好友还没入职'
    }
  },
  components:{
    'v-header':header,
    loading,
    empty
  },
  created(){
    var url = $C.crmBaseUrl + '/Recommend/GetRecommendedRecordState';
    var that = this;
    this.$http.post(
      url,
      {"Accountid":"141e9e29-bb12-e711-80f7-f92ee045e9f3"}
    )
      .then(function(data){
        if(data.body.result.state === '0'){
          this.loadingShow = false;
          this.msgStateList = data.body.RecommendedRecordState;
          this.msgStateList.forEach(function(item){
            if(item.entrydate === '0' && typeof item.process === 'undefined'){
              that.$set(item,'process',[{'isCur':false,'text':'伯乐奖金'}, {'isCur':false,'text':'入职'}, {'isCur':false,'text':'过试用期'}])
            }
            if(item.entrydate === '1' && typeof item.process === 'undefined'){
              that.$set(item,'process',[{'isCur':true,'text':'伯乐奖金'}, {'isCur':false,'text':'入职'}, {'isCur':false,'text':'过试用期'}])
            }
            if(item.entrydate === '2' && typeof item.process === 'undefined'){
              that.$set(item,'process',[{'isCur':true,'text':'伯乐奖金'}, {'isCur':true,'text':'入职'}, {'isCur':false,'text':'过试用期'}])
            }
            if(item.entrydate === '3' && typeof item.process === 'undefined'){
              that.$set(item,'process',[{'isCur':true,'text':'伯乐奖金'}, {'isCur':true,'text':'入职'}, {'isCur':true,'text':'过试用期'}])
            }
          });
        }
      })
  }
}
</script>
<style>
  .state-item{margin-bottom:8px;}
  .state-item .user{padding:14px 14px 9px 14px;}
  .state-item .user .avatar{flex:0 0 32px;width:32px;height:32px;border-radius:50%;}
  .state-item .user .name{line-height:32px;margin-left:14px;}
  .state-item .user .time{text-align:right;line-height:32px;}
  .state-item .state .progress{text-align:center;height:21px;line-height:21px;}
  .state-item .state .progress.cur{color:white;background: #97c6fc;}
</style>
