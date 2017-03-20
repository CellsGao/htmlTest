/**
 * Created by gaoshang on 2017/3/15.
 */

function displayCitations() {
    //检查是否支持方法
    if(!document.getElementsByTagName||!document.createElement||!document.createTextNode){
        return false;
    }
    var quotes=document.getElementsByTagName("blockquote");
    for(var i=0;i<quotes.length;i++){
        if(!quotes[i].getAttribute("cite")){
            continue;
        }
        var url=quotes[i].getAttribute("cite");
        //使用通配符获取元素节点
       var quoteElements=quotes[i].getElementsByTagName("*");
        if(quoteElements.length<1){
            continue;
        }
        //获取最后一个元素节点
        var element=quoteElements[quoteElements.length-1];
        var link=document.createElement("a");
        var link_text=document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        var sup=document.createElement("sup");
        sup.appendChild(link);
        element.appendChild(sup);
    }
}
addLoadEvent(displayCitations());
