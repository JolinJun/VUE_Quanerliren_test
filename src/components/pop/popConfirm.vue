<template>
<div class="overlay">
  <div class="popup">
    <div class="container">
      <h4 class="title">推荐成功奖励金比例</h4>
      <p class="two-level-title">推荐好友</p>
      <ul class="tip-list">
        <li class="tip-item"></li>
        <li class="tip-item"></li>
        <li class="tip-item"></li>
      </ul>
    </div>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
export default{

}
</script>
<style>
.overlay{width:100%;height:100%;position:fixed;left:0;top:0;background:rgba(0,0,0,.5);z-index:1000}
.popup{width:80%;position:absolute;left:10%;top:30%;background:white;border-radius:6px;overflow:hidden;}
.popup .container{padding:20px 17px;}
.popup .container .title{text-align:center;color:black;font-size:15px;}
.popup .container .two-level-title{margin:14px 0;}
</style>
