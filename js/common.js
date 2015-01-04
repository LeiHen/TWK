// JavaScript Document

/**
 * @name     :collectWeb
 * @author   :Nice
 * @dependent:收藏本站
 */
function addFavorite() {

    if (window.sidebar && window.sidebar.addPanel) { 
    // Mozilla Firefox Bookmark
        window.sidebar.addPanel(document.title, window.location.href, '');
    } else if (window.external && ('AddFavorite' in window.external)) { 
    // IE Favorite
        window.external.AddFavorite(location.href, document.title);
    } else if (window.opera && window.print) { 
    // Opera Hotlist
        this.title = document.title;
        return true;
    } else { 
    // webkit - safari/chrome
        alert('请使用' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') + ' + D 收藏！');
    }

}
/* @end **/

/**
* @name     :
* @author   :Nice
* @type     :基类
* @dependent:
*/
function tabBar(){
    var nav=$("#bootyNav");
    var content=$("#bootyContent");
    var list=content.children(".list");
    var a=nav.children("a");

    GLOBAL.namespace("TABBAR");
    GLOBAL.TABBAR.index=0;


    a.click(function(event) {

        var i=GLOBAL.TABBAR.index=$(this).index();

        $(list[i]).stop().animate({
            left: -100+"%",
            opacity:0
        }, 1000)
        $(list[i]).addClass('none');

        // $(list[(i+1)]).removeClass('none');
        // $(list[(i+1)]).addClass('block');
        // $(list[(i+1)]).css('display', 'block');
        // $(list[(i+1)]).stop().animate({
            
        //     opacity:1
        // }, 1000)
        // $(list[i+1])

        // GLOBAL.TABBAR.index=i;


        console.log(i);
        console.log(list);
        console.log(nav);
        // i=
    });



}
/* @end **/
tabBar();



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