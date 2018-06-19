$(function () {
    // 点击按钮加载更多内容,并且先出现gif loading
    $('#btnMore').click(function () {
        $('.target').show();
        $('#btnMore').hide();
        setTimeout(function () {
            $.ajax({
                url:'./php/index.php',//这里的./不是js的位置，是index.html的位置
                type:'get',
                dataType:'json',
                success:function (data) {
                    var obj={
                        itemArr:data

                    }
                    var newItem= template('tem',obj);
                    $('.grocery_content_text ul').append(newItem);


                }
            });
            $('.target').hide();
            $('#btnMore').show();
        },1500);


});
// 滚动加载更多
    var isLoading = false;
    //滚动加载两次之后就要变成点击按钮加载了
    var loadingTime =0;
    $(window).scroll(function () {
        // 屏幕可视区域的高度
        // console.log(window.innerHeight);
        var grScreenHeight= window.innerHeight;
        var grTargetOffsetHeight =$('.target').offset().top;
        // 这个定义可不能放在这里，每次都让他变成false了
        // var isLoading = false;
        if($(window).scrollTop()>(grTargetOffsetHeight-grScreenHeight)){
            if(isLoading){
                // 如果正在loading，什么也不用做,只有GIF
            }else{
                //滚动加载两次之后就要变成点击按钮加载了
                if(loadingTime<2){
                    isLoading =true;
                    setTimeout(function () {
                        $.ajax({
                            url:'./php/index.php',//这里的./不是js的位置，是index.html的位置
                            type:'get',
                            dataType:'json',
                            success:function (data) {
                                var obj={
                                    itemArr:data

                                }
                                var newItem= template('tem',obj);
                                $('.grocery_content_text ul').append(newItem);


                            }
                        });
                        isLoading=false;
                        loadingTime++;
                    },1500);
                }else{
                    // 大于两次之后就隐藏gif，改成显示按钮了
                    $('.target').hide();
                    $('#btnMore').show();
                }

            }


        }
    });
//滚动导航栏变色
    $(window).scroll(function () {
        var changeNav =$('.banner').height();
        if($(window).scrollTop()>changeNav){
            $('.grbar-default').css('background-color','rgba(0,0,0,1)');
        }else{
            $('.grbar-default').css('background-color','rgba(248,248,248,0)');

        }

    });
});
