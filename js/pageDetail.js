/*///////////////////////////////////////////////////////////
藍色系列 CSS語JS 命名 page.css page.js
粉色系列 CSS語JS 命名 pageDetail.css pageDetail.js
首頁       CSS語JS 命名 index.css index.js
///////////////////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////
日期
///////////////////////////////////////////////////////////*/
$(function(){
    var Today=new Date();
    $( ".date" ).html("" + (Today.getFullYear()-1911)+ "/" + (Today.getMonth()+1) + "/" + Today.getDate() + " ");
});
/*///////////////////////////////////////////////////////////
時間
///////////////////////////////////////////////////////////*/
$(function () {
    console.log("Hello!! Nice to see you.(・∀・).");
    console.log("Front-end programming By Alan Lin  www.alan-lin.com");
    var datetime = null,
        date = null;

    var update = function () {
        date = moment(new Date())
        //datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
        datetime.html(date.format('a h:mm'));
    };

    $(document).ready(function () {
        datetime = $(".time")
        update();
        setInterval(update, 1000);
    });
});
/*///////////////////////////////////////////////////////////
每300秒 換照片
///////////////////////////////////////////////////////////*/
$(function () {
    var $block = $('.community_photo_img'),
        $ad = $block.find('.ad'),
        showIndex = 0,			// 預設要先顯示那一張
        fadeOutSpeed = 10,	// 淡出的速度
        fadeInSpeed = 20,		// 淡入的速度
        defaultZ = 10,			// 預設的 z-index
        isHover = false,
        timer, speed = 300000;	// 計時器及輪播切換的速度

    // 先把其它圖片的變成透明
    $ad.css({
        opacity: 0,
        zIndex: defaultZ - 1
    }).eq(showIndex).css({
        opacity: 1,
        zIndex: defaultZ
    });

    // 組出右下的按鈕
    var str = '';
    for (var i = 0; i < $ad.length; i++) {
        str += '<a href="#">' + (i + 1) + '</a>';
    }
    var $controlA = $('.community_photo_img').append($('<div class="control">' + str + '</div>').css('zIndex', defaultZ + 1)).find('.control a');

    // 當按鈕被點選時
    // 若要變成滑鼠滑入來切換時, 可以把 click 換成 mouseover
    $controlA.click(function () {
        // 取得目前點擊的號碼
        showIndex = $(this).text() * 1 - 1;

        // 顯示相對應的區域並把其它區域變成透明
        $ad.eq(showIndex).stop().fadeTo(fadeInSpeed, 1, function () {
            if (!isHover) {
                // 啟動計時器
                timer = setTimeout(autoClick, speed + fadeInSpeed);
            }
        }).css('zIndex', defaultZ).siblings('li.ad').stop().fadeTo(fadeOutSpeed, 0).css('zIndex', defaultZ - 1);
        // 讓 a 加上 .on
        $(this).addClass('on').siblings().removeClass('on');

        return false;
    }).focus(function () {
        $(this).blur();
    }).eq(showIndex).addClass('on');
    /*
        $ad.hover(function () {
            isHover = true;
            // 停止計時器
            clearTimeout(timer);
        }, function () {
            isHover = false;
            // 啟動計時器
            timer = setTimeout(autoClick, speed);
        })
    */
    // 自動點擊下一個
    function autoClick() {
        if (isHover) return;
        showIndex = (showIndex + 1) % $controlA.length;
        $controlA.eq(showIndex).click();
    }

    // 啟動計時器
    timer = setTimeout(autoClick, speed);
});
/*///////////////////////////////////////////////////////////
輪播圖片 固定高度
///////////////////////////////////////////////////////////*/
$(function () {
    var imgHeight = 0;
    $('.community_photo_img').each(function () {
        imgHeight = $('.community_photo_img .ad').height();
    }).height(imgHeight + 38);
    $(window).resize(function () {
        $('.community_photo_img').each(function () {
            imgHeight = $('.community_photo_img .ad').height();
        }).height(imgHeight + 38);
    });

});

/*///////////////////////////////////////////////////////////
日期選擇器

$(document).ready(function () {
    var opt1 = {
        //以下為日期選擇器部分
        dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
        monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        prevText: "上月",
        nextText: "次月",
        weekHeader: "週",
        showMonthAfterYear: true,
        dateFormat: "yy-mm-dd",
        //以下為時間選擇器部分
        timeOnlyTitle: "選擇時分秒",
        timeText: "",
        hourText: "時",
        minuteText: "分",
        secondText: "秒",
        millisecText: "毫秒",
        timezoneText: "時區",
        currentText: "今天日期",
        closeText: "確定",
        amNames: ["上午", "AM", "A"],
        pmNames: ["下午", "PM", "P"],
        showSecond: false,
        timeFormat: ""//取消時間選擇
        //timeFormat: "HH:mm:ss"
    };
    $(".datetimepicker1").datetimepicker(opt1);
});
$(document).ready(function () {
    var opt2 = {
        //以下為日期選擇器部分
        dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
        monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        prevText: "上月",
        nextText: "次月",
        weekHeader: "週",
        showMonthAfterYear: true,
        dateFormat: "yy-mm-dd",
        //以下為時間選擇器部分
        timeOnlyTitle: "選擇時分秒",
        timeText: "",
        hourText: "時",
        minuteText: "分",
        secondText: "秒",
        millisecText: "毫秒",
        timezoneText: "時區",
        currentText: "今天日期",
        closeText: "確定",
        amNames: ["上午", "AM", "A"],
        pmNames: ["下午", "PM", "P"],
        showSecond: false,
        timeFormat: ""//取消時間選擇
        //timeFormat: "HH:mm:ss"
    };
    $(".datetimepicker2").datetimepicker(opt2);
});
///////////////////////////////////////////////////////////*/

/*///////////////////////////////////////////////////////////
active
///////////////////////////////////////////////////////////*/
$(function () {
    $(".page_no li a").click(function () {
        $(".page_no li a").removeClass('active');
        $(this).addClass('active');
    });
});

//30戶用電比對 對比差曲線
$(function () {
    $(".comparison h2 a").click(function () {
        $(".comparison h2 a").removeClass('active');
        $(this).addClass('active');
    });
});

//curves.blade.html
$(function () {
    $(".btn_info_img a").click(function () {
        $(".btn_info_img a").removeClass('active');
        $(this).addClass('active');
    });
});

//useElectInfo.blade.html
$(function () {
    $(".query_table a").click(function () {
        $(".query_table a").removeClass('active');
        $(this).addClass('active');
    });
});

//比較時間 大公 30用戶 按鈕按下 出現
$(function () {
    $(".compare_time").hide();
    $(".btn_info_img a:not('.show_compare_time')").click(function () {
        $(".compare_time").hide();
    });
    $(".show_compare_time").click(function () {
        $(".compare_time").show();
    });
    $(".btn_info_img a.active").click();
});


//當月累積電費 按鈕按下 出現
$(function () {
    $(".smart_user").hide();
    $(".query_table a:not('.show_smart_user')").click(function () {
        $(".smart_user").hide();
    });
    $(".show_smart_user").click(function () {
        $(".smart_user").show();
    });
});
