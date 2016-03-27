<template>
<div>
<div id="screen_wrap" style="min-height: 554px;">
    <nv-header></nv-header>
    <filter></filter>
    <div class="product-list" id="wall_wrap" style="background:#fff">
      <div class="no_content none"><p>暂无内容</p></div>
      <ul id="martList">
        <li class="product" attr-pageno="1">
          <a href="/mobile/service/17/detail" class="url">                              
            <img class="photo" src="http://chexianghui-m.qiniudn.com/jingzhixiche.jpg">
            <h3 class="fn">精致洗车-11月享附赠一辆同行车免单<p class="firm">天天汽车会所</p></h3>
            <p class="price"><strong>¥30</strong></p>
            <p class="other">
              <del class="o1">¥50</del>
              <span class="o2">6.0折</span>
              <span class="o3">已售7件</span>
            </p>
            <i class="icon_hongbao"></i>
          </a>
        </li>
      </ul>
   </div>
</div>
<!-- <div id="loading_wrap" class="none"><div class="mask"><span></span></div></div>
<div id="mask_wrap" class="none"></div>
<div id="tips_wrap" class="fadeOut none"></div>
</div> -->
</template>

<script>
import NvHeader from './components/nvheader'
import Filter from './filters/filter'

export default {
  ready: function () {
  },
  components: {
    NvHeader,
    Filter
  },
  data: function () {
    return {
    }
  },
  methods: {
    change: function (value) {
      console.log('change:', value)
    }
  }
}

$('#loading_wrap').removeClass('none');
$('#city_zone').on('change',function (e) {
     change_select(2, this.value);
})
$('.book_title b').show();
</script>
