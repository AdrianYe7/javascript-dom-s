function showPic(whichpic) {
    var placeholder = document.getElementById("placeholder");
    var picAddr = whichpic.getAttribute("href");
    placeholder.setAttribute("src", picAddr);
    // alert(document.getElementsByClassName("c2 c1").length);

    // alert(document.getElementById("p1").className);

    /**
     * 说明：document.getElementById(id);查询id的元素节点
     *      document.getElementsByTagName(tagName);查询tagName的所有元素节点。
     *      document.getElementsByClassName(className);查询className的所有元素节点。className可以包含多个class，而且顺序无关
     *
     *      element.getAttribute(attribute);查询attribute的属性值/节点，如果元素节点没有属性的话，返回null
     *      element.setAttribute(key, value);给element设置属性
     */


    var title = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    // console.log(description.childNodes[1].nodeValue);//null
    // description.childNodes[0].nodeValue = title;
    description.firstChild.nodeValue = title;

    /**
     * 说明：childNodes是属性，获取某个元素节点的所有子节点（第一级的)。
     *      childNodes[0] = firstChild。
     *      firstChild与lastChild是js提供的方便的属性。
     *      nodeValue是只针对文本节点的属性，对于元素节点，它是null
     *      nodeType可以对childNodes进行类型检测，返回的是数字，1：元素节点； 2：属性节点； 3：文本节点
     */

    /**
     * DOM的工作模式，静态加载源码，动态刷新内容，动态刷新不影响静态源码。
     * DOM对内容的刷新不需要刷新浏览器。
     */
}

function getElementsByClassName(node, className) {
    if(node.getElementsByClassName) {
        node.getElementsByClassName(className);
    } else {
        var results = new Array();
        var nodeChildElements = node.getElementsByTagName("*");
        for(var i = 0; i < nodeChildElements.length; i++) {
            if(nodeChildElements[i].className.indexOf(className) != -1) {
                results[results.length] = nodeChildElements[i];
            }
        }
        return results;
    }
}