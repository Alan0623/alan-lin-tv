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
圓餅圖

$(function () {
    var labels = ['市電', '風機', '燃料電池', '太陽能'];
    var ctx = document.getElementById('canvasPie').getContext('2d');
    var pieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                //預設資料
                data: [30, 10, 35, 25],
                backgroundColor: [
                    //資料顏色
                    "#0224ba",
                    "#f590a3",
                    "#6faf3d",
                    "#f3ea6b"
                ],
            }],
        }
    });

    function changeData() {
        //隨機資料
        var randomNum = Math.floor(Math.random() * 100) + 1;
        //將隨機資料載入至圖表中
        pieChart.data.datasets[0].data = [randomNum, 100 - randomNum, randomNum, randomNum];
        //更新
        pieChart.update();
    }
    //setInterval(changeData,2000);
});
///////////////////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////
換底圖
///////////////////////////////////////////////////////////*/
$(function () {
    var date_format = '12';
    var d = new Date();
    var hour = d.getHours();
    var minutes = d.getMinutes();
    var result = hour;
    var ext = '';
    if (d.getHours() < 6 || d.getHours() > 18) {
        $("body").removeClass().addClass("night");
    } else {
        $("body").removeClass().addClass("day");
    }
});