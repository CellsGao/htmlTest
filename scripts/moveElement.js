/**
 * Created by gaoshang on 2017/3/28.
 */

function moveElement(elemID,finalX,finalY,interval) {
    if(!document.getElementById) return false;
    var elem=document.getElementById(elemID);
    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);
    if(xpos===finalX&&ypos===finalY) return false;
    if(xpos>finalX){
        xpos--;
    }else{
        xpos++;
    }
    if(ypos>finalY){
        ypos--;
    }else if(ypos<finalY){  //若仅使用else 会导致上线小幅度抖动，因为，当ypos=200时也会进行加一操作。
        ypos++;
    }
    elem.style.top=ypos+"px";
    elem.style.left=xpos+"px";
    var repeat="moveElement('"+elemID+"',"+finalX+","+finalY+","+interval+")";
    movement=setTimeout(repeat,interval);
}


