<template>
  <div class="job-list-page" v-scroll="onScroll">
    <div class="header-wrapper">
      <ul class="nav">
        <li @click="changeShowType = 'new'">
          <span :class="{active: changeShowType == 'new'}">最新</span>
        </li>
        <li @click="changeShowType = 'hot'">
          <span :class="{active: changeShowType == 'hot'}">最热</span>
        </li>
      </ul>
    </div>
    <div class="search">
      <div class="search-bar clear">
        <div class="search-text left">
          <span class="icon-search"></span>
          <input type="text">
        </div>
        <div class="search-btn right" @click="searchJob">搜索</div>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../assets/images/banner.png"></div>
        <div class="swiper-slide"><img src="../assets/images/banner.png"></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="content">
      <div class="new-content job-content" v-show="changeShowType == 'new'">
        <ul class="list">
          <li class="item border-bottom-1px" v-for="job in newJobList">
            <router-link :to="{path:'/jobDetail',query:{'positionId':job.PositionId}}" class="flex-box">
              <div class="logo">
                <img :src="baseUrl + job.companylogo" alt="">
              </div>
              <div class="info flex">
                <div class="name">
                  <span>{{job.name}}</span>
                  <span class="type" v-show="job.positionType">{{job.positionType}}</span>
                </div>
                <div class="text">{{job.cityid}}</div>
                <div class="text">{{job.companyname}}</div>
                <div class="flex-box clear" style="margin-top:12px;">
                  <div class="left like desc">
                    <span class="like-icon icon"></span>
                    <span class="tip">{{job.recommendednum}}人被推荐</span>
                  </div>
                  <div class="left apply desc">
                    <span class="apply-icon icon"></span>
                    <span class="tip">{{job.applynum}}人申请</span>
                  </div>
                  <div class="left view desc">
                    <span class="view-icon icon"></span>
                    <span class="tip">{{job.browsenum}}人浏览</span>
                  </div>
                </div>
              </div>
              <div class="bonus" v-show="job.referralbonus">
                <span class="money">{{job.referralbonus}}</span>
                <p class="color_666">推荐奖金</p>
              </div>
            </router-link>
          </li>
        </ul>
        <div class="more" @click="showMoreJob" v-show="showMore">
          查看更多
        </div>
      </div>
      <div class="hot-content job-content" v-show="changeShowType == 'hot'">
        <ul class="list">
          <li class="item border-bottom-1px" v-for="job in hotJobList">
            <a href="" class="flex-box">
              <div class="logo">
                <img :src="baseUrl + job.companylogo" alt="">
              </div>
              <div class="info flex">
                <div class="name">
                  <span>{{job.name}}</span>
                  <span class="type" v-show="job.positionType">{{job.positionType}}</span>
                </div>
                <div class="text">{{job.cityid}}</div>
                <div class="text">{{job.companyname}}</div>
                <div class="flex-box clear" style="margin-top:12px;">
                  <div class="left like desc">
                    <span class="like-icon icon"></span>
                    <span class="tip">{{job.recommendednum}}人被推荐</span>
                  </div>
                  <div class="left apply desc">
                    <span class="apply-icon icon"></span>
                    <span class="tip">{{job.applynum}}人申请</span>
                  </div>
                  <div class="left view desc">
                    <span class="view-icon icon"></span>
                    <span class="tip">{{job.browsenum}}人浏览</span>
                  </div>
                </div>
              </div>
              <div class="bonus" v-show="job.referralbonus">
                <span class="money">{{job.referralbonus}}</span>
                <p class="color_666">推荐奖金</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <v-footer></v-footer>
    <load v-show="loadingShow"></load>
  </div>
</template>

<script>

import '../../static/swiper-3.3.1.jquery.min';
import '../../static/swiper-3.3.1.min.css';
import loading from './loading';
import footer from './footer';
import $C from '../assets/js/config';

export default {
  name: 'jobList',
  data () {
    return {
      msg: '这是头部组件',
      changeShowType: 'new', // 切换显示最新或是最热职位
      newJobList:[],
      hotJobList:[],
      baseUrl:$C.base64FixPre,
      keyWord:'',
      showMore:false,
      loadingShow:true,
      position:null
    }
  },
  methods:{
    showMoreJob(){
      var that = this;
      this.$http.post(
        'http://121.40.75.24:8001/Position/GetPositionsStarttime',
        {"count":''}
      )
        .then(function(data){
          var list = data.body.PositionsView.slice(10);
          that.newJobList = that.newJobList.concat(list);
          that.showMore = false;
        })
    },

    // 搜索职位
    searchJob(){
      var keyWord = this.keyWord;
      this.$http.post(
        'http://121.40.75.24:8001/Position/GetPositionsKeyword',
        {"Keyword":keyWord}
      )
        .then(function(data){
          this.newJobList = data.body.PositionsView;
          this.showMore = false;
        })
    },

    onScroll(e, position){
      this.position = position;
      console.log(e);
      console.log(position)
    }
  },
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      pagination: '.swiper-pagination'
    });

    //最新职位列表数据
    let newListCrmUrl = $C.crmBaseUrl + '/Position/GetPositionsStarttime';
    this.$http.post(
      newListCrmUrl,
      {"count":10}
    )
      .then(function(data){
        this.loadingShow = false;
        this.showMore = true;
        this.newJobList = data.body.PositionsView;
//        console.log(this.newJobList);
      });

    // 最热职位列表数据
    let hotListCrmUrl = $C.crmBaseUrl + '/Position/GetPositionsHot';
    this.$http.post(
      hotListCrmUrl
    )
      .then(function(data){
        this.hotJobList = data.body.PositionsHot;
      })
  },
  components: {
    'load':loading,
    'v-footer':footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .job-list-page{width:100%;height:100%;padding-top:42px;padding-bottom:52px;overflow-x:hidden;}
  .header-wrapper{position:fixed;left:0;top:0;width:100%;z-index:100;}
  .header-wrapper .nav{display:flex;width:100%;background:#1982fa;height:42px;}
  .header-wrapper .nav li{flex:1;text-align:center;line-height:42px;}
  .header-wrapper .nav li span{color:#c0ddff;padding-bottom:5px;}
  .header-wrapper .nav li span.active{color:white;border-bottom:1px solid white;}
  .swiper-container img{width:100%}
  .job-content .list .item{padding:15px 10px;box-sizing:border-box;}
  .job-content .list .item .logo{margin-right:10px;flex:0 0 77px;}
  .job-content .list .item .logo img{width:77px;display:block}
  .job-content .list .item .info{font-size:0;}
  .job-content .list .item .info .name{font-size:15px;font-weight:bold;margin-bottom:5px;}
  .job-content .list .item .info .name .type{padding:3px 4px;border:1px solid #1982fa;color:#1982fa;font-size:12px;display:inline-block;margin-left:5px;border-radius:3px; }
  .job-content .list .item .info .desc{margin-right:12px;}
  .job-content .list .item .info .desc:last-child{margin-right:0}
  .job-content .list .item .info .text{font-size:12px;margin-bottom:5px;}
  .job-content .list .item .info .icon{display:inline-block;width:15px;height:13px;margin-right:3px;vertical-align:-2px;}
  .job-content .list .item .info .like-icon{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAmCAMAAABqHZIsAAAAgVBMVEUAAACYmJiXl5eYmJiioqKXl5eYmJihoaGZmZmYmJiYmJiYmJiYmJiYmJiYmJiXl5eYmJidnZ2YmJiZmZmYmJiZmZmYmJicnJyYmJiXl5ebm5ubm5uYmJiYmJiXl5eYmJiXl5eYmJiYmJiYmJiYmJiYmJiYmJiZmZmZmZmZmZmXl5cAXVUnAAAAKnRSTlMAc4CLDfL7BlV3hH2ql2b3ehaITMCObSPv2y0c6NDKybiyXeLWoY9DNzypHzCbAAABMUlEQVQ4y83U246CMBRAUUDkIrYFAQXxPl5m9v9/4BQRHSdS++h+Ok1WQhuS4wwUuknszuXhEOX5wjF34tHSTM88OplpAuxnpRAbCMxXmAPT67QGYaQHYBe2UwTjzETzAAq/ncIaJiZ6UbDWVCeh8g30ewx1911/Ba6BLiv4aro51mM4TBcrWC262a9ADtOmhqr/TTOow64XNDuC+ukPintqK/95fwNB3p8ET+2ecFgA0f3mKngEIPTDo749g2/xR0DjePwpdoYqQD7Z9SBtWeIkcJy27WFstF5rve5OVnZia9PPsDNbG3+GHVnYElzHtbM7iCxtpqBpbfneCtg6dlYC+dWe39hM3HbhHLbeRFeCGr1IFAGw8Ttr0VRTO1tcbrvO85IkSdM01rkvknm/gX8BB4pA8BudctgAAAAASUVORK5CYII=) no-repeat 0 0;background-size:15px 13px;}
  .job-content .list .item .info .apply-icon{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAmAgMAAAAzesp5AAAADFBMVEUAAACYmJiZmZmXl5fq5lgkAAAAA3RSTlMA40mAJZ3FAAAAQ0lEQVQY02NgYJj/////GwwgUA9kfQGz/gPBHygNZmNlAVWAAQks/v9A9P8AOgshi2Dh0kGSbSBwAMqil14EC3/4AQC8QK1P8wM2EQAAAABJRU5ErkJggg==) no-repeat 0 0;background-size:15px 13px;}
  .job-content .list .item .info .view-icon{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAlCAMAAADcBfGjAAAAh1BMVEUAAACcnJyYmJiYmJirq6uYmJiYmJiYmJiYmJiZmZmZmZmYmJiYmJiYmJiYmJigoKChoaGYmJiYmJiYmJiYmJiYmJiYmJiZmZmZmZmZmZmenp6YmJiXl5eYmJiZmZmZmZmampqbm5ucnJyYmJiXl5eZmZmZmZmYmJiYmJiZmZmYmJiZmZmXl5cyS0GEAAAALHRSTlMAGujzBfjt3L1NNLB1i20MCPuGfOPSyFw/KROqoJRgOi0kHrela0ed12VUUomJGJ0AAAIqSURBVDjLjVXpukMwEL22orailBZVLbp4/+e7MyGZaPna/DKZ7cw5SfwtrmPXxr6t/P24lDgdxmV62x/iz044SCupdl/iLRZnpGVUWhr7Vlt9Pb45sRjrEDBT7wqWZNprCS76wyKXtgJXxZzrIgkXNu/p8ra9czewvTl8JjyxQZItUd1jqf6dAQ8BxXzGbWSlViSozUyspsxaOzggj8itiVor5+MUYO1zKQFDnGCyOk2ooXU85GEAzzW3dEyIhCQh4Otf51ePH2eBbAMpzWTcIOEh+NwDvnxEZwKUgDtqFWYZrRYTSBSgks+oQF1XeLZg9UwHQBjTTNCiEkYFTchlQ2lEeQJJabcGtHSOdEBSk7ME+qBzOIQNbR5AdrKw3EHSEuA0GOKgRWN4c2HdeYGKQr5kkFnNery3dAQq6tHA/VGkEwzk7ugwAKEXcgYaM6/DcJPKgGq+MHxQU/JFw5AyPnlnrqeW8yMJNVtybYEqe8o0MgJyB0VGMwM17iSOsucz6imUpZRaw2vqP/0rHt6axEiglDJ9m9DFls8PX5stdbhDkDAbvGMxOW9Twk2hMiqrSjEJXqkj2X7hFL5Eum9MCcQ0XirVXntXHUR4nm/qngxj7mpxsLT5cNgqchMHH/sJ1ip3S+8SG1iNj3L9Z4qbZraCt7uj2yg6nT9b+4E1Xn/f9QeEYIwFb/t11MUoabjFnAph01Kj9XgSyzN5eGHrv/7YbD/2X5dF3z+hv06whFq9TwAAAABJRU5ErkJggg==) no-repeat 0 0;background-size:15px 13px;}
  .job-content .list .item .info .tip{font-size:12px;color:#999;}
  .job-content .list .item .bonus{position:absolute;right:10px;top:10px;}
  .job-content .list .item .bonus .money{display:block;color:#1982fa;font-size:21px;margin-bottom:5px;}
  .job-content .more{height:34px;line-height:34px;text-align:center;color:#1982fa;}
  .search{position:fixed;top:42px;left:0;z-index:10;padding:5px 12px;width:100%;box-sizing:border-box;}
  .search .search-bar .icon-search{margin:2px 10px 0 14px;vertical-align:-3px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAABGpJREFUWAnNWE1IVFEUvufqG4MQddNCbBUVIoHRQgj8qXFnv0RGEYG0r0REaEYzxxFEpLIW7YKIoonQBDclZIjtIqEgCNqUzqI2hRg6P+92zn1z33sz+sY7z1F7MNy/c77zvfvu+bkDTOPp7+/nyWTyqBBwBgQ7IpioBoBqUhVCxIFBXAD7ACAmDMN4j/KmBqyWCOSTQkO7kqvJa4xBF5Lak09WrSHZn0h71CgzxlB/Rc37bT0JhkJ955gw7+AO7fUDjjv8gwHvjEYHXvrRVzprCCIhCIf7BoVp3lRCVgsLDNgrxvhUIMC/4Vw8s16dSJj7GDPbmGCncfdq3HrA+dDg4EAYCQv3vG4/i6Akd7P3GX7OCw4AxBnArfr6Q4/a29vTzvzaXiwWK5mf/9SBB/M2EpVnlKTwsz8fHIpc9EMyi2Ao1BvN3jmYrKgsv9zT07O0lo73zPDwcPmf30tPkOQpJUU7GY1GQmqs25YoQTpzSO6+GiPzsUCZ0REOh1fVnG47PT2dCLYej5lpswp1GqSeEI1Nzcc+z86++6KLQ3JyB6W3JlJfHYeAyUBZ6dnNhgvU54nV1LjaSXIcI1B6oBDv5sSSQomLXJw+62bJES5hEBbug3QosmGFLVrVeziCIEnossXRIQo9c7buOh2JhZjOEnRZNp2ZfD0rQ9hBGBbIW/Mp+FmzMDFM4UMBn7KSLg6n9GULY5zbKJTYsgV0JKaMoZZSls0NcDjlVkeGTzn9Yvcc7Gyb+e1wSvxKJJMh1LCorRvbbXMjIxxd3yaIwip9baTnZ93GzrGZF0uGmbwSW7OobRedRNhvhlzcu1lsam7sX7rgnIpNJWxVJWpU3DYHe1EXnVMl7AhjybRlj4ON+XVO1ww6iZiwhbGeo5LJHhepIzFlrWgBmoy/1YXmdIewynRSETWyntPV1pSzMFUhC3EMOW80VRnlYrzgiFFbAYtNqufs8SY7EksWsBkgYA/RZkoXVro7XXCoFLKURDUVm4UkdC9jhJEpXDMeTLtXes9Lfr15ed5mZmZSTU0t37FUb88IHaRiM9gafI1rvu4SRC6RSN3Fr3NFGQbOrkYikY9qrNPaDkGVblNzSwBJNmYUG9JpcfjEybYpqpB1wJQMfda/yysxNzlao+o4GAyO40tr35tlRa2AMWhDeAsuTQqfWgD2wggYl3TPYRZBApAki3jtJMzcpxCSawgqsM1e3KnMBy5uYIV6XuBP4apWl6Rn0qZ/BOiCg2/Q48RJBZ+vxdQJ0IeXrtpoNCo/J5HJ1SDSyUTyKX7q0tw199hzB91C5JEefx7RC1LiX0SgOcoQFIRzzxeRIDJ+dlKLoJus375fknaY8WtYV49CC4UY0zRrUacuR6+O5tcLQdtGkAj5IbmtBP2Q3HaChZL0DDMEtJUPeTplFM8QtJp6TPa3zYu9XtbLu7G6SlVWVVTu2A4qwp47CdDZ3d29vCNnUJFTre3dabEfd64W/+y8jn92PlDr/1U7MjKy203oH2twNOGwB6pcAAAAAElFTkSuQmCC) no-repeat 0 0;display:inline-block;width:14px;height:15px;background-size:15px 15px;}
  .search .search-bar .search-text{background:#e6e6e6;border-radius:5px;width:85%}
  .search .search-bar input{display:inline-block;width:82%;height:32px;line-height:32px;background:#e6e6e6;}
  .search .search-bar .search-btn{height:32px;line-height:32px;background:#1982fa;color:white;font-size:14px;border-radius:5px;padding:0 8px;}
</style>
