/**
 * Created by gaoshang on 2017/3/28.
 */

function positionMessege() {
    if (!document.getElementById) return false;
    var elem=document.getElementById("messege");
    elem.style.position="absolute";
    elem.style.top="886px";
    elem.style.left="973px";
    moveElement("messege",200,100,10);

}
addLoadEvent(positionMessege);