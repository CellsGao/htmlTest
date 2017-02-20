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


//第四章 javascrip图片库
function showPic(whichpic) {
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeHolder");
    placeholder.setAttribute("src",source);
}

