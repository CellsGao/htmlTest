/**
 * Created by gaoshang on 2017/3/20.
 */

function displayAccessKeys() {
    if(!document.getElementsByTagName||!document.createTextNode||!document.createElement){
        return false;
    }
    //去的文档所有链接
    var links=[];
    links=document.getElementsByTagName("a");
    //保存访问键
    var aKeys=[];
    for(var i=0;i<links.length;i++){
        if(!links[i].getAttribute("accesskey")){
            continue;
        }
        var key=links[i].getAttribute("accesskey");
        var text=links[i].lastChild.nodeValue; //不知为什么被WebStorm标记为了多余变量
        aKeys[key]=text;
    }
    //创建列表
    var list=document.createElement("ul");
    //遍历访问键
    for(key in aKeys){
       var text1=aKeys[key];
       var str=key+": "+text1;
       //创建列表项
        var item=document.createElement("li");
        var item_text=document.createTextNode(str);
        item.appendChild(item_text);
        list.appendChild(item);
    }
    var header=document.createElement("h3");
    var header_text=document.createTextNode("AccessKeys");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(list);
}
addLoadEvent(displayAccessKeys);