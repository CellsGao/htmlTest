/**
 * Created by gaoshang on 2017/3/12.
 */

function addLoadEvent(func) {
    var oldload=window.onload;
    if(typeof oldload!="function"){
        window.onload=func;
    }else {
        window.onload=function () {
            oldload();
            func();
        }
    }
}