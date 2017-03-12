/**
 * Created by gaoshang on 2017/3/12.
 */

function getNewContent() {
    var request=getHttpObject();
    if(request) {
        request.open("GET", "service.txt", true);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                var para = document.createElement("p");
                var text = document.createTextNode(request.responseText);
                para.appendChild(text);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    }
    else {
        alert("sorry your browser dosnt support the XMLHttpRequest");
    }
    alert("function done");
}
addLoadEvent(getNewContent());