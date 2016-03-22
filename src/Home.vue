<template>
  <header id="header">
        <div id="head_nav" class="head_nav">
            <a href="javascript:;" class="fl uinfo_show"><b class="icon"></b></a>
            <div class="nav_title_show"><div class="book_title">车享惠<b class="slide_down" style="display:none"></b></div></div>
            <div class="user_nav_show clearfix" style="display: none;">
                <div class="nav_list">
                    <a href="/mobile/service" class="nav_icon_btn wash"><b></b><br>洗车美容</a>
                    <a href="/mobile/maintain" class="nav_icon_btn maintain"><b></b><br>维修保养</a>
                    <a href="/mobile/groupon" class="nav_icon_btn tuan"><b></b><br>新车团购</a>
                    <a href="/mobile/carused" class="nav_icon_btn old"><b></b><br>惠心二手车</a>
                    <a href="http://wx.wsq.qq.com/261540592" class="nav_icon_btn community"><b></b><br>爱车社区</a>
                    <a href="/mobile/personal" class="nav_icon_btn personal"><b></b><br>个人中心</a>
                    
                </div>
            </div>
        </div>
  </header>
  <div id="wall_welcome" class="page_view wall_wrapper">
    <div class="wall_scroller">
      <div id="slider" class="slider home-hd">
          <div id="slider-bd" style="overflow: hidden;">
              <div class="slider-cont" id="slider-cont">
              <ul class="slider-list">
              <li style=""> <a href=""><img height="400px" width="200px" src="/mobile/static/img/ad_tuan.png"></a></li>
              <li style=""> <a href=""><img height="400px" width="200px" src="/mobile/static/img/ad_1.jpg?v1"></a></li>
              <li style=""> <a href=""><img height="400px" width="200px" src="/mobile/static/img/ad_2.png?v1"></a></li>
              </ul>
              </div>
          </div>
          <ul class="slider-indicator">
            <li class="active">0</li>
            <li class="">1</li>
            <li class="">2</li>
          </ul>
      </div>
    </div>
    <section>
    <ul class="list_ul">
    <li><a class="cate_icon wash_icon" href="/mobile/service"><figure><b></b><figcaption>洗车美容</figcaption></figure></a></li>
    <li><a class="cate_icon daily_icon" href="/mobile/maintain"><figure><b></b><figcaption>维修保养</figcaption></figure></a></li>
    <li><a class="cate_icon groupon_icon" href="/mobile/groupon"><figure><b></b><figcaption>新车团购</figcaption></figure></a></li>
    <li><a class="cate_icon used_icon" href="/mobile/carused"><figure><b></b><figcaption>惠心二手车</figcaption></figure></a></li>
    <li><a class="cate_icon community_icon" href="http://wx.wsq.qq.com/261540592"><figure><b></b><figcaption>爱车社区</figcaption></figure></a></li>
    <li><a class="cate_icon person_icon" href="/mobile/personal"><figure><b></b><figcaption>个人中心</figcaption></figure></a></li>
    
    </ul>
    </section>
  </div>

</template>

<script>
import { Cell, Group } from './components/'
const version = require('../package.json').version
export default {
  components: {
    Cell,
    Group
  },
  data: function () {
    return {
      version: version
    }
  }
}
</script>

<style>
@import './app/style.css';
.center {
  margin-top: 15px;
  text-align: center;
}
.vux-notice {
  color: #666;
  line-height: 40px;
}
.vux-title {
  vertical-align: middle;
  text-align: center;
  color: #04BE02;
  display: inline-block;
  width: 75px;
  height: 75px;
  line-height: 75px;
  border-radius: 50%;
}
body {
  font-family: Helvetica, sans-serif;
  background-color: #fbf9fe;
  padding-bottom: 50px;
}
</style>
