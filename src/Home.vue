<template>
<div>
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
    <swiper :list="list" :height=150 :auto=true></swiper>
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
</div>
</template>

<script>
import { Cell, Group, Swiper } from './components/'
const version = require('../package.json').version
export default {
  components: {
    Cell,
    Group,
    Swiper
  },
  data: function () {
    return {
      version: version,
      list: [{
        img: '/static/app/img/ad_tuan.png',
        title: '如何手制一份秋意的茶？'
      }, {
        img: '/static/app/img/ad_1.jpg',
        title: '茶包VS原叶茶'
      }, {
        img: '/static/app/img/ad_2.png',
        title: '播下茶籽，明春可发芽？'
      }]
    }
  }
}
</script>

<style>
@import './app/style.css';
.wall_wrapper{ /*box-shadow:0 1px 1.5px #e3e3e3;*/ -webkit-transform:translateZ(0);}
#wall_welcome .cate_icon b{display: inline-block;width:51px;height:51px;background: url(/static/app/img/cate_tag_show.png?v=1) no-repeat;background-size: 167px auto;}
#wall_welcome .groupon_icon b {background-position: 0px -1px;}
#wall_welcome .wash_icon b {background-position: 0px -67px;}
#wall_welcome .daily_icon b {background-position: -58px -1px;}
#wall_welcome .used_icon b {background-position: -116px -1px;}
#wall_welcome .community_icon b {background-position: -116px -67px;}
#wall_welcome .person_icon b {background-position: 0px -134px;}
#wall_welcome .firm_icon b {background-position: -58px -134px;}

</style>
