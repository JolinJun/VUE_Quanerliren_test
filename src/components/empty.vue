<template>
  <div class="empty">
    <img src="../assets/images/favorite-empty.png" alt="">
    <p class="tip">{{emptyTip}}</p>
    <router-link to="./" class="look-position">看职位</router-link>
  </div>

</template>
<script type="text/ecmascript-6">
export default{
  props:{
    emptyTip:{
      type:String
    }
  }
}
</script>
<style>
.empty img{display:block;width:110px;height:115px;margin: 70px auto 0 auto;}
.empty .tip{text-align:center;margin:30px 0;color:#666;}
.empty .look-position{display:block;text-align:center;}
</style>
