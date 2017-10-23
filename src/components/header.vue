<template>
<div class="header">
  <div class="header-wrapper">
    <span class="icon-back" @click="back"></span>
    <h1>{{headerMsg}}</h1>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
export default{
  props:{
    headerMsg:{
      type:String
    }
  },
  methods:{
    back(){
      window.history.go(-1);
    }
  }
}
</script>
<style scoped>
  .header{position:fixed;top:0;left:0;width:100%;z-index:10}
  .header-wrapper{background:#1982fa;height:52px;line-height:52px;}
  .header h1{font-size:16px;font-weight:normal;color:white;text-align:center}
  .header .icon-back{display:block;width:21px;height:21px;position:absolute;left:15px;top:50%;margin-top:-10px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAA8BAMAAACDehesAAAAElBMVEUAAAD///////////////////8+Uq06AAAABXRSTlMAPvT6T2hiBxkAAABJSURBVCjPY0AFjGh8ITRpVTTpUDTpUDTpUDTpUDTpUDTpYDRpEzRph1FpEqQRfHT1owqopAAjPaMqwMwPaAow8hOaAoz8iKYAAEtaQWGMRiI2AAAAAElFTkSuQmCC) no-repeat 0 0;background-size:11px 21px;}
</style>
