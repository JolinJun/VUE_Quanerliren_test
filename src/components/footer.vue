<template>
  <div class="footer border-top-1px">
    <div class="footer-wrapper">
      <ul class="flex-box footer-nav">
        <li class="flex footer-item">
          <router-link to="./">
            <span class="icon-home icon"></span>
            职位
          </router-link>
        </li>
        <li class="flex footer-item">
          <router-link to="/message">
            <span class="icon-msg icon"></span>
            行动
          </router-link>
        </li>
        <li class="flex footer-item">
          <router-link to="/my">
            <span class="icon-my icon"></span>
            我的
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default{

}
</script>
<style>
.footer{position:fixed;z-index:100;width:100%;left:0;bottom:0;height:52px;}
.footer .footer-wrapper{height:52px;background:#f5f5f5;}
.footer .footer-nav{height:52px;}
.footer .footer-nav .footer-item{text-align:center;}
.footer .footer-nav .footer-item .icon{display:block;width:20px;height:20px;margin:5px auto}
.footer .footer-nav .footer-item .icon-home{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA3CAMAAABn5dmDAAAAWlBMVEUAAACbm5uampqZmZmbm5ugoKCZmZmampqfn5+ampqenp6ampqampqampqZmZmampqampqampqZmZmbm5ubm5uZmZmZmZmampqZmZmampqZmZmZmZmZmZmZmZlM2XzkAAAAHXRSTlMAF412hBXUfAjcG9iAcx5usrySVELz8JfLmGwtBVpA/x4AAADaSURBVEjH7dTJDoMgFIXhS+fWoTh38v1fsyW55KTRKPes/TdKwhdgAbKQ811VCpfLxnG8lrSFJiw0YaEJW6lmbC5n1YwVu3YntaG9asJC35LsEdasYe0a1q5hjRr2LGLWsNMK1YyFZiw0Y6HtFjq7MRaasdCMhbZYdFfNWGjCQjvGQv9ZQvtoWz8kXPfaN1FXIp3a9+/zWMXhIW+jDisHq+Pjiv3EE77CyrqReN3dCr6ESYfw1/gnJpuwtuENb3jDc3jYLVcv4ITmcZGM8yluk3Ej0/I+ifY1yBeQNE741QzoCwAAAABJRU5ErkJggg==) no-repeat 0 0;background-size:20px 20px;}
.footer .footer-nav .footer-item .icon-msg{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAMAAACfBSJ0AAAAgVBMVEUAAACampqbm5udnZ2fn5+ZmZmampqampqampqampqdnZ2ampqZmZmampqcnJyqqqqcnJyoqKiampqampqcnJyampqampqampqampqampqampqbm5uZmZmampqampqampqbm5uampqbm5ubm5ubm5uampqcnJyampqampqdnZ2ZmZnQecZSAAAAKnRSTlMA+UAcEfJY5auHFLKumxgEOAjPyE7uzH9zUEoi08O5ooR3UkMnkzHgbg+xBnssAAAB+ElEQVRIx6WW2WKCMBBFJxD2XRTBpShYrfz/B5YZqaigZOh90BByyGxZYEyycuydZQjD2vlO5YKS9GPWPGtx1Cep2GvG5MUfqdNX805fp7dU4ohukMiC3NxoGzMP0nufk4xj26wb4FdX6HWt/A5djE5ZG/TScIbxcw/du80QM28fDeR4ZoKbKeYAo35Lex/oC414AWtBMfuUYunRjE+mblfYZyfwSVFJPm4felLsKSOYEDmZ9V9fk5GTGERkqnO3Ep27SJjW9YIu/qWRvhKDimKBlgHpTHkDNX3j4DM1fYySVOQkRt7HVijIV1Wt0cMQAHJsuMqcxGlyAMhoYnXZ7fi05dHRisFtEJBQ0B+DS9DQJThYOsDRviUOYPfJY6TQhl37e2RxP7hlgEWLkaMlLnAwyEuO6pZYAUanZnExFsqM+TSs59n+LebFk/JXsvPnw4Fofr0sZ9VncVtPJnc9uAApHosMrsT114VHhMqYS+v9H/sLZcJwOfuZ3e+fJWf/jIHkY1tTrunGezwfLKXQ7Oh8eDqP9sk0FuLAdX8+7fHZjyY5HcfpD8/decvlQBNkqsvloCDQ0pgcgajAZXKgrbr7UsjjQE8bkvBMyeEgWov7VTU4mstae5U55Ehbr5kScUOdbcHnSGGefsSM92UliwPe50cxqwDUL/QBaxXuY9gdAAAAAElFTkSuQmCC) no-repeat 0 0;background-size:20px 20px;}
.footer .footer-nav .footer-item .icon-my{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAA3CAMAAACrfONoAAAAgVBMVEUAAACbm5uZmZmZmZmZmZmampqsrKyampqZmZmbm5ucnJyhoaGnp6eampqampqdnZ2ampqampqZmZmbm5ubm5ufn5+ZmZmampqampqbm5uenp6ZmZmampqampqbm5uampqampqampqampqbm5uZmZmampqampqampqampqZmZmZmZl+tCj4AAAAKnRSTlMAPfvn7vYE8WxJHw0H4VcmsKF6OywTxL62QRnQyotcUqpxZjLb1YKZlZuHZXxVAAAB+UlEQVRIx52U62KCMAyFawtyBxG8IKgo0215/wfc0m7YtQ3ivp/poZwm7WEWm9NnJ3zu3fpLzZ7SrDg8aMN0Ul1vwUCcGM2ag81+Q6jTFUj47p43VRSWAiRZ7ZbvlIHLuN8yUvY85wdq92PCdM5C7hE7vONCEJnlQ4f17dLqDEf5wCwS6WltltE8b5iDTQYAvuGokd6ZkwrXPuzDCmqWJf4g+fNPdB8yggJXr3olVztQ7AFgpRfece6MJMSh6YWtbBlJDd8ctAJO8UzrUzxApRUCAFgwGg8A9NH7c/Tz/SzB8NMCwIXWx6gvjAn2pFyNZ2k2GAv0hdj+mThMHSDxrfHgq+jIGFD2da5YIqLjgNPZGR3L8AQxedvAfEonGWcJsznKEHLHQ7txy72D7RIdgWiMqjTDXa2rA0D6QmvkGmvU6AfxE4fhkH53oMjLQBVC6pp08IsfjNHrnel7+A4Wt4La/bILwMXbR+VQlxxoushMAB+m6fVRpv1Y5wbjQlY85HslXV2L1I7bxT0DRNSPtELKmGxb6MlzJ9pV83M2QdzCGImJsKPfdtXCb6TcQUtfkhgt3dCc0F8PzRVUpkUqiwiMF1iq93B7Lle+MxXlxzn6QYV6RgQDFeq+Eb3PQhqmo9wI8Vzqw8UcPKWfz7/0b/AKA6te+CBYsy8XNIBdmAtASAAAAABJRU5ErkJggg==) no-repeat 0 0;background-size:20px 20px;}
.footer .footer-nav .footer-item .router-link-active .icon-home{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA3CAMAAABn5dmDAAAAaVBMVEUAAAAhh/8ZgvsahPsZg/sgn/8ag/oZg/odhv8Zgvoag/sahv8hiP8bg/sZg/oZg/oZhPsZg/sbg/sagvoZgvsag/wag/wZhfsaiP8ZgvsZg/sZg/sZgvwZg/sZg/wahPwcgv8zmf8ZgvoS+ye2AAAAInRSTlMAFo12hAjb1BrWfxwUfG7eebJy2bqUUkIe8/C/l8uYWS0FQGmqRQAAANxJREFUSMft08kOgjAUheGLs4BKlUEGJ97/IcWmcDak5TRx138DTc6XdFOxFKk6T8Sv6Nj3/eXubaF5C+1hjU78bAtN21gyaNoKtIeF5i30LiGtaQ1NW2jC8hqW19Ee1qIpC33wsdB2e5L5rtA2y+sUltawvIblNSytYd2d9fIGDctrWF7D8hrWQyv9l4lUqjs4XVqoctS5SG3se/g8nDgfVtWoh6O25pw67Ee/OrNu9UVe05OLHHj7G21kqFRPjClsCjjggAOew93KXmHB7v6Bq8W4nAyKm0W0KUC+EhJcF6KImMUAAAAASUVORK5CYII=) no-repeat 0 0;background-size:20px 20px;}
.footer .footer-nav .footer-item .router-link-active .icon-msg{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAMAAACfBSJ0AAAAhFBMVEUAAAAbg/sahv8ZgvsagvsZgvsZg/sag/sgif8agvsahPsZhPwci/8Zg/sgjf8agvsZg/sbhPwbhfslmP8+qv8Zg/oag/wgh/8Zg/sahPoZg/sag/sdhf8Zg/oZgvsag/oagvwcg/wchf8ag/oZg/sagvwahPsahPsbg/4Zg/oag/sZgvtU1ZCAAAAAK3RSTlMAQBz6+PKthRTldVARsg/uyks4BwTNVxjDn5p/ItO5p1tSJ9Crk29EMeCKMQWwDwAAAf5JREFUSMedluligjAMgAOFUk65BPHYxnTq7Pu/30y6eQyUxu+PgHw0TdMDxkj6QG5CX/jhRga9AivcaK7vmUfupFWmeoy0fGp9vulHvH0+tKpAaIPIl1FTOEUTLfPLs1M1rq1/++XJPoMrWS89TWxHmzz4GvGDYf5UMDP/FUOtMR9dJuMjszSxfgw0eh46jxP9rZF/4sGjnD0b4iylFg93KaH43yt4Rt1RH9c3T3LSYArq5Pz69RUFWU96NYUaXKLEzn0nME2GyfH+hpG+UoINpcDIgDjSuIEdX/jykS7l+WqWWHoZZl7iVSuor5ZQDkULABF2VVl7CSYxAoCcGrbn/fx+fvaxoz3DK1DIIDY/9lSYjxgCLB3gsMA80ih0HI2GcAcbSg+HPS4ZENJkZEAZCQFXlYLlOVhfgNk5sLwSC+XF9vyX+7d9KZ9z2L00fpLqZcuvF1OfCac+ParPDAei4c4HZeZfyp9/sDcT3xb1N98VBnriry/UsK8stWSGs+i6fnac9bMEQuK1Y13TOr3dH0KrSDe0P9ztR4tqWmvxxdV1f1rgvawnPRffc2/uZyRWXA8cj0JVXA9iYc4TLI9ETyOdYnrg/J6JTi3PA3ehCZE2CceDeuVdjqpd9FE4A5qhR6xTPQV5Q447wfeIdp8/1fzHZZXFdJ4f1cIYkB/Mym5NsWv2NgAAAABJRU5ErkJggg==) no-repeat 0 0;background-size:20px 20px;}
.footer .footer-nav .footer-item .router-link-active .icon-my{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAA3CAMAAACrfONoAAAAllBMVEUAAAAZhvsZgvsag/sZhPoZgvsag/wag/sjnf9ArP8agvsmkP8ZgvoZgvsZhPoagvwciv8ag/sag/schPwbhPsbg/8dhf8ZgvsZg/sag/oag/sag/sZgvsZg/sag/wehP8dhf8fif8Zg/sZg/sag/sbg/8gi/8ag/oZg/oagvsahPsagvsag/oag/sbg/wahPschvoZgvvi1piQAAAAMXRSTlMAPPvvbfZa5QcE7A3hrqFWE3pmSUElHfHo0MW9t5hSKiIYy8B/Lg/b1YxzsqiITEY1SztCUwAAAilJREFUSMedlWt7sjAMhgMUUUBQDoIgw/M8vu/6///cCNmwa6m43V+4mqRt2qQPoDAbVUVum9ZpejnAIMnV5A+WbAzPqHdcwhmBnrnJVVYzTfR4SgFmuQ8TI2ZBTmO/7g8vOZJfuvUmMaXn9p6bVj97IPLW7uEsenJHhxWDxGaL9mKi3AweNfsABa/ACXOQwEzN/9DDzG9ctpRRwhvu0IuBvko9rKOrZYAbeD/2xOwZaFijNwKBEa2gY9W4pyBQYd1BS4RXDQIFXZmOmjdsBIPTjN9AyxgPYAiGrBknoMdq/GLpbZw/EP/v9XyAS+st6fp1LDA+lSp4Ay0hlkdsUYavAg36hihAIOXfB/BcLuJ6aLOV8uCr2Hat8WCEpgulLxKRE9kL4Xs0bLA6Jfxg4mOLrGkHlxPuqOs2uZqUxvIIyJGVrumWjEZ39FxB5tpOULXpjHZLFYiNjw4nkaxtMmZf7WuLIzfhIrw52S7Qx8H5kkN2GANM1mGQkYHp3ilWgbCzTnotfSNOKq5wSnVNyHYZ7+O9MnpyCUyuZyvrKrP5c25H+U9BmBKdw08f4SsKnUbpWJVb4+5zJK8faoUEC+21RVZ77qPQanYIT1gveSeJXo65JPCUWTsh7t5HBAMsLKwdJodds4NBoi8Niuk7BL3AgN7DCQahvH2S8jO8wAeJukPCIKEXdWwc9T+qF+mB40oiHrbxzHgFl+Jf50/x77+KP4DxiwnWHD4B1WKeoUWybs0AAAAASUVORK5CYII=) no-repeat 0 0;background-size:20px 20px;}
.router-link-active{color:#1982fa}
</style>
