/**
 * Created by gaoshang on 2017/3/13.
 */

//函数介绍位于js DOM编程艺术第八章133页。
function displayAbbreviation() {
    var abbreviations=document.getElementsByTagName("abbr");
    if(abbreviations.length<1){
        return false;
    }
    var defs=[];
    for(var i=0;i<abbreviations.length;i++){
        var definition=abbreviations[i].getAttribute("title");
        var key=abbreviations[i].lastChild.nodeValue;
        defs[key]=definition;
    }
    var dlist=document.createElement("dl");
    for (key in defs){
        var definition1=defs[key];
        var dtitle=document.createElement("dt");
        var dtitle_text=document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc=document.createElement("dd");
        var ddesc_text=document.createTextNode(definition1);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    var header=document.createElement("h2");
    var header_text=document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}
//如果引用了addLoadEvent函数，则html文件中addLoadEvent的scrip标签必须在最前，否则无效。
addLoadEvent(displayAbbreviation());

