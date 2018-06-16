var loadMore=function () {
    alert(1);
};
function ll(){
    alert(2);
}

window.onload=function () {
    var btnMore = document.getElementById('btnMore');
    // btnMore.addEventListener("click", loadMore());
    btnMore.onclick=loadMore;
};