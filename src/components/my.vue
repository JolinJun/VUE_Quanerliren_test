<template>
<div class="my-page">
  <div class="my-info">
    <div class="bg">
      <img :src="background" alt="">
      <div class="upload-bg">
        <input type="file">
        <span>墙纸</span>
      </div>
    </div>
    <div class="info">
      <div class="upload-avatar">
        <img :src="avatar" alt="" class="avatar">
        <input type="file">
        <p class="name">{{name}}</p>
      </div>
    </div>
  </div>
  <ul class="list-menu">
    <li class="border-bottom-1px menu-item">
      <router-link to="" class="flex-box">
        <em class="icon icon-fav flex"></em>
        <div class="flex">我的收藏</div>
        <em class="icon icon-right flex"></em>
      </router-link>
    </li>
    <li class="border-bottom-1px menu-item">
      <router-link to="" class="flex-box">
        <em class="icon icon-profile flex"></em>
        <div class="flex">我的资料</div>
        <em class="icon icon-right flex"></em>
      </router-link>
    </li>
    <li class="border-bottom-1px menu-item">
      <router-link to="" class="flex-box">
        <em class="icon icon-record flex"></em>
        <div class="flex">我的奖金</div>
        <em class="icon icon-right flex"></em>
      </router-link>
    </li>
    <li class="border-bottom-1px menu-item">
      <router-link to="" class="flex-box">
        <em class="icon icon-friend flex"></em>
        <div class="flex">我的好友</div>
        <em class="icon icon-right flex"></em>
      </router-link>
    </li>
    <li class="border-bottom-1px menu-item">
      <router-link to="" class="flex-box">
        <em class="icon icon-setting flex"></em>
        <div class="flex">设置</div>
        <em class="icon icon-right flex"></em>
      </router-link>
    </li>
    <li class="border-bottom-1px menu-item">
      <router-link to="" class="flex-box">
        <em class="icon icon-service flex"></em>
        <div class="flex">客服</div>
        <em class="icon icon-right flex"></em>
      </router-link>
    </li>
  </ul>
  <v-footer></v-footer>
</div>
</template>
<script type="text/ecmascript-6">
import footer from './footer';
import $C from '../assets/js/config';
export default{
  name:'my',
  data(){
    return{
      background:'',
      name:'',
      avatar:'',
      records:0
    }
  },
  components:{
    'v-footer':footer
  },
  created(){
    var url = $C.crmBaseUrl + '/RegiserUser/GetHeadBackPic';
    this.avatar = 'http://quanerliren.oss-cn-shanghai.aliyuncs.com/UserHeadPortrait/avatar.png'
    this.background = 'http://quanerliren.oss-cn-shanghai.aliyuncs.com/UserBackGround/bg-my.jpg'
    this.$http.post(
      url,
      {"Accountid":"141e9e29-bb12-e711-80f7-f92ee045e9f3"}
      ).then( data => {
      this.name = data.body.name;
      this.avatar = $C.base64FixPre + data.body.head;
      this.background = $C.base64FixPre + data.body.background;
//      this.records = this.body.records;
    } )
  }
}
</script>
<style>
  .my-page .my-info{height:200px;position:relative;}
  .my-page .bg{width:100%;height:200px;overflow:hidden;position:relative}
  .my-page .bg img{display:block;width:100%;}
  .my-page .bg .upload-bg{position:absolute;right:10px;top:10px;}
  .my-page .bg .upload-bg input{position:absolute;right:0;top:0;opacity:0;z-index:2}
  .my-page .bg .upload-bg span{color:white;z-index:1}
  .my-page .info{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);}
  .my-page .info .upload-avatar{position:relative;}
  .my-page .info img{width:88px;height:88px;border-radius:50%;}
  .my-page .info input{width:88px;height:88px;display:block;position:absolute;left:0;top:0;opacity:0;}
  .my-page .info .name{color:white;text-align:center;font-size:18px;}
  .my-page .menu-item{padding:19px 14px;}
  .my-page .menu-item div{text-align:left;color:black}
  .my-page .menu-item .icon{flex:0 0 28px;}
  .my-page .menu-item .icon-fav{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAA9CAMAAAAj4D+JAAAAllBMVEUAAAAbGxscHBwaGRkbGhogICAaGRkaGhorKytGRkYaGRkaGhoaGRkcGhoaGRkaGRkdHR0bGhobGhoaGRkaGRkaGRkbGRkbGhoaGhocGxsbGxsaGRkbGhobGhoaGhogICAaGRkaGRkbGxscGhobGhobGhobGRkbGhobGhobGxscGhokISEbGhobGhogICAcHBwfHx8aGRmYLXmwAAAAMXRSTlMAaRrW2heZYgsD6vfBY/O3CO/kx6ymglpNNS7RinZhD/rhcUhDOtyPelQ+Fb2eHykhHJuM6QAAAhxJREFUWMOl1tl2gjAQBuABWsomAsoqSrV1b23z/i/XQzIWdLCcTP8b8WA+kpkYhds0x32Q+L63m2ZFBDe5GPYsif14MV+W8EfeU190CdPuw5ExE708HZ4fEKdA3CdQjLvx7u+EdQM0zqcYiu0AbK2hO15BjGothmNVy1cxHNu9Nd5CgZnV+ak85fWCjAnny+JUFkb6u7apc2Pgw8LsAtd87f0+scgjwLjFx/WJUWeUIc7vDP2YaVeA1V0fdzgXFzCNqkdMK3VE/eNM+oAPyAAzl2+TCmiqNVaQJpOjXrdYEDWPLxiIE7QGDKZWtXJlmVQf3scMmqkcOGkvC3m51zfgLHu9+/W8ZtygMa5rMOXFkmOAm7RjU4CX9tU/P1gyNWiHYhc+5T4Ymsi4AZVoU4E8Jw4wENvfw1jidnQOssJHYAanIL96Wx6Bm72G8P9IppbzxkWman8s1AszcqOsVIvnTMPEFm/kZnNYBg524SIxg2W4lloGtnodcZBcXDfZBI857eCx6kXtnHZ4zGlHHbOb3qS8b13joI7mqH/MPT3rCFiGbp+asXxraSkrZdjdT5GPirYRRP1eoaJpWA30YugpL/hfxwRgKytiEIUxD6pwDKpwDKpwDKpwDKpwDKpwDKpwDKpwDKpwDKqwDapQg61MOoOhEIOhEIOlEIOlEIOlEIOhJJ3BV/gGKsTgK2jwFWJwFQsNfsp648BIfgDegK7+DqwOfAAAAABJRU5ErkJggg==) no-repeat;background-size:24px 21px;}
  .my-page .menu-item .icon-profile{background:url(data:image/png;base64,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) no-repeat;background-size:23px 21px;}
  .my-page .menu-item .icon-record{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAABBCAMAAABYQiwmAAAAe1BMVEUAAAAaGhobGRkbGxsbGRklJSUaGhoaGRkbGhodHR0bGhoeGxsaGRkaGRkbGhobGxstJCQbGRkcHBze3t4bGRkbGhobGRkbGRkdGxsbGhobGhoaGhocHBwmJiYbGRkaGRkaGhobGxsbGxsdGxsaGRkbGhobGRkbGxsaGRmurpqpAAAAKHRSTlMAV6tLow3t+/kjnx3y6ZV9CnoRAdOzmIQz5XdzLAZvrmsuGz3W0cCQnBjTfQAAATRJREFUSMft1s1SwjAUhuEDgigNWEDRokEt/uT+r9A6hDl13iHnsHX6rbp5ppls8sr5TVdN2FbiGOV16nYD7ZXUttxlCW3LhbqLdK1yNr/Dyb3yVmTa08vKL/XWqG3p1fUzpFNTejWlqf2SupVucQ/p02uRb0in/txIgPTqg+SP1Ua8O+TfXZ1suh/59NNDBicboMsy9Oz6UbUtX9/HPSui2pYify10QdJSU45/JS015YvkwUJTFiw0ZMFCQ1pWtUrDUqu0LLVKw3KjlCYigx3sYP+vbS+z8Stb7QenjW9NOtqAdoGlzO/+MiVoWsr0ESXmVqamrVXO5q0IW5U2y73KSS4baNhzknpbwXZyAVnSamu0X1mrZW/a+mgpXXrXpQmkpTFIW1P6NaVfU/o1pV83oSh/ALSbpZignD3CAAAAAElFTkSuQmCC) no-repeat;background-size:21px 21px;}
  .my-page .menu-item .icon-friend{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA8CAMAAADi4EJ+AAAAnFBMVEUAAAAaGhofHx8aGhobGRkbGhobGhoaGRkbGxsaGhoaGRkeHh4aGhocGxsaGRkbGhobGhobGRkqKioaGhoaGRkaGRkaGhofHx8aGRkbGhobGhoaGRkcGxsbGxstKSkaGRkaGRkaGRkcHBwbGxsbGRkbGhoaGhocGhobGhoeHBwbGhoaGRkbGhobGhocGxsdGxskHh4aGhobGRkaGRl9NiXSAAAAM3RSTlMAnBmumKBp/V5/zSH4LvPaxloG4+rKTRDf0KmjUhsL8dfCSTiOg3VtYijZt7OKRz0VkXofbE0yAAABlElEQVRIx93X2VKrQBRA0WPEdIBmkCHzHDNdvU77///NVMVApYhWNzwY3e+roDgNdEvgKWqlvEDEo3YDEUXtlAgNOuq5U9SHkWPQvNQ3UnQLLTHo5i/oWRRFi2UtfUr7TTTjJjqc1NRZnudPL79xYlerx8N+mMXupI4OBhzTa3vd1UA4TxXwmFzWnuu67d4FHYSQP4vIZK1h9M1a+zet6vxAPq+4CmH5taZb0c/gFbd7D/E3elXRDnRL4KFaX2n1XyraQyeldmF5SQ99359KVaekUtaBnc3E5sykbAtjG/0EeykaQmCj2+DIKV+Tio3uZajTQ09icK20bEFvEzm0j6E/tdMy4oCcjfuoIAxEbCYm3QFl+u1VbFbLA+elgcVKdYHF5v7YzgkhbRm/JXuF6kjZawwj4zfUgU1BTwOcmH4dUmaJnPUOO8OJJYqFnPcCa0Pdg0HnPBcejHU1cy0ZF2qbar9dbXxl/7EsjuPblTTbefzcrkf7jXZ7V7h3uGod3RX1YXhnUFTo2jU9UeVNTnPNTpIfY2oGRuvjHfoAAAAASUVORK5CYII=) no-repeat;background-size:22px 21px;}
  .my-page .menu-item .icon-setting{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAnFBMVEUAAAAbGhobGRkqKioaGRkiIiIbGhojHx8aGRkaGhoeHBwaGRk2NjYaGRkbGRkaGhocGxsdGhofHx8aGRkbGRkaGRkaGhobGRkaGhobGhoaGRkaGRkbGhoaGRkbGhobGhobGxscHBwjIyMbGhobGRkbGhocHBweHh4cGxsaGhofHx8bGxsdHR0aGRkaGRkbGRkdGRkaGhoaGhoaGRmtWYXSAAAAM3RSTlMA+tIM1RXbCOh1HaQE4W5pPjIgzr+b2KCR78qVe+yzWy4jDvhkTTYqJ8UQQhm3roxGOajiq6pxAAACxElEQVRIx72X4XayMAyGW2QqiooICPIhOqfgdG4u939vn420pqt14+ycvX+UNk9paZKmzKJ6AUqLirUTslKzdqwPmnqt4J4Od37CDDoU5v2LOIU7Ayv6FMFmTOCu+OcQeLKB6MnCop1nh8fir/tkZ5E2YckibWeRDmIdnh+QVbTJKuUzAAKjnBRAo022AKpI9ERA1Ze0yY7CCbXciq4tJy3jQdeko4ZlTNFJOmWo6XuiWMYaek984zol9ACk+bwhG36Or5+g7XXmoersbJqBhcoMPtfsi8Ihz0qmBgf+jA9NC6H9u2Hg+9TSo12epO2i7D/VQOnyMVsS1qQL/yFcUJYqxw9B1+tXh0PlG1E+Z6b2ouNE9wffU9BdO6GnmuwOhFby8XkISkO1L2vc74BOpiOUo5naVxe9cLm8/qoEEuO8ERALrBy4aSe95sLwPMRhcn6h5bunNKdWWo7tskZzgOwgH4KMTMmlNAOitLFYAXBkG5rf5vRO7TV4d1tZzojS26tXJEI5wtwRirbSuA+AoUGiLpP7vY3QmCt4xDTVAIne4uAmUnVtcADwprcsAT7+Al4b03YfTJvPhN5+9sH2XSEuYaVpy62yOknwvZNwu3sGii2Ie46I+Z5V1FvPMiATAJ6GuN7UGhi1CKFXoVgLyXWihWSoheRQhqTSGVdRP04GISb4D0v9syRpKO7jORKTNIQjusxUbpYudRBo++1zSwL0kM1apN5fJ33KTtg3erlDTyRrP+h6PqU9Ro5YwpYFLOuv6OoE2Quh+atxuKtOPtxRdPqJBmNyuK/NsgJZWVbsGjKlZcVRlRVmQYOsVGkUNN4xuY58ZCbdB6q9tZQ62ou4eHGniMvNIs6kcRPPsQ7HQeMK1uLTbVhb4epR1qQVa8JIE7Z9sT7GYt2mo35NGF1kXBPaX1D+7mrEZpR1LEa/ug7+B5em92VW+nWSAAAAAElFTkSuQmCC) no-repeat;background-size:22px 21px;}
  .my-page .menu-item .icon-service{background:url(data:image/png;base64,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) no-repeat;background-size:21px 21px;}
</style>
