<template>
<header id="header">
    <div id="head_nav" class="head_nav">
        <div @click="openMenu" class="fl uinfo_show" :class="{'cancel_btn':showMenu}"><b class="icon"></b></div>
        <div class="nav_title_show"><div @click="openCategory" class="book_title">车享惠<b class="slide_down"></b></div></div>
        <div class="user_nav_show clearfix" v-show="showMenu">
            <div class="nav_list">
                <a href="/service" class="nav_icon_btn wash"><b></b><br>洗车美容</a>
                <a href="/maintain" class="nav_icon_btn maintain"><b></b><br>维修保养</a>
                <a href="/groupon" class="nav_icon_btn tuan"><b></b><br>新车团购</a>
                <a href="/carused" class="nav_icon_btn old"><b></b><br>惠心二手车</a>
                <a href="http://wx.wsq.qq.com/261540592" class="nav_icon_btn community"><b></b><br>爱车社区</a>
                <a href="/personal" class="nav_icon_btn personal"><b></b><br>个人中心</a>
                
            </div>
        </div>
    </div>
</header>
<div id="cate_tab" class="cate_tab">
    <div class="nav_cate_wrap" v-show="showCategory">
        <div class="cate_list_show" id="cate_list">
            <ul class="cate_list clearfix" style="display:block;">
                <li class="sec_cate" name="精致洗车"> <a href="/mobile/service/1"><span><img src="http://chexianghui-srv.qiniudn.com/service_item.jpg" alt="">精致洗车</span></a></li>
                
                <li class="sec_cate" name="豪华洗车"> <a href="/mobile/service/2"><span><img src="http://chexianghui-srv.qiniudn.com/service_item.jpg" alt="">豪华洗车</span></a></li>
                
                <li class="sec_cate" name="车身打蜡"> <a href="/mobile/service/3"><span><img src="http://chexianghui-srv.qiniudn.com/service_item.jpg" alt="">车身打蜡</span></a></li>
                
                <li class="sec_cate" name="无机镀晶"> <a href="/mobile/service/4"><span><img src="http://chexianghui-srv.qiniudn.com/service_item.jpg" alt="">无机镀晶</span></a></li>
                
                <li class="sec_cate" name="封釉"> <a href="/mobile/service/5"><span><img src="http://chexianghui-srv.qiniudn.com/service_item.jpg" alt="">封釉</span></a></li>
                
                <li class="sec_cate" name="内饰洗护"> <a href="/mobile/service/9"><span><img src="http://chexianghui-srv.qiniudn.com/service_item.jpg" alt="">内饰洗护</span></a></li>
                
                <li class="sec_cate" name="消毒去味"> <a href="/mobile/service/10"><span><img src="http://chexianghui-srv.qiniudn.com/service_item.jpg" alt="">消毒去味</span></a></li>
            </ul>
        </div>
    </div>
</div>    
<div id="mask_wrap" v-show="showMenu||showCategory"></div>
</template>
<script>
export default {
  props: ['showMenu', 'showCategory'],
  methods: {
    openMenu () {
      this.showMenu = !this.showMenu
    },
    openCategory () {
      this.showCategory = !this.showCategory
    }
  }
}
</script>

<style type="text/css">
#header {
    height: 40px;
}
.head_nav,.head_bar {
    position: absolute;
    z-index: 9;
    width: 100%;
    height: 40px;
    background: #C20A17
}
.head_nav .uinfo_show,.head_nav .search {
    display: inline-block;
    background-image: url(/static/app/img/top_bar.png);
    background-repeat: no-repeat;
    background-size: 320px auto
}
.head_nav .uinfo_show {
    height: 23px;
    padding: 10px 34px 7px 16px;
    background-position: right bottom
}
.head_nav .uinfo_show .icon {
    display: inline-block;
    width: 13px;
    height: 17px;
    background: url(/static/app/img/webapp_icon.png) no-repeat;
    background-size: 250px auto
}
.head_nav .cancel_btn {
    width: 38px;
    background: url(/static/app/img/webapp_icon.png) 0 -120px no-repeat;
    background-size: 250px auto
}
.head_nav .cancel_btn .icon {
    display: none
}
.head_nav .nav_title_show {
    position: absolute;
    left: 50%;
    top: 0;
    width: 230px;
    height: 40px;
    margin-left: -115px;
    text-align: center;
    font-size: 17px;
    color: #fff;
    overflow: hidden
}
.head_nav .nav_title_show .logo {
    display: inline-block;
    margin-top: 6px;
    width: 57px;
    height: 31px;
    background: url(/static/app/img/webapp_icon.png) -120px -70px no-repeat;
    background-size: 250px 400px
}
.head_nav .nav_title_show .current_title {
    line-height: 240%;
}
.head_nav .nav_title_show .book_title {
    line-height: 240%;
}
.head_bar .title {
    position: absolute;
    left: 30%;
    top: 8px;
    width: 40%;
    height: 25px;
    text-align: center;
    font-size: 17px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden
}
.head_bar {
    font-size: 12px;
    color: #fff;
}
.head_bar .icon_back, .head_bar .icon_publish,.head_bar .icon_ok,.head_bar .icon_addfollow,.head_bar .icon_unfollow,.head_bar .icon_increase,.head_bar .icon_home {
    display: inline-block;
    content: '';
    margin-right: 6px;
    vertical-align: middle;
    background-image: url(/static/app/img/sprite_icon.png?v=1);
    background-repeat: no-repeat;
    background-size: 120px auto
}
.head_bar .icon_back {
    width: 17px;
    height: 16px;
    margin-left: 4px;
    background-position: -68px -27px;
}
.head_bar .back a, .head_bar .back div {
    color: #fff;
    display: block;
    height: 20px;
    padding: 10px;
}
.head_bar .back {
    float: left;
    width: 59px;
    height: 40px;
    background: url(/static/app/img/top_bar.png) right bottom no-repeat;
    background-size: 320px auto;
    -webkit-tap-highlight-color: rgba(0,0,0,0.1);
}
.head_bar .submit {
    float: right;
    height: 40px;
    -webkit-tap-highlight-color: rgba(0,0,0,0.1);
}
.head_bar .submit div, .head_bar .submit .scarf {
    display: block;
    height: 20px;
    padding: 10px;
}
.head_bar .icon_increase {
    width: 17px;
    height: 17px;
    background-position: -102px 0;
}
.head_bar .icon_ok {
    width: 16px;
    height: 15px;
    background-position: -68px -57px;
}
.head_bar .icon_home {
    width: 20px;
    height: 18px;
    background-position: -99px -226px;
    vertical-align: top
}
.slide_down {
    display: inline-block;
    border: transparent 4px solid;
    border-top-color: #fff;
    margin-left: 8px
}
.slide_up {
    display: inline-block;
    border: transparent 4px solid;
    border-bottom-color: #fff;
    margin-left: 8px;
    position: relative;
    top: -4px
}
.user_nav_show {
    position: absolute;
    z-index: 9;
    top: 40px;
    width: 100%;
    background: #fafafa;
    box-shadow: 0 5px 8px rgba(51,37,37,.3)
}
.user_nav_show .login {
    width: 80px
}
.user_nav_show .nav_list {
    margin-left: 0px
}
.nav_list .nav_icon_btn {
    border-bottom: 0;
    float: left;
    width: 33%;
    height: 70px;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    color: #aaa;
    font-size: 12px;
    text-align: center;
    padding-top: 12px
}
.nav_list .nav_icon_btn b {
    display: inline-block;
    width: 45px;
    height: 45px;
    background: url(/static/app/img/webapp_icon_gray.png) 0 -25px no-repeat;
    background-size: 160px auto;
}
.nav_list .nav_icon_btn.home b {
    background-position: 0px 0px
}
.nav_list .nav_icon_btn.tuan b {
    background-position: 0px 0px
}
.nav_list .nav_icon_btn.maintain b {
    background-position: -58px 0px;
}
.nav_list .nav_icon_btn.old b {
    background-position: -112px 0px;
}
.nav_list .nav_icon_btn.community b {
    background-position: -112px -65px
}
.nav_list .nav_icon_btn.wash b {
    background-position: -2px -63px
}
.nav_list .nav_icon_btn.personal b {
    background-position: 0px -126px;
}
.nav_list .nav_icon_btn.firm b {
    background-position: -58px -126px;
}
.nav_list .nav_icon_btn.active {
    background-image: url(/static/app/img/bg_nav_icon.png);
    background-position: 0 0;
    background-repeat: repeat-x;
    background-size: 79px auto
}
.nav_list .shaihuo.active,.nav_list .album.active,.nav_list .tuan.active {
    background-position: 0 -100px
}
.nav_list .nav_icon_btn:nth-child(-n+3) {
    border-top: 0
}
.nav_cate_wrap{position:relative;z-index:8;top:0;text-align:center;background:#fafafa;box-shadow:0 3px 10px #535050}
.nav_cate_wrap .nav_title{display:block;height:40px;line-height:40px;margin:0 8px;font-size:17px;color:#5e5e5e;}
.nav_cate_wrap .cate_title{padding:8px 10px;display:block}
.nav_cate_wrap .cate_tagname{color:#5e5e5e;font-size:16px;margin:2.5px 7.5px 0}
.nav_cate_wrap .cate_title .icon{width:26px;height:26.5px;display:inline-block;background:url(/static/img/cate_tag_show.png) no-repeat;background-size:100px auto}
.nav_cate_wrap .cate_shopping .icon{background-position:0 -60px}
.nav_cate_wrap .cate_clothing .icon{background-position:0 0}
.nav_cate_wrap .cate_shoes .icon{background-position:-30px 0}
.nav_cate_wrap .cate_bags .icon{background-position:-60px 0}
.nav_cate_wrap .cate_accessories .icon{background-position:0 -30px}
.nav_cate_wrap .cate_home .icon{background-position:-30px -30px}
.nav_cate_wrap .cate_beauties .icon{background-position:-60px -30px}
.nav_cate_wrap .cate_title .slide{border:1px solid #5e5e5e;border-left:0;border-top:0;display:inline-block;width:3px;height:3px;-webkit-transform:rotate(45deg);margin-top:10px}
.nav_cate_wrap .cate_title.active .slide{-webkit-transform:rotate(-135deg);top:7px}
</style>



