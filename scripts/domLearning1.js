/**
 * Created by gaoshang on 2017/2/12.
 */

//alert(typeof document.getElementsByClassName('cities'));

/* getElementByTagName方法允许传入通配符，可以查询dom中存在多少节点
 */
/*numbers=document.getElementsByTagName("*");
alert(numbers.length);*/

//会看到两个对话框，一个看到tittle值，一个显示null，方法不属于document对象，只能在获取节点对象后使用
/*var para=document.getElementsByTagName("p");
for(var i=0;i<para.length;i++){
    alert(para[i].getAttribute("title"));
}*/


//setAttribute方法同getAttribute方法一样在获取节点后使用，可以设置节点属性值
/*var para=document.getElementsByTagName("p");
for(var i=0;i<para.length;i++){
    if (para[i].getAttribute('title') ===null){
        para[i].setAttribute("title","title test2");
        alert("para"+(i+1)+"has been set");
    }
}*/


//第四章 javascrip图片库   文档中每一样东西都是一个节点，包括空格和换行符，他们分为元素节点，属性节点，文本节点
function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeHolder");
    if(placeholder.nodeName!="IMG") return false;
    placeholder.setAttribute("src",source);
    var text=whichpic.getAttribute("title");
    var description=document.getElementById("description");
    description.firstChild.nodeValue=text;  //P元素的nodeValue属性尾null，p元素的第一个子元素才是需要的文本。
}


function prepareGallery() {
    //检查浏览器是否支持getElementById和getElementByTagName两种方法
    if(!document.getElementById||!document.getElementsByTagName){
        return false;
    }
    //检查是否存在imageGallery这个id
    if(!document.getElementById("imageGallery")){
        return false;
    }
    var gallery=document.getElementById("imageGallery");
    var links=gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick=function () {
            showPic(this);
            return false;
        };
    }
}
//添加事件处理函数，可以使window.onload处理多个函数
function addLoadEvent(func) {
    var oldonload=window.onload;
    if(typeof window.onload!="function"){
        window.onload=func;
    }else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepareGallery());










