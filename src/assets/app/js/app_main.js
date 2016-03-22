$(document).ready(function(){detectDevice()})
function detectDevice(){
    var e = window.innerWidth, t = window.innerHeight;
    $("body").data("width", e).data("height", t);
    $("html").css('height','100%').css('min-height',t);
    $("#screen_wrap").css('min-height',t);
    $('.page_view').css('min-height',t-40);
}

var $mask = $("#mask_wrap");
var $uinfo=$(".uinfo_show");
var $user_nav_show =$(".user_nav_show")


function formatTime(e) {
    var t = new Date(parseInt(1e3 * e)), i = new Date, s = Math.round(i.getTime() / 1e3) - e, a = i.getFullYear(), l = i.getMonth() + 1, n = i.getDate(), o = t.getFullYear(), r = t.getMonth() + 1, p = t.getDate(), d = t.getHours(), c = t.getMinutes();
    thatFullMinute = 10 > c ? "0" + c : c;
    var u;
    return u = 0 > s ? "刚刚" : a === o && l === r ? n === p ? 3600 > s ? 0 == parseInt(s / 60) ? "刚刚" : parseInt(s / 60) + "分钟前" : "今天 " + d + ":" + thatFullMinute : n === p + 1 ? "昨天 " + d + ":" + thatFullMinute : n === p + 2 ? "前天 " + d + ":" + thatFullMinute : r + "月" + p + "日 " + d + ":" + thatFullMinute : a === o && l !== r ? r + "月" + p + "日 " + d + ":" + thatFullMinute : o + "年 " + r + "月" + p + "日"
}

$('.nav_title_show').on('touchend', function(e) {
    $('.all_slide_wrap').removeClass('active'); /*关闭筛选列表*/
    if( $('.book_title b').hasClass('slide_down') ) {
        if($('.nav_cate_wrap .cate_list li').length==0) return;
        $('.book_title b').removeClass('slide_down').addClass('slide_up');
        $('.nav_cate_wrap').show();
        $('#mask_wrap').height($('body').height());
        $('#mask_wrap').removeClass('none');
    } else {
        $('.book_title b').removeClass('slide_up').addClass('slide_down');
        $('.nav_cate_wrap').hide();
        $('#mask_wrap').addClass('none');
    }
})


function showUserInfo(){
    $uinfo.hasClass("cancel_btn")?hideMask():showMask();
    $uinfo.toggleClass("cancel_btn");
    $user_nav_show.toggle()
}

function showMask(){
    $mask.removeClass("none");
    $mask.css({
        height:$("body").height()+"px",
        top:"0",
        "z-index":"2"
    })
}

function hideMask(){
    $mask.addClass("none")
}

$uinfo.off().on("touchend",function(t){
    showUserInfo()
});

$(".all_slide_wrap").off().on("touchend", function(e){
  var t = $(this);
  if (t.siblings().removeClass("active"), t.toggleClass("active"), t.hasClass("active")) {
     var s = $("body").height() - 76 + "px";
     $mask.removeClass("none").css({"min-height":s,height:'100%',top:"76px","z-index": "2"})
  }else{
     $mask.addClass("none")
  }
  e.preventDefault();
})

$('.all_cate_list li').off().on('touchend', function(e) {
    $mask.addClass("none")
    e.preventDefault();
})

function tip_show(content, func){
    if($('#tips_wrap').length <= 0){tips.appendTo('body');}else{$('#tips_wrap').html(content);}
    tips = $('#tips_wrap');
    tips.removeClass('none').removeClass('fadeOut').addClass('fadeIn');
    setTimeout(function () {
        tips.removeClass('fadeIn').addClass('fadeOut').addClass('none')
        if(func) func();
    }, 2000);
}


$mask.bind("touchend", function() {
    $(".all_slide_wrap").removeClass("active")
    if( $(".uinfo_show").hasClass("cancel_btn") ){
        showUserInfo();
    }
    $('.nav_cate_wrap').hide();
    hideMask();
    $('.book_title b').removeClass('slide_up').addClass('slide_down');
})

function checkDate(obj) {
    if('undefined' == typeof(obj) || obj.length != 6 ) return false;
    var year = obj.substr(0,4);
    var month = obj.substr(4,2);
    if (parseInt(year)<1900 || parseInt(year)>2050) return false;
    if (parseInt(month)==0 || parseInt(month)>12) return false;
    return true;
}

function _order_wxpay(orderid, data, success, error){
    WeixinJSBridge.invoke('getBrandWCPayRequest',{
        "appId" : data.appId,       //公众号名称，由商户传入
        "timeStamp" : data.timeStamp, //时间戳
        "nonceStr" : data.nonceStr, //随机串
        "package" : data.package,   //扩展包
        "signType" :data.signType,
        "paySign" : data.paySign    //self.getSign()//微信签名
    },function(res){
        if(res.err_msg == "get_brand_wcpay_request:ok"){
            success.call(self,msg);
        }else{
            var msg=(res.err_msg == "get_brand_wcpay_request:cancel")?"交易被取消":"微信支付失败，请稍后再试！";
            error.call(self,msg);
        }
    });
}

function orderCheckout(orderid, paytype, success, error){
    if(!(/MicroMessenger/i.test(navigator.userAgent))){
        error.call(self,"仅支持微信内支付！");
        return;
    }
    if(!orderid){
        error.call(self,"支付订单参数异常");
        return;
    }
    $.post('/api/order/payable?orderid='+ orderid +'&paytype='+ paytype,
        function(data) {
            if( data.errcode == '0' ) return _order_wxpay(orderid, data.result, success, error);
            else if( data.errcode == '1' ) return success.call(self,"订单已完成现金支付，请等待商家确认");
            else if( data.errcode == '255' ) return error.call(self,"订单已完成支付");
            else return error.call(self,"支付异常，请稍后再试");
        },"json")
}

function count_calc(domname, step){
    dom = $(domname);
    var val = dom.html();
    count = val.length==0 ? 1:parseInt(val.substring(1, val.length-1)) + step;
    dom.html( count == 0 ? '':'('+count+')');
}

function scrollToTop(backButton, showClass){
    $(document).on('scroll', function() {
        var scrollTop = $(document.body).scrollTop(), isShow = document.documentElement.clientHeight / 2 < scrollTop;
        if (isShow && !backButton.hasClass(showClass)) {
            backButton.addClass(showClass);
        } else if (!isShow && backButton.hasClass(showClass)) {
            backButton.removeClass(showClass);
        }
    });
    backButton.on('touchend', function(e) {
        e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation();
         window.scrollTo(0, 0);
    })
}

function backurl(){
    var href=document.referrer;
    if(href=="") return location.href = '/mobile'
    window.history.back()
}
