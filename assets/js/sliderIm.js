function randomsort(a, b) {
    return Math.random()>.5 ? -1 : 1;
}






$(document).ready(function(){
    var imList = $('#data .imdata');
    var imgList = [];
    for(var i=0;i<imList.length;i++){
        var img = {img:$(imList[i]).attr('imgurl'),a:'#'};
        imgList.push(img);
    }
    imgList.sort(randomsort)
    var minSize = Math.min($('.demo').height(),$('.demo').width());
    $('.demo').slider({
        imgList: imgList, //图片的列表，a属性里面存放的是网络地址，img存放的是图片地址
        isAuto: true, //是否自动轮播
        // width: minSize,
        // height: minSize,
        moveTime: 3000, //运动时间
        direction: 'right', //轮播的方向
        btnWidth: 50, //按钮的宽
        btnHeight: 200, //按钮的高
        spanWidth: 50, //span按钮的宽
        spanHeight: 50, //span按钮的高
        spanColor: 'grep', //span按钮的颜色
        activeSpanColor: 'transparent', //选中的span颜色
        btnBackgroundColor: 'rgba(0, 0, 0, 0)', //两侧按钮的颜色
        spanRadius: '50%', //span按钮的圆角程度
        spanMargin: 3, //span之间的距离
    })
})

