<template>
<div class="wall_content">
   <!--筛选 xxxxxx -->
    <div id="book_wall">
      <div id="filter" class="filter">
        <ul class="cate_select flex_col_box clearfix">
          <li v-for="i in filter.length" class="all_cate flex_col all_slide_wrap" :class="{'active':filter[i]['active']}" >
            <a @click="chooseFilter(this)" href="javascript:;" class="title">{{filter[i].title}}</a><b class="arrow"></b>
            <ul class="all_cate_list slide_mod" id="{{filter[i].id}}">
              <li v-for="j in filter[i].items.length"><a href="{{filter[i].items[j].url}}">{{filter[i].items[j].title}}</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    openCategory(){this.showFilter = !this.showFilter},
    chooseFilter(self){
        for(var i=0; i<this.filter.length; i++){
           this.filter[i].active=false 
        } 
        this.filter[self.$index].active = true
    }
  },
  data () {
    return {
      showFilter:false,
      filter: [
        {
           'index':1,
           'active': false,
           'title':'区域',
            'id':'city_zone',
            'items':[
            {'url':'/service/filter?zone=6', 'title':'江宁区'},
            {'url':'/service/filter?zone=8', 'title':'雨花区'},
            ],
        },
        {
            'index':2,
            'active': false,
            'type':'price',
            'title':'价格', 
            'id':'service',
            'items':[
            {'url':'/service/filter?price=all', 'title':'全部'},
            {'url':'/service/filter?price=lower', 'title':'低-高'},
            {'url':'/service/filter?price=high', 'title':'高-低'}
            ],
        }
      ]
    }
  }
}


var current_category_id = '1';
var current_sub_category_id = '';
var default_cities=[{'id':'0','name':'南京'}];
var default_zones = [];
var sel_zone = $('#city_zone');
var sel_service = $('#martList');
$(".slide_mod a").off().on("touchend", function() {
    var t = $(this), i = t.parent("li"), s = i.parents(".all_slide_wrap");
    setTimeout(function() {
        s.removeClass("active");
        s.find(".title").text(i.text());
        i.addClass("active").siblings().removeClass("active");
        var zone_id = $('#city_zone .active').attr("data-id");
        var service_id = $('#service .active').attr("data-id");
        filter_services(zone_id, service_id);
    }, 100)
})

function filter_services( zone_id, price_id){
    $('#loading_wrap').removeClass('none');

    sel_service.hide();
    sel_service.html('');
    // var url = '/api/services?category_id='+ current_category_id +'&sub_category_id='+current_sub_category_id;
    // if(zone_id && zone_id.length>0 && zone_id != '0') url = url +'&zone_id='+zone_id;
    // if(price_id && price_id.length>0 && price_id != '0') url = url +'&price_id='+price_id;
    // $.getJSON(url, function(data){
    //     var services = data.services;
    //     for(var i=0; i<services.length; i++){
    //         var discount = services[i].now_price*10/services[i].price;
    //         var dom = '<li class="product" attr-pageno="1"><a href="/mobile/service/'+ services[i].id +'/detail" class="url">\
    //                   <img class="photo" src="'+ services[i].thumb_img +'">\
    //                   <h3 class="fn">'+ services[i].title+'<p class="firm">'+services[i].firm+'</p></h3>\
    //                   <p class="price"><strong>¥'+ services[i].now_price +'</strong></p>\
    //                   <p class="other">\
    //                   <del class="o1">¥'+ services[i].price +'</del>\
    //                   <span class="o2">'+ discount.toFixed(1) + '折</span>\
    //                   <span class="o3">已售'+ services[i].sellcount +'件</span>\
    //                   </p>\
    //                   <i class="icon_hongbao"></i>\
    //                   </a>\
    //                   </li>';
    //         sel_service.append(dom);
    //     }
    // });
}


$(document).ready(function (){
    // filter_services();
})
</script>

<style type="text/css">
</style>



