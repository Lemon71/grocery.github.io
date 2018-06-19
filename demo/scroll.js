$('body').scrollspy({ target: '#navbar-example' });
$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
});
// 实际上是    什么JS都不用引用
