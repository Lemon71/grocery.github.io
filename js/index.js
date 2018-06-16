// 点击按钮加载更多内容的函数
$(function () {
function loadMore() {
    $.ajax({
        url:"./php/index.php",//这里的./不是js的位置，是index.html的位置
        type:"get",
        dateType:"json",
        success:function (data) {
            // var obj={
            //   itemArr:data
            //
            // }
            // var newItem= template('tem',obj);
            // $('.grocery_content_text ul').append(newItem);
            // console.log(obj);
            console.log(data);
        }
    })
}
$('#btnMore').click(function () {
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
            console.log(obj);

            console.log(newItem);

        }
    });

});
});