// JavaScript Document





/**
* @name		:mianInit
* @author	:Nice
* @dependent:总初始化
*/
function mianInit(){
	toTop();

	//侧导航 QR
	$("#QR").hover(function() {
        $("#QR").children(".QR").animate({opacity: 1, top: -170+"px"}, 100)
        $("#QR").children(".QR").css("display","block");
        
    }, function() {
        $("#QR").children(".QR").animate({opacity: 0, top: -120+"px"}, 100)
        $("#QR").children(".QR").css("display","none");
    });
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