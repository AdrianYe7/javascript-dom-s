init(preparePlaceholder);
init(addOnclickOnA);

function preparePlaceholder() {
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById('images-gallery')) return false;

    var placeholder = document.createElement("img");
    var description = document.createElement("p");
    var gallery = document.getElementById("images-gallery");
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);

    placeholder.setAttribute("id", "placeholder");
    description.setAttribute("id", "description");

    placeholder.setAttribute("alt", "展示图片");
    placeholder.setAttribute("src", "../images/default.jpg");

    var text = document.createTextNode("Show Picture!");
    description.appendChild(text);
}

function addOnclickOnA() {
    var gallery = document.getElementById("images-gallery");
    var as = gallery.getElementsByTagName("a");
    for(var i = 0; i < as.length; i++) {
        as[i].onclick = function () {
            return !showPic(this);
        }
    }
}

function showPic(whichpic) {
    var address = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if(!(placeholder && address)) return false;

    var description = document.getElementById("description");
    if(description) {
        var title = whichpic.getAttribute("title");
        placeholder.setAttribute("src", address);
        description.firstChild.nodeValue = title ? title : '';

    }


    return true;
}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function init(newFunc) {
    var oldFunc = window.onload;
    if(typeof oldFunc != 'function') {
        window.onload = newFunc;
    } else {
        window.onload = function () {
            oldFunc();
            newFunc();
        }
    }
}