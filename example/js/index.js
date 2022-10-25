window.addEventListener('load', function () {
    // 点击返回按钮返回上一页
    var fanhui = this.document.querySelector(".fanhui");
    fanhui.addEventListener("click", function () {
        window.history.back();
    })
    //上下滚动改变导航栏透明度
    console.log($('.nav'));
    this.document.addEventListener("scroll", function () {
        if (window.pageYOffset >= 50) {
            $('.nav').css({ backgroundColor: "rgba(31, 49, 68,1)" })
            $('.nav').animate({
                paddingTop: 0,
                paddingBottom: 0
            }, 10);
        } else {
            $('.nav').css({ backgroundColor: "rgba(31, 49, 68,.3)" })
            $('.nav').animate({
                paddingTop: 12 + 'px',
                paddingBottom: 12 + 'px'
            }, 10);
        }
    })
    // var nav = this.document.querySelector(".nav");
    // console.log(nav);
    // this.document.addEventListener("scroll",function(){
    //     if(window.pageYOffset >= 50){
    //         function yanse1(){
    //             nav.style.backgroundColor = "rgb(31, 49, 68)";
    //         }
    //         setInterval(yanse1(),1000);
    //     }else{
    //         function yanse0(){
    //             nav.style.backgroundColor = "rgba(31, 49, 68,.3)";
    //         }
    //         setInterval(yanse0(),1000);
    //     }   
    // })
});

(function () {
    
})();