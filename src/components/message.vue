<template>
  <div class="message-page">
    <v-header :headerMsg="headerMsg"></v-header>
    <ul class="menu-list">
      <li class="menu-item border-bottom-1px">
        <router-link to="/msgResume" class="flex-box">
          <div class="flex icon icon-resume"></div>
          <div class="col flex">申请进程</div>
          <div class="icon-right"></div>
        </router-link>
      </li>
      <li class="menu-item border-bottom-1px">
        <router-link to="/msgState" class="flex-box">
          <div class="flex icon icon-msg-state"></div>
          <div class="col flex">奖励进度</div>
          <div class="icon-right"></div>
        </router-link>
      </li>
      <li class="menu-item border-bottom-1px">
        <router-link to="/msgJobInvite" class="flex-box">
          <div class="flex icon icon-msg-job"></div>
          <div class="col flex">职业机会</div>
          <div class="icon-right"></div>
        </router-link>
      </li>
      <li class="menu-item border-bottom-1px">
        <router-link to="/msgFriendInvite" class="flex-box">
          <div class="flex icon icon-msg-invite"></div>
          <div class="col flex">邀请好友</div>
          <div class="icon-right"></div>
        </router-link>
      </li>
      <li class="menu-item border-bottom-1px">
        <router-link to="/msgFriendInvited" class="flex-box">
          <div class="flex icon icon-msg-friend"></div>
          <div class="col flex">好友请求</div>
          <div class="icon-right"></div>
        </router-link>
      </li>
    </ul>
    <v-footer></v-footer>
  </div>
</template>
<script type="text/ecmascript-6">
import header from './header';
import footer from './footer.vue'
export default{
  data(){
    return{
      headerMsg:'消息'
    }
  },
  components:{
    'v-header':header,
    'v-footer':footer
  }
}
</script>
<style>
.menu-list{padding-top:52px;}
.menu-list .menu-item{padding:19px 14px;}
.menu-list .menu-item .icon{flex:0 0 35px;height:22px;}
.menu-list .menu-item .icon-resume{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA8CAMAAADxNwKKAAAAdVBMVEUAAAAaGhobGhobGRkcGholHBwbGhobGhocGhocGhoeHR0bGRkeGhobGxsaGRkbGxsaGRkaGRkaGhoaGRk8PDwbGhobGhobGhocGxsaGhopHx8aGRkaGRkdHR0bGhoaGhocGRkaGhobGRkaGRkbGxsdHR0aGRnDuNphAAAAJnRSTlMApKDdixTklW5ZKpgdXdeG699qvAT573xJQgzzzSPSdGXCsJBVGtUf4cAAAAEPSURBVEjH7dbLbsIwEIXhCRASKE5J4tyTQm/z/o9YU9paCjl2BnWBEP/S0ifL482QSeUl44p8R5eFOXtaTjCD5Ewxy5i96uUJVk6y02miCZbwFGNTQF5lmEztny0TKLJMoiyTqF+W7kTKMpGyTKQsEynL5qieCz1mfhUwH2nE/Kph5kWcnUvO/9Z6FUV8UexXdOjGajVDUduovzKg3IX/pZoN7hMpxY7WSB1daq+Boo8Ylg3XTeOh5qi2imDvDVIHdtRpoOrCoXr4rnCL07cww3tVw+sSllRIVexKA7Xt17jVLUzjoa5TYKuE1SdV/Wywi5kFHZtqUiwu1US5WNVE1L7JTKHou01eziZpNBjxBSRUm6zCh3doAAAAAElFTkSuQmCC)no-repeat 0 0;background-size:19px 21px;}
.menu-list .menu-item .icon-msg-state{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAllBMVEUAAAAhHBwaGRkeHBwaGRkpKCgaGRkbGhobGhobGRkaGRkaGRkaGhobGhodGhobGxsbGxsaGRkaGRkbGhobGRkcGhojIyMnJycaGRkbGRkaGRkbGhobGhobGhodHR0eHh4gICAaGhoaGhobGRkbGhocGhocHBwbGhobGRkbGhoaGhoaGhoaGRkaGhoaGhobGhoaGhoaGRlzzSthAAAAMXRSTlMAHt8o5wrq+e3d18KdWzEtJPTMs5c8Dgbxq6aJekMrGRO8dG5jRzbRtoBpVk6RHMiHx4rB5QAAAjxJREFUSMedlut2qjAQhUcxgICIQi0o3lvvx3a//8udxRBAqkjI98MFZH0a90wSqDOraGjZ7l6QBr/I6R+6ux4KJp3tEYDwQ6wvJtDvOvMhEPFFYAN7JWUz9lez7MIHbEHMHnBbxfX+ZCNjMB+JEZBQTg8wW9SPEA+YLuAVswHit6q/xRNTObYEHGpm9g+v+CZmC0RvZtxHgT39cazyJrOFB2DVpH4uIHF2Bj9YeoU/9RIbwKLJDaaFensIPsEDXmMjxWAmu0965IKC4agpqTly3B794YoMe+S3JWXt6JmzTLwlKcd/OXwEgLDhZ50iD0EvufGkXg2OvaKYV2qC/1RVAz9yLMR9x7FRJdUI992iyvYPVtqsysATWXnnqfXH7xcaUC7lEHXiHZGyPKmpx3RDLdwearVlyTTEfeUHgtpJgXI1BgO2+z1SxAWAL8oxutl3ZASkZf/KvUjH3nAjXUjL5v6KZ6Rj+7wVnYm623JB2jPSsReQddKwvyFbU8Nem7wpGqRjbyHLpGGnPHoi0rAPXKXBhjRsMeShJZGG7UHuXd1tWaXpJ2nYM346CYg07KhoLQ37IKukwCq3h716e8R30rENZOxJCeGgZu/4htQ4AzWbD6RUUTZRt39kb6nA2Vp2ZfOpaqi/F+M0NkubrzYd5IQqm88zoSYv+fQSpR0gg9QQvHLnpW3yBymS5E7oosJVlQ0LT5xJlS88EZC6bUEiX5Ei6oAxZ32QCk7tKKgTYjm6+vw97iRc0yv+A+9dnzfGd9ayAAAAAElFTkSuQmCC) no-repeat 0 0;background-size:21px 21px;}
.menu-list .menu-item .icon-msg-job{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA8CAYAAADG6fK4AAAABGdBTUEAALGPC/xhBQAACSlJREFUaAXVmn9wnEUZx2/v8oOLTdrGIfTeJG2GxAYtQ4EMHUNLJ6AOtH+IwFQYGUAFJ4OVMpY6OOMMFEYdRSg4A1a0QFuh6FRhHIcKRmxGmyKDGatDsQmhbdLmEnXatI1NvV7uXT/Pe7eXN2/uknuTXDx25r3dffbZ3ef7Ps8+++y+pwKuVGtZN9qBwNcgNWmtF7qa8lpUSsV1IPCHUCj05WPHjkVnOpmSARoaGipGRka2BrT+wkwHnEl/wPWoYLDl+PHj/TMZJyidCwGQyIF1NGjbbq+pqamW+nSTsizrs4z26+kOkI9+aOx9NHbtdDUmoH4HqM94hDsYUOrP0DD1PCetb2WGcu8sMwGmqi3rBGqvdA363tLGxuXt7e2jLlreiszfw/z1mSaYLrCgBxAKUu/MFaBMQNw0ZPsYa2xvbW2t5aZPVXYchYcp/ybnmTBVHWQdPeVtEmB2ItHuB1gmUN5x56ze39//dfaYJ70T+gVWUKAETP/AwMaZAis4ULMBrCBBuYBtkbI7pUxxUudRsKAECKb4AKaYCdhSnEdWYEXut5BLuaWlpejw4cMTNstc+obD4dGurq7hXHgNjwCrjkQkCthoaJKjMQPsWm8Q7AtUdXX15d1dXa8z5kXuCXItD8fjms12R380+qVc+wifA8yywKEfcPfLBsyX+Smtr2HQaQFKCYM1BW5EGMmTSesTUmDTn79u3bpQijoh40VsgucJb4MLWHqD9qWpopKSn8Xj8fqAbS/1Dp5LXSt1HjN6HuHGNnilOrGlFQgX3r9//x2Msz3bWAIMTYvpZdTYkiVLWnp7eweUFYmMTcBoTLjdr3lkEyIXOib9SUKhDnjFahIIsJ3Y7W1bqWyxpwLVJng/PmF8pQ6Vl5ev+L+DEsFqLOsHdlLQCXL6JQSVut/XmvI7Qa78x6PRbxD33Qv/f3Ltk42P64hqX2sq20CzQSfu+zEn3h2sl+U8n8AEszoNM58OBisw3cdN3eQFA0oE4qR7jkwOp/JMmerr66vOjYxMAFUQ5jel9D4ZfGuKc83qRCKxwOc802bn2uwv3ohhqsF8gcL9fjExOvrCVIPOZjvzDTY1NS3u7OyMe8e1bXtsE3c1+jI/Iop5rr5zUmTfDJ8+fdqXnL401bxy5da39u0bwutUzQki29ahoqK2np6eWKb5gsHguMDB8PgCtXv37gQdXzKdCzX3pdZ8gWBfUnKkma3xZ20gvwKx0Taw0O9jpa8lSK2jf4g49F+sob3Y1HPRaPT3fsc0/HOuKdEKt8IPEQm8R2C6gXoDwsjLFU92EfXboLfB82pjY+O0DqNzDorgVb6uPILwxak3m0A7fyc630f9bIomR9vPDQ8Pty9btsy3x51TUAC6G9NqTQnO6UI9sbCycgFHneWY2zUrV62aT2B7F/RTDo/WV54aGnouDTTHgq+jR11d3QWjsVgr0ojJZE0IlcDdvkIk8EfDxBoKc1lyhLpzchbhCWJ3mnZ3Dq/cyv4V2keEDu/V8L7l5pFyKvb75zi6Uo+JLeecOPXexZt+CtOYtA+mFUjY9j1NllXVGY2OOMyJxA3kSUBKvZYNkPAS2L7PmnqQeZ52+tr2neQTQDltGX58mV9I63ex/aSQGQZzk9DWu2lANLBhrzbtvPmfm3K2HE2/bNp4hXI3knPypam+aLSDT6mR0ZGR9CVHpplGg8FRTO8DgI01a+3u87exhswltHUSV38MrdcyTiQzV2aqL1AyBCHLGTJ5Jk3jACU5xzxbIFA2aWcaN2/eHPzJs8+a72buvlN1dS47pmSaDQZ0dsiMw6abNkVD8+bbtm27FJrjKMi7ve2T1X2tqckGmqqNu4M2wwPADXg4owVDHpfrROJ7aYJS7elyDoU5AwWQ2408rJMa+ULI+rzQ0EyOxyzjmnkLzmGNoXHPeOtkF51pvlTB95ryDpBLncPlUtzzBjcvwC7jfuEAbbtZf2/QVobw9QNaf5XyknG8gcClHR0drdB+5KZnK8+Npmz7SUAkwyKlfoowvSIQNAuN3c9Gu4fnl9z9fR+yAwig59g+HhM24UXTjy5evDinf+HkHRRrZw1SrXUEU6o7EomsLyktvRwhX0TwuNA9SQOmg8PhVYROD8KzU9p5AR/lbuRhD2/Gal5BcbdQjCbS33ABt0nuGo4ePXqKLxl3FJeUVLERyxWyk7hdfT4YCtUCZlVfX99BIcLzTTLn8w9jra+zrEsc5kl+8gpqcHDwPt5wozO/Um0I+xu3LALO/bEB3hXNzc2DHp5BwH47RSuKaz3hI5ybX8p5A+V4Nq0fMhNiRn8iQngGz7ZTAlahk1+G9u4xPJSNQ5A/gZUS//0Q/h18LRmm/5DwwbNGTNr0yZTnzfvxJ67vsBDmm0kxnUddZQlsr4cmb33cixWHwGlg17mzZ++lbQMgAmjzTslMYvPewvG/jVDMkMbl4wYc1zKDCl7qYgDdnW0IBG9BC7dhbp8SHrTQxfOClMUhcBp4GDA3SD1j0vqS7u7uWzK2QcwLKG5V5TvTf1OTYj3qAOvicfLXhIbgJWTpwx/OYmO4rEw83Wmnj9brKTdLmfwDXsK3yN/kMWM6bNl+8gLqyJEjvUVarw4pddM8pao42V7hfK7ROg0EZE5Qi8C/JSLfQ6D8bxA8IoICulgepxwI7MFTfpcxPo0nXMgLuA6hb8bp/CIbqLytqb6BgU4mlSedikpL956PxRIQzGea0WKlNhqGRYsWPT04MNAKoKTHTDakb5XwlqKpvYY/W54XTWWbTFw4JvSOaeetP3M0Gj1k6rKHiSmaOnmirKys3VXPqZgJFBaRx6TUVhkdcD2sPcfc3LOJKdLo/FMUQV5Knd/cLOlylg8EmvWb9P+GE9Vf5SciNv1yzeVugrVx8bzy8iuJGpy9x9uXUGodGrt6QWXlV7xt7nosFlvhrksZLQ3JPzPfBMh17kaAHmC1vg3N2SbcbQVUnodwNyGPOUg6ouGcrlfszjcTIf+qgISdiSgHI5Z1RejMmTP/qKiokCBRjs8f2oR1ncdk1/Lfp6jjKNj4Wlmcuz6siAB0AvlvZ70eEAzOfnHy5MkY99avzC8vlzvtC2GSb7rhQgaJjHG8Yy+ebtcF4fDn+ftOeqv4H6xzvmSXbD0vAAAAAElFTkSuQmCC) no-repeat 0 0;background-size:19px 21px;}
.menu-list .menu-item .icon-msg-invite{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAq1BMVEUAAAAcGxsiHh5tbW0bGhoaGhoaGRkaGhobGRkaGRkaGRkaGRkbGxsnIyMxMTEaGRkaGhoaGhobGhobGRkbGRkbGhocGhocGxsbGhoaGhoaGRkaGhoaGhocGxseHBwfHh4bGhoaGRkaGRkbGhobGhobGRkaGhoeHh4bGhoaGRkaGRkaGRkaGhoaGRkbGhobGhoeHh4bGhobGhobGhocHBwaGhocHBwbGhoaGRkrmT+/AAAAOHRSTlMANRQC+InLfo7z3sAuCgX7w5xhs6BnUUnQu5lWRD8pHu7r6NmEd0wh8OLWraekcWwQ5Vs6GpEk74naDgcAAAMOSURBVEjHnVfXgqowEKWJ0gRZsCPqWta6upbN/3/ZZUYiAZLo3XlBcnKYZLpKXSbfkWlbhFi200iU/5H2d5+wsh2/z+3apCrhu2pbhCMbs5G+Qd7T/Z+DfSfaBTP6bsUvuQ2C8tH16EpvTunNF9zkYSGVXVO/KPtbytU/YY/jlVevi4FjAOC7MvIPXvbEQe74WVNGRv/yvZri4Udi7gQPLTvVVkxeAv4jQk1AL0LyBxhFE6ErIA+F5LnUJvo5g20R6sGnO4pQOoC3BeD9RRg1ARfdyqVRJLPnXQCqAErCf4GaZW4+/vHOGoAtMdmExBaiFgaYSDwDclUIBxlqnERoDw62lPsilNaJlSKFF1Jj74TksygjUa6QlL4ns/bgRX1zBeBJnjbKUkZWppA2ujCrsM50VYE79jJrewuSiz1MOPgYIMvlUpuzUvsa8aOEzO6cANmQijjrWmoYuM6JnrpMx/USyXP1MN/fv8Wj0THK+4/RrbKP2Km4encuNXt3+2Bfqv7A5pzWqiaZJ+yuJa6dNV4ktFg7b/DEacWCaJ2oGqOwaqSVfJinOXqgBXKEulVesRnoT8Xo36S4/iT/2eIl2dpHm9HrhPC2VyijUHaaYn/hOrWf697By4QlS0tHOyBM+sywBfHIa57JFM1EWxQ7GlyyYvNamxcUvk7o2bRmIxOTkAM8Y9pUZ6VaEw4dC/OOiZAVOqEkEJoHcGpx2zAglclnTHcuS1xDzdPfojEX5xHPOlp9fmiiZpIpC+F5hRWn6CATkxTSabNFscM1mD59pm/PosRf8+YqJZNuuOTLMwt6fl4g4jUnWlc8cgRID6720DtQ+XVtq9fJLpas7HqejSaMhRMl7doxMa5sHC5omBqJeHjze3SSd9nSZGmZ4l/ZaBjgtjLaRi4eaERkbXv9GJlvTKdwgyIYIulgSD0xbT4coV8igvKp0WH3LPvLYtBG83HYO78k56YIfuGpJZKcSU0GeRHx5WMjFr4K1TrqzIwUK3JRdz7TahpaYTzza4iZINceRv2pb8yD24rZ/A9rGc8KWhMg1gAAAABJRU5ErkJggg==) no-repeat 0 0;background-size:21px 21px;}
.menu-list .menu-item .icon-msg-friend{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA8CAMAAADhV0xWAAAApVBMVEUAAAAoKCgaGhobGhoaGRkbGhoiICA1NTUaGRkaGhoaGRkaGRkaGRkbGxseHh4aGRkaGRkaGRkaGRkbGhocGhodHR0aGRkaGRkdGRkeHBwmHR0bGhobGhoaGRkbGRkcGhoaGhoaGhobGhoaGRkaGhobGxsdGhodHR0eHh4aGhoaGhobGxsbGxscGRkbGhoaGhobGxscGRkbGhoaGhoaGhodGhoaGRnCBF4CAAAANnRSTlMADPfv4GgVBPTawdW4LhD66susYEMd584yKAjkvZuWUMSyi6BWSjsiGZCIN3xuhX5dWsh2cz2kJeRUAAADFklEQVRIx5WXaWOyMAzHQU4BOUQ88cJ5zzl3/L//R3tKH9dZSLfu98qGJk3TJK1Gm95lM7I7gG8H1cD4K9OPEI90t3/Tf7LR5GLo4y1AMBxVhaaBvnA86m82/WD4Ne44WvpHcNZL80syECaeNfQH/xffSSeS4s7vPng8foEpSw8v69IHIxmzUdzb7XqxQfPK16e+FvxkR846vUe1n7vEtBEYdOIUFhp0NvvmpEktXxk0OThptDidFhGPbHKaynPea+mN1i9q76yqJxY7WfWe5OxY11bp+Oxt9ukqRdd87gCzyaOo9isj9eMu0B23So5JbffBJBhzVX52iai7IbCWY0in2xYYkrVwmAFLMRors20kphGmQzE4g5ETs87qwzVK4FPERFX6L8CrsnsAlQgJGCd6FVdlIAYCMagrJiIm2RgaSmaYid8BAN9sz0nRVRsIYYnfVzCeKA/EIj9/fAHj2p6zAkxlC0/w9m1MUc1HkQZkIiyEMTBKutFFPzThrVQLC3qf2FFynr0z7yHaoOPtMDkZBTOUkn+jKgYvA8opEcESyLxGU/fHVD9JgaBl4RAA1kQ+L0a6p/bqt8/niVn15dhMOmAEdMKhMMZbU+w+ZxLMzu2LgU6FJTCK50CnrC55fjkGfKl1u8beubxtIACyIWSyrepyS4r2jcGx5l1xeR+F94QLVVO6QE3/wOr/fHOc26drqHDrzfmHxinWws7S0GKOVlvxVnSS0+wT7u1D5sYRv0sLQ5MrIN9Q0e/vE8Jh9IQDfBh4hjbxm2TgwB0yDX1M7kIsNevQ1VR2b8fIQq3RePn55SIvft19HoB4kX1+J69j/qTuPCR7+RizDQTWx1SlP8nwzVya5lUJBOGY1l/6YpG3Y69lvVql4nX2SurfvwaOMlKHPLpPysmOVRMJ92gmfdQkg9bJ29y3XOPPBF8pbWbFM9ffGRr0LKIypxZ9Lasf9Ikr+yUaoXbD+BBDkShnXQN7Hu7WI93WUhbTU0lSh6AvRnp7kIoioZ64NOIhI0UxU/8fUmXtTD7bzJp7hj4nK5Ry5h+NkqZZas9DBwAAAABJRU5ErkJggg==) no-repeat 0 0;background-size: 22px 21px}
.menu-list .menu-item .icon-right{flex:0 0 18px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhEMUFBRDc5MjMxNTExRTZBNEFFRjlCMDdCRDBBOTdCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhEMUFBRDdBMjMxNTExRTZBNEFFRjlCMDdCRDBBOTdCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEQxQUFENzcyMzE1MTFFNkE0QUVGOUIwN0JEMEE5N0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEQxQUFENzgyMzE1MTFFNkE0QUVGOUIwN0JEMEE5N0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7nwW9KAAABQElEQVR42tTYPQ6CYAwG4I8Gr+Dg7kxCGB28gpNndPIKDo6EhNndwStIgri6GPvz9rVJRwoP/doQyjzP5dccx3FdAKF5NtHcaJqm6zAMm0IYonxz2yUvjCgxHAdKlBjPOB1KHAaXCqUCVVV1ZkVpl8KRFaUCdV33ZEWpZ4gVZVoKjCjzlmNDiUcRJpR4FWJBiWcxBpR4F8xGSUTRTJREFc5CSWT7M1ASPaRoVDgIjYKAkCgYCIWCghAoOCgalQKKRKWB/u5L4Vv0fb9aunNaunH4+AFzW3Lftu39b0BRmBRQJAYOisZAQQgMDITCQEBITDgIjQkFZWDCQFmYEFAmxh2UjXEFMWDcQCwYFxATxgxiw5hAjBg1iBWjBrFi1CBWjMuWY8KYQWwYE4gRY1kKlJh31KqL6nrXNM2jEMZLgAEAPI5cveZbx7gAAAAASUVORK5CYII=) no-repeat 0 0;background-size:18px 18px;}
</style>
