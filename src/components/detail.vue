<template>
  <div class="job-detail-content">
    <div class="info padding">
      <h2 class="name">{{jobDetail.name}}</h2>
      <p>{{jobDetail.salaryranges}} {{jobDetail.cityid}} {{jobDetail.workyear}} {{jobDetail.education}}</p>
      <div class="info-bar clear">
        <div class="left border-top-1px">
          <em class="like-icon icon"></em>
          {{jobDetail.recommendednum}}人被推荐
        </div>
        <div class="left border-top-1px">
          <em class="apply-icon icon"></em>
          {{jobDetail.applynum}}人申请
        </div>
        <div class="left border-top-1px">
          <em class="view-icon icon"></em>
          {{jobDetail.browsenum}}人浏览
        </div>
      </div>
    </div>
    <div class="c-info flex-box">
      <div class="c-logo flex">
        <img :src="baseUrl + jobDetail.companylogo" alt="">
      </div>
      <div class="c-name flex">{{jobDetail.companyname}}</div>
      <div class="c-p-num flex">
        {{jobDetail.companynumber}}个职位
        <em class="icon-right icon"></em>
      </div>
    </div>
    <div class="b-info">
      <div class="title">直属上司</div>
      <p class="border-top-1px">
        <span v-show="jobDetail.immediateGender">{{jobDetail.immediateGender}}</span>
        <span v-show="jobDetail.immediateConstellation">{{jobDetail.immediateConstellation}}</span>
        <span v-show="jobDetail.immediateNationality">{{jobDetail.immediateNationality}}</span>
      </p>
    </div>
    <div class="desc">
      <div class="title border-bottom-1px">职位描述</div>
      <span>工作职责：</span>
      <p>{{jobDetail.positiondescribe}}</p>
      <span>职位要求：</span>
      <p>{{jobDetail.jobrequirements}}</p>
    </div>
    <div class="desc">
      <div class="title border-bottom-1px">公司简介</div>
      <p>{{jobDetail.companyintro}}</p>
      <ul v-if="jobDetail.CompanyLabel != []" class="clear label-list">
        <li v-for="label in jobDetail.CompanyLabel" class="label-item left">{{label.name}}</li>
      </ul>
    </div>
    <div class="c-info">
      <div class="c-size border-bottom-1px" v-show="jobDetail.companypeople">{{jobDetail.companypeople}}</div>
      <div class="c-link border-bottom-1px" v-show="jobDetail.companyurl">{{jobDetail.companyurl}}</div>
      <div class="c-address border-bottom-1px" v-show="jobDetail.companysite">{{jobDetail.companysite}}</div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import $C from '../assets/js/config';
export default{
  props:{
    jobDetail:{
      type:Object
    }
  },
  data(){
    return {
      baseUrl:$C.base64FixPre
    }
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
</style>
