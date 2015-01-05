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
function tabBar(navID,contentID,classH){
    var nav=$("#"+navID);
    var content=$("#"+contentID);
    var list=content.children(".list");
    var a=nav.children(".link");

    GLOBAL.namespace("TABBAR");
    GLOBAL.TABBAR.index=0;
    console.log(nav);


    a.click(function(event) {
        var i=GLOBAL.TABBAR.index=$(this).index();

        console.log(classH);
        if(classH==undefined||classH==null){

        }else{
            a.removeClass(classH);
            $(this).addClass(classH);
        }
        // a.removeClass(classH);
        // $(this).addClass(classH);

        list.stop().animate({
            opacity: 0
        }, 800);

        list.removeClass('block').addClass('none');

        $(list[i]).removeClass('none').addClass('block');

        $(list[i]).stop().animate({
            opacity: 1
        }, 800);
    });
}
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