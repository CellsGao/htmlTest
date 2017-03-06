/**
 * Created by gaoshang on 2017/2/26.
 */


window.onload=function () {
    var para=document.createElement("p");
    var test=document.createTextNode("this is a test node");
    para.appendChild(test);
    var testdiv=document.getElementById("testdiv");
    testdiv.appendChild(para);
};


