<template>
 <div class="job-detail-page padding-52">
   <v-header :header-msg="jobDetail.name"></v-header>
   <detail :job-detail="jobDetail"></detail>
   <footer class=" footer">
     <ul class="footer-nav flex-box">
       <li class="flex nav-item favorite border-top-1px" :class="{'active':collected}" @click="collectFunction">
         <div class="trangle-l"></div>
         <div class="trangle-r"></div>
         <span class="icon icon-fav"></span>
         <br>
         <em v-if="collectStatus === '1'">收藏</em>
         <em v-if="collectStatus === '0'">取消收藏</em>
       </li>
       <li class="flex nav-item recommend">
          <div class="bg"></div>
         <span class="icon icon-rec"></span>
         <br>
         推荐给好友
       </li>
       <li class="flex nav-item apply border-top-1px">
         <span class="icon icon-apply"></span>
         <br>
         毛遂自荐
       </li>
     </ul>
   </footer>
   <loading v-show="loadingShow"></loading>
   <!--<pop-confirm></pop-confirm>-->
 </div>
</template>
<script type="text/ecmascript-6">
import $C from '../assets/js/config';
import header from './header';
import loading from './loading';
import detail from './detail';
import popConfirm from './pop/popConfirm';

export default{
  data(){
    return {
      loadingShow:true,
      positionId:'',
      baseUrl:$C.base64FixPre,
      collected:false,
      collectStatus:'',
      jobDetail:{}
    }
  },
  methods:{
    getJobDetail(){
        var url = $C.crmBaseUrl + '/Position/GetPositionDetail';
        this.$http.post(
          url,
          {"positionid":this.positionId}
        )
          .then(function(data){
            this.loadingShow = false;
            this.jobDetail = data.body.PositionDetail[0];
          })
    },

    // 初始化收藏状态
    initCollectStatus(){
      var url = $C.crmBaseUrl + '/Position/GetCollect';
      this.$http.post(
        url,
        {
          "accountid":"141e9e29-bb12-e711-80f7-f92ee045e9f3",
          "positionsid":this.positionId
        }
      )
        .then(function(data){
          this.collectStatus = data.body.GetCollectResult.state;
          if(this.collectStatus === '0'){
            this.collected = true;
          }else{
            this.collected = false;
          }
        }).catch((error) => {
            console.log(error);
        })
        
    },

    // 收藏
    collect(){
      var url = $C.crmBaseUrl + '/Position/CreatePositionsCollect';
      this.$http.post(
        url,
        {
          "accountid":"141e9e29-bb12-e711-80f7-f92ee045e9f3",
          "positionsid":this.positionId
        }
      )
        .then(function(data){
          console.log(data);
          if(data.body.CreatePositionsCollectResult.state === '0'){
            this.collected = true;
            this.collectStatus = '0';
          }
        })
    },
    // 取消收藏
    cancelCollect(){
      var url = $C.crmBaseUrl + '/Position/DelectPositionsCollect';
      this.$http.post(
        url,
        {
          "accountid":"141e9e29-bb12-e711-80f7-f92ee045e9f3",
          "positionsid":this.positionId
        }
      )
        .then(function(data){
          console.log(data);
          if(data.body.DelectPositionsCollectResult.state === '0'){
            this.collected = false;
            this.collectStatus = '1';
          }
        })
    },

    collectFunction(){
      if(this.collectStatus === '0'){
        this.cancelCollect();
      }
      else {
        this.collect();
      }
    }
  },
  components:{
    'v-header':header,
    loading,
    detail,
    popConfirm
  },
  created(){
    this.positionId = this.$route.query.positionId;
    this.getJobDetail();
    this.initCollectStatus();
  }
}
</script>
<style>
  .job-detail-content{background:#F5F5F5;}
  .job-detail-content .info{background:white;padding:14px;}
  .job-detail-content .name{font-size:19px;color:#000000}
  .job-detail-content p{font-size:12px;margin-top:3px;}
  .job-detail-content .info-bar{margin-top:10px;}
  .job-detail-content .info-bar div{width:33%;padding-top:10px;}
  .job-detail-content .icon{width:15px;height:15px;vertical-align:-2px;}
  .job-detail-content .c-info{padding:10px 14px;margin:10px 0;background:white;line-height:32px;}
  .job-detail-content .c-info .c-logo{flex:0 0 32px;}
  .job-detail-content .c-info .c-logo img{width:32px;}
  .job-detail-content .c-info .c-name{margin:0 7px;font-size:13px;}
  .job-detail-content .c-info .c-p-num{flex:0 0 90px;text-align:right; }
  .job-detail-content .c-info .c-p-num .icon-right{background-size:15px;}
  .job-detail-content .b-info{padding:10px 14px;background:white;color:#999;margin-bottom:10px;}
  .job-detail-content .title{line-height:26px;}
  .job-detail-content .b-info p{padding-top:10px;}
  .job-detail-content .b-info p span{display:inline-block;margin-right:10px;padding:3px 10px;border-radius:2px;border:1px solid #1982fa;color:#1982fa; }
  .job-detail-content .desc{padding:10px 14px;background:white;}
  .job-detail-content .desc .title{height:32px;line-height:32px;color:#999;font-size:12px;}
  .job-detail-content .desc span{line-height:26px;font-size:13px;}
  .job-detail-content .desc .label-list{margin-top:5px;}
  .job-detail-content .desc .label-item{padding:3px 6px;border:1px solid #1982fa;margin:0 3px 5px 0;}
  .job-detail-content .c-info .c-size{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAsCAMAAAD7CqBrAAAAqFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs30iGAAAAN3RSTlMA1Uj7tvcKBJt72rvy3sV0Yl1OOw/s5+OgOCQfh4FtWFUxB8u/sKdpZRwXE6qki0IZ0pSPeD8uwBytTQAAAiRJREFUSMeNled24jAQRgfkhrEdCB2WEmpCzabd93+zPdlgScZykvtrdKyRp32S3BDMT3GiBseL/I7grseVSH7Dog/JsPXeaXvwKhLWz95q/dKRKu6gN+1qeyR1vtgG4uQejl29apKJrLzprrGGdejMYcBGDA8wyoP1+SMOZiQHsWgSmU/+RMrUbg5q09P2X16kxBOMxeageMjtFr1yJh18KRLTzs2u0kkZRiWPJnfaXrFzRTW59XjT9tFVrT7t21I8anvr8ojwxGZvZS6ZidBwQRXCeiU1IStcwxUXsgt9WnoxJBaXRzERn3dtD7S3TQgPYrGyEs94kzJdGFe1Y8irOPCpi2E5sIL03MPrER/sYvvPub2DujgY99hYk2vSeFecKkV4yeXVN+oIY63BEhvd9hZJ1xzkT6SCOn6Q+75YhTpKFUstgz4LS4A7qSRlkXfzwwy1q1DmuFa5mwPupQrzsTjpDalirI+uWSPSIA2kgoja1Zpau/YJ24p+PMLc7Noszd1D5hLUcwRbvZrDaqTvRAXp9KnYibmnYLsUTUtB7W1/vYSbgIr2Nw9N2habj/+7hpOr0hsp9PLGdGLwT5dy6aZ98Gc60AHqq/gLRTI9iItwHsNQq7RJMvn8gyKbVI/aGc46+tqne5CSBfINDZQu7QI/lEetzirWeCKzxid/oCvej+9wHRVIkysH6XOuf889jGTmfXEKRfEzxXGPaj+T2Zn+A5hCTN0AZN9IAAAAAElFTkSuQmCC) no-repeat 0 center;padding-left:22px;height:42px;line-height:42px;background-size:17px 15px;}
  .job-detail-content .c-info .c-link{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAjVBMVEUAAAA0NDQzMzMzMzMzMzM0NDQ9PT00NDQzMzMzMzM0NDRAQEAzMzM0NDQ0NDQ0NDQzMzM0NDQ0NDQ2NjYzMzM6OjozMzMzMzMzMzM0NDQzMzMzMzM0NDQzMzMzMzM1NTU1NTU1NTU2NjYzMzMzMzMzMzM5OTkzMzMzMzMzMzMzMzMzMzM0NDQ1NTUzMzO4F0WxAAAALnRSTlMASOz58XwM97qoPwfYsqyEbmFYHIcWi9XRzMSYknJqUjktKCPn5RT24Nq+tJ4i/03MFgAAAahJREFUOMuVldl2qzAMRWVj5qEhBDI0SdNMnff/f95dqYEbQtsV68UCb4zsI0tyY4Ga5Zn2PJ3lMxXIX6bikCsLY/Ur+rSwTJxAElt/8fQjeojg5DcYJQIiytD4J4gOY3Zq0Ns08cKdWFh2oZekW42Z3rIPUJwlfaOUDpaSt1TqAh6G7CP4IuLzIf9h+Whf8nizLq87CbS3v4b3ng5k98pg7Sle+Q6fDbFcwxLTfMJ76dHHfTBMRPwQmAzhCRD6l9F0ZxJRXIYqB3SxUfsznPdqU2ggry5zBVGrBaZuI1/NGdh81UZbG6w6i+7nSxL5KtdRpkFn0br8koRlF9DiMihOqc0hXlIZxizpC4F1jqjvHft2ImElt7CsSKzjE4sEIZV93LAew2s21qkIA1EsexW3Y3jbq7dEyYxZf4JqDKvuzL7BvBdnzvMYfmbey5xL1iNHqjFccew/y0RTt0+GYAwHmNar0eJxt3lOsFMYTht0Orr7RWmYOcntlEhuKSqK453J73KtnC6sSylwKjIu5cu9MLqXXFvM61+LuUubcGlAzq3NvWk6teN/JxlpuaKvYK4AAAAASUVORK5CYII=) no-repeat 0 center;background-size:16px 16px;padding-left:22px;  height:42px;line-height:42px;}
  .job-detail-content .c-info .c-address{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAA3CAMAAABJoPgRAAAAh1BMVEUAAAA7OzszMzMzMzMzMzM1NTU4ODg0NDQzMzMzMzM0NDQ0NDQzMzMzMzM2NjY0NDQzMzMzMzMzMzMzMzM0NDQ+Pj4zMzM0NDQzMzMzMzMzMzM1NTU0NDQzMzMzMzM1NTU0NDQzMzM0NDQ1NTU0NDQ2NjY0NDQ0NDQ0NDQ0NDQ0NDQzMzMzMzMkqqppAAAALHRSTlMABfrsiFAaZvDct3r2VR6D4NPEjTYMsq2spZcT49bIRTqhlGFYJdm7cV1AMugbChgAAAInSURBVEjHhVXZgoIwDCwt9yXHgiioqOue8//ft1G7LWCBeTEtQyYT0srGeIuaXHAu8iZ6Y7Nw7Q4DdLZrpLV7DkJQX2z7Ugcg8H37ynsXAArPVem9AoB4n9CsPYDwbVJwCGBvDbcq2hLOq4wjgLAa5CPe0TX6OxJT5yTdz4oZUX2SuvJB+Yg3w6Sc0lErINyF7tLj9l9Y+7CSXcZ5tkss7UiKuxyh3gwgEeiXQ/C7og2o/lEMf1uWWx+Arfr5jDsUA57wHpqWJwbMAt2D7uliDimTSA+6dO8uGgGu9BFAEE8xBQJLGgci1iCQTxKVW+VJZBigYTlqudrBt0aD4mMnwxo5E7jIVYYtG2GLTEYXCMaVOY5yTCzBVTs4Pd6sEzcU+SjXpUv47IBm3UyDw93QenuoNXf5aq3h1d2IA/Rrn7Cn8MFeGQqpGlKRy2NGJYbPmm/Lg3t7umxjenfpKJBO/Dg0ZwiLLcASOP9P+nWJeFVn5YhgISW19yjDE/A9T/wGTvrwZNZswgyFWvwA0RwxAn70qoHvmnmuj2awTGPUZmKNOJ0IJCZeMi3KyiFc402WT2z+Dq+q4fX0O93bAF/TvS9TN6wCvB9v9RyFob+pj84dFdjBT00OHcgESgIOM8IGznp1Buy5zxoOio/0H8wr2g/gqobwo2WzuAlw51Evh7ixBfQx4hNNKP30bBEJiEk8JGwFHjGJ5y1QtF1pfg0byEtmnWni/QHv9UFd2yHB2QAAAABJRU5ErkJggg==) no-repeat 0 center;background-size:14px 19px;height:42px;line-height:42px;padding-left:22px;}

  .footer{position:fixed;bottom:0;left:0;width:100%;height:52px;z-index:10;background:#f5f5f5}
  .footer .footer-nav .nav-item{text-align:center;position:relative;}
  .footer .footer-nav .nav-item .icon{margin-top:10px;}
  .footer .footer-nav .nav-item .icon-fav{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAoCAMAAABdCYMbAAAAjVBMVEUAAAAaGRkaGRkkISEhISEbGhoaGRkaGhobGxscGhoaGRkaGRkdHBwoKCgyMjIbGhoaGhobGRkaGRkaGhobGRkaGhobGRkcGhocHBwgICAaGRkbGhoaGRkaGRkbGhoaGhobGhoaGRkbGhoaGRkcGRkbGRkcHBwdHR0aGhobGhocGhobGhobGxseGhoaGRmC0L5eAAAALnRSTlMA/NYVF9LUf1WA7MQcCgWKV93xj4N1bj4kD/bjpJZ7YebgvrNaTzMry546qmdF+tIkwgAAAW1JREFUOMuN0tl2gkAMBuBAi1DWCoK4QN23tvP+j9d/xtFIj8dMLjwSPzNJBrpFvu+C2IuDc5TZTFtv1/P5YhMe6V9kfaxuEYfaH7fqHsl0gKdr9RiL37zwBpnljPGXZ2p+h02/NGd4Y2NOXV1XifnRb+/YPEb5tf/It/XOFqTFHE+r1Lah/1zkPO/EdHPhs48BEkFmBlzg6w89RoOj3h8Ts0QXJISuNBngdKz8N6IBxyBei9IlDskFjHZRs7uOuJcwAusvc1pi3EE6eYppj6oX8rH6QbraPMM0w+YaQts9ucRKbwWbr500tlJRbBcpRqkXjb0nLrjFlDsqsPbUQffQKR3wWck4Q8cns1/lHUTd6Ubsna6FXsyNj67Xocwr9yoi795AlhguYNXcLjUw/DXml/rN8hf4g8iJM5Y5Y5kzduKfjCXOWOAiBh8xlzBzJ8yccUgkczfMfMdY5g1jB64Yi5yxI2cs801Z07P4A47LQK39YtvrAAAAAElFTkSuQmCC) no-repeat 0 0;background-size:15px 14px;width:15px;height:14px;}
  .footer .footer-nav .nav-item.active .icon-fav{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAoCAYAAABq13MpAAAABGdBTUEAALGPC/xhBQAAA4hJREFUWAnNmE9IVEEYwOebfS9xpYz+GK2mh8QIyw5l4E0oCOoS/aEORZ7qllFeWlxbV+uidemkEAQdqj0IQrdKiaxOUtTBUA9WtkEWhLFt8d6+r2/WZnk+3/5/uTOwfPN938z3/XbezLyZByxHCSPy4evJI2ixwwBWG0PYxoCtZcjiDPAD1ScRIHohqD0OU4NM4epu4YZk3DgLDA4yxBbqsxGQ6dT+K8WYpt8zjtr9+RDMZIoh7SArTklJKjFudCCyy8hYo9O/QgdGfwCGq9ZpN2cvwh/pb+jDnQYzQozBMUSskHZ3CRYBjYLGBj4H9VfubSiSm6M+gs0mM0YItsnNn9UGbMoHrKOtSZ98MW1eoScSyQ3rEhH4UFW1r9M+ALLVCuhAv3mKktyhR1glGxUsAZLAcJae0o6C+y7vMFmh6yfmrsKc3bwMurbfPGlZVtTeoNx1Avzo1/R9s0FYkCxcVmojuActvCt1VSRN0fp40oy2j6MmmVLQgSH0W2CMIkO/dCglEdtnJsyIZEpB44JxnhZMgzSqKGl9dDbewM2CjTdHcQ0gdKkIamcSsyBhmpeEDeoi5pkks+7ZG6hapxfTj61btBqeBOuQqpBOLhrt9V++m/s5bSmtTqfKOu1wrRwRalWGdLLR+gtwgNShxelTVqeZsYbT5r2oLKELmODldDx87+JT1wQwxemc91JdQieZOK/7JjhD7aHTpapO6+9RrBs+8VgPvKZN+7mqoA6u20JfOuVxFqSXY8arkqNjWVQa5TexkP4kDR3r1ifoLdNTFpp8kgL8ZEw/LZumLwF0WwG6BIyQPCqdqkgf8OPzIW1E8ixND9IAAP3V2jl6DG+lUwVJXGE7sGBKQwuFLpGLrFI/oAo4bRARmse9gs1e0tPDbgwM4iaWMJ7SwbvFbl/Negq4R7/mltMVWjT8Bz5G4LvdOv5PWzZgkTcjtHCWA5zmcC9NibDIn6lkhRadVhM8H2DBlBN6tcDzBRY8y3YPYXArsS745veldpV3bv5SbYUAi1x5jbSEElf4eNIYo88Nu6StVFkosMhXELTo4CV4McBFQXsFTsBhtxeHiJ+rFDzSMmApI14KsMhfNLToXAx4qcAlQ9vAx2lxNgs9W/ECWMQvaaQl4PYBrPn1O7WrZAT3CtgzaBEoG7iXwJ5CZwL3GthzaAmeSJgP6KPKXuCsj65yg8LuZfkLA/1hpPl1HOsAAAAASUVORK5CYII=) no-repeat 0 center;background-size:15px 14px;}
  .footer .footer-nav .nav-item.active{color:#1982fa;}
  .footer .footer-nav .nav-item.recommend{flex:0 0 165px;background:#1982fa;color:white;}
  .footer .footer-nav .nav-item.recommend:after{content:'';display:block;width:0;border-left:4px solid transparent;border-right:4px solid #2e73c1;border-top:4px solid transparent;border-bottom:4px solid #2e73c1;position:absolute;left:-8px;top:-8px; }
  .footer .footer-nav .nav-item.recommend:before{content:'';display:block;width:0;border-left:4px solid #2e73c1;border-right:4px solid transparent;border-top:4px solid transparent;border-bottom:4px solid #2e73c1;position:absolute;right:-8px;top:-8px; }
  .footer .footer-nav .nav-item.recommend .bg{width:165px;height:8px;background:#1982fa;position:absolute;left:0;top:-8px;}
  .footer .footer-nav .nav-item .icon-rec{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAoCAMAAAC2PjgYAAAApVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+4/eNVAAAANnRSTlMABffsJak0Lfzw4AoC5NPGeGRQQhv59MCyrZBUTbqcaygVDraHfXBZH9jMlj7mpIJfONtxRBHgrDyNAAACF0lEQVQ4y4VU2XaCMBTUgKyCqIC4oGLrbq12mf//tCZoFhK18+A55g6Tu0xuS8Fy/RbkIEG5CFv/wi4gECz/Y898KCDRMX3FHmYAyr6TVqmT5KCwnOfs1QcQncRNVs3fPaV/Ar4t/7btqQ+MnrHbVHyhZccqtvbFpnqQORXXmzfnVa8f5TI2GguOeO42Q2NgY2gcgMX1OwZFtm1EesDUoHeAPi1rDArP0YSGBn3M6BTOIADirhIZcXXtysHdTATYNu9NjObmALfOO1AqoQ3Q0+knwO/KLmVKNgOA6PQ+EHFKCCBsjKTQ6TsCnKR6roQK1gQBs/5tM9njg6lWOeDIUiean2bmlIKulDtrFxMuJQRxUVqRN+qyNHvbHtBR7eY1xBwAqu8mwKEtEzPm8gbMlcfoq7ZIwP0gMAMyV808EuIVEYlJxMAXf64XD/gWkTWwDw2PeExR9DUW4uEHH6JuEtx2xQKIdsKZHcAyxLt2Ani34yklzCrZI2w07qDjA8JnKwsUwcS9t6zoNrsSo0aQ8gOCGsWyVrfGiS2fzRwMWfz+K87ccwAGcmktMzCUVzkykOO1ra/NKU2D9WRggcFbi5GN0sdrOapXRjjclMDNw2kOnHkpOqo9N4t7uBmBin/xPEy4HndeuwT2dJvou9dw3n2lphn70mc/z5FId43YbiLA6gV9K1/xnOXx6U9aL7DqWT/8BUVx+gczLViUBVeRewAAAABJRU5ErkJggg==) no-repeat 0 center;background-size:16px 14px;width:16px;height:14px;}
  .footer .footer-nav .nav-item .icon-apply{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAoCAMAAABQF/NcAAAAkFBMVEUAAAAbGxscHBwbGhocHBwbGhoaGhogHx8jIiIcHBwaGhoaGRkaGRkbGxsaGhoaGRkaGho9PT0aGhoaGRkaGhobGhoaGRkbGhobGhoaGRkbGhobGRkaGhoaGRkbGhoaGRkbGRkbGRkcHBwhISEcHBwbGhobGhobGRkbGhobGhobGhoaGhobGxsdGhofGhoaGRmN2yjNAAAAL3RSTlMAOT/SG/C6HgktROnJHFf0xQT3pJNu39mzramhiH1k4ZeESBcS7OS/vrSedF1PMmHz8msAAAEnSURBVDjLpdTpboJAFIbhD8UCQtkEZHHX7st3/3fXDi2EwXAg+v5i4MnkhAngr4RCObSOC6EKt2cKRTpdUSjUbToX2uDmbEPootucQnPdegwfhqLbt87geHdYM5Asv/WjEKx+GAZlSx9t3pjd283qk2OW22bxPG5jC3VHkk+SDQKyhMqKyUp+v1uSM3VdksFZtvae9ADM6sllC5/kDr+qzV32nZN1nkZgp9e+fWcnS7Ox3bPZlU0N1bKeSUvd8g3VV2P/x3wjM23jKGy/iceeNUiuunajtr227U+isttdFQ0xYO01ybUfQXXySLrWkIWpMBf5ISlcKupg0OJSstOLBcECp7CRcx8QbJ21S4rikDqAZPXut+lsNL+xU6ptMNme8TERxwl+AEBxZPe771xsAAAAAElFTkSuQmCC) no-repeat 0 center;background-size:15px 14px;width:15px;height:14px;}
</style>
