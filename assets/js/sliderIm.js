$(document).ready(function(){
    var imList = $('#data .imdata');
    var imgList = [];
    for(var i=0;i<imList.length;i++){
        var img = {img:$(imList[i]).attr('imgurl')};
        imgList.push(img);
    }
    $('.demo').slider({
        imgList: imgList, //图片的列表，a属性里面存放的是网络地址，img存放的是图片地址
        isAuto: true, //是否自动轮播
        moveTime: 3000, //运动时间
        direction: 'right', //轮播的方向
        btnWidth: 30, //按钮的宽
        btnHeight: 30, //按钮的高
        spanWidth: 10, //span按钮的宽
        spanHeight: 10, //span按钮的高
        spanColor: '#fff', //span按钮的颜色
        activeSpanColor: 'red', //选中的span颜色
        btnBackgroundColor: 'rgba(0, 0, 0, 0.3)', //两侧按钮的颜色
        spanRadius: '50%', //span按钮的圆角程度
        spanMargin: 3, //span之间的距离
    })
})

