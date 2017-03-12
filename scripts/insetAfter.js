/**
 * Created by gaoshang on 2017/3/12.
 */


// 查看目标元素是否是但钱父元素的最后一个子元素，如果是，则使用append将新元素插入在最后，如果不是，则使用nextSibling方法获取下一个兄弟元素，使用
// insertBefore方法插入在他之前。
function insertAfter(newElement,targetElement) {
    var parent=targetElement.parentNode;
    if(parent.lastChild ==targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling); //nextSibling 下一个兄弟元素
    }
}


var testdiv=document.getElementById("testdiv");
var para =document.createElement("p");
var text=document.createTextNode("after the test div");
para.appendChild(text);

insertAfter(para,testdiv);