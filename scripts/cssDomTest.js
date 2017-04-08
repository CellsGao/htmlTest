/**
 * Created by gaoshang on 2017/3/22.
 */

function getNextElement(node) {
    if (node.nodeType == 1) {
        return node;
    }
    if (node.nextSibling) { //此处也可以写为 else if
        return getNextElement(node.nextSibling);
    }
    return null;
}

function styleHeaderSiblings() {
    if (!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("h1");
    var elem;
    for (var i = 0; i < headers.length; i++) {
        elem = getNextElement(headers[i].nextSibling);
        elem.style.fontWeight = 'bold';
        elem.style.fontSize = '1.2em';
    }
}
addLoadEvent(styleHeaderSiblings);