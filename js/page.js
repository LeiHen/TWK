// JavaScript Document

/**
* @name		:sideNavQR
* @author	:Nice
* @dependent:显示隐藏测导航QR
*/
function sideNavQR(){
	$("#QR").hover(function() {
        $("#QR").children(".QR").animate({opacity: 1, top: -170+"px"}, 100)
        $("#QR").children(".QR").css("display","block");
        
    }, function() {
        $("#QR").children(".QR").animate({opacity: 0, top: -120+"px"}, 100)
        $("#QR").children(".QR").css("display","none");
    });
}
/* @end **/

/**
* @name		:loadBox
* @author	:Nice
* @dependent:box载入动画
*/
function loadBox(ID){
    var id=$('#'+ID);

    var load=id.children(".loading");
    var box=id.children(".box");
    var imageButton=id.children(".image_button");

    var imagesBox=box.children(".images_box");
    var imgBtn=box.children(".image_button").children(".button");

    var imagesBoxL=imagesBox.length;

    GLOBAL.namespace("IMGBOX");
    GLOBAL.IMGBOX.index=0;


    console.log(imagesBoxL);

    //预加载
    load.animate({
        opacity:0
    },1000);

    setTimeout(function(){
        load.addClass('none');
        box.removeClass('none');
        $(imagesBox[0]).removeClass('none');
        box.animate({
            opacity:1
        },400);
        boxLayerAnimate(imagesBox,1,0,0);
    },1000);

    function boxLayerAnimate(e,status,upI,i){
        imgBoxLayerL=$(e[i]).find('.layer').length;
        if (status==0) {
            $(e[upI]).find('.img_main').removeClass('img_main_animation');
    
            setTimeout(function(){
                $(e[upI]).find('.img_01').removeClass('img_01_animation');
            },100);

            setTimeout(function(){
                $(e[upI]).find('.link').removeClass('link_animation');
            },imgBoxLayerL*200);
            // console.log("丫的")
        };
        
        if (status==1) {
            // i=GLOBAL.IMGBOX.index;
            // console.log(i);
            
            setTimeout(function(){
                $(e[i]).find('.img_main').addClass('img_main_animation');
                setTimeout(function(){
                    $(e[i]).find('.img_01').addClass('img_01_animation');
                },200);
                setTimeout(function(){
                    $(e[i]).find('.link').addClass('link_animation');
                },imgBoxLayerL*200);
            },1000);
        };
        
    }





    //点击切换
    imgBtn.click(function(){
        var upI=GLOBAL.IMGBOX.index;
    	var i=GLOBAL.IMGBOX.index=$(this).index();

        imgBoxLayerL=$(imagesBox[i]).find('.layer').length;

        //box 贴图层 动画
        //status “0” 离开    “1” 进入
        // function boxLayerAnimate(e,status,upI,i){
        //     if (status==0) {
        //         $(e[upI]).find('.img_main').removeClass('img_main_animation');
        
        //         setTimeout(function(){
        //             $(e[upI]).find('.img_01').removeClass('img_01_animation');
        //         },100);

        //         setTimeout(function(){
        //             $(e[upI]).find('.link').removeClass('link_animation');
        //         },imgBoxLayerL*200);
        //         console.log("丫的")
        //     };
            
        //     if (status==1) {
        //         setTimeout(function(){
        //             $(imagesBox[i]).find('.img_main').addClass('img_main_animation');
        //             setTimeout(function(){
        //                 $(imagesBox[i]).find('.img_01').addClass('img_01_animation');
        //             },200);
        //             setTimeout(function(){
        //                 $(imagesBox[i]).find('.link').addClass('link_animation');
        //             },imgBoxLayerL*200);
        //         },1000);
        //     };
            
        // }

        //贴图层移出动画
        boxLayerAnimate(imagesBox,0,upI,i);

        
        
        

        //贴图层移出动画
        // $(imagesBox[upI]).find('.img_main').removeClass('img_main_animation');
        
        // setTimeout(function(){
        //     $(imagesBox[upI]).find('.img_01').removeClass('img_01_animation');
        // },100);

        // setTimeout(function(){
        //     $(imagesBox[upI]).find('.link').removeClass('link_animation');
        // },imgBoxLayerL*200);


        //当前层隐藏
        setTimeout(function(){
            imagesBox.addClass('none');
            $(imagesBox[i]).removeClass('none');
            $(imagesBox[i]).stop().animate({
                opacity: 1
            }, 800);

            // 贴图层进入动画
            boxLayerAnimate(imagesBox,1,upI,i);

            // 贴图层进入动画
            // setTimeout(function(){
            //     $(imagesBox[i]).find('.img_main').addClass('img_main_animation');
            //     setTimeout(function(){
            //         $(imagesBox[i]).find('.img_01').addClass('img_01_animation');
            //     },200);
            //     setTimeout(function(){
            //         $(imagesBox[i]).find('.link').addClass('link_animation');
            //     },imgBoxLayerL*200);
            // },1000);

        },imgBoxLayerL*200+1000);

        setTimeout(function(){
            imgBtn.removeClass('hover');
            $(imgBtn[i]).addClass('hover');
            imagesBox.stop().animate({
                opacity: 0
            }, 800);
        },imgBoxLayerL*200);


    });

    //自动切换
    function switchover(btn,l){
        
        console.log(imagesBox);
        var upI=GLOBAL.IMGBOX.index;

    	GLOBAL.IMGBOX.index=GLOBAL.IMGBOX.index+1;
    	var i=GLOBAL.IMGBOX.index;
    	if (i>l-1) {
    		i=GLOBAL.IMGBOX.index=0;
    	}

        //贴图层移出动画
        boxLayerAnimate(imagesBox,0,upI,i);

        imagesBox.stop().animate({
    		opacity:0
    	}, 800)


    	setTimeout(function(){
    		imagesBox.addClass('none');
    		$(imagesBox[i]).removeClass('none');
    		$(imagesBox[i]).stop().animate({
    			opacity:1
    		}, 800);

            boxLayerAnimate(imagesBox,1,upI,i);

    		imgBtn.removeClass('hover');
    		$(imgBtn[i]).addClass('hover');

    	},800)
    	
    }

    setInterval(function(){
    	switchover(imgBtn,imagesBoxL);
    },10000);


    













}
/* @end **/


























/**
* @name		:mianInit
* @author	:Nice
* @dependent:总初始化
*/
function mianInit(){
	//返回顶部
	toTop();

	//侧导航 QR
	sideNavQR();

	
}
mianInit();
/* @end **/



/**
* @name		:名称
* @author	:作者
* @dependent:描述
*/

/* @end **/

/**
* @name		:
* @author	:Nice
* @version	:
* @type		:基类
* @explain	:
* @relating	:
* @dependent:
*/

/* @end **/