init(checkObject);
init(createSlideShow);
init(prepareSlideShow);

function createSlideShow() {
    var slideShow = document.createElement('div');
    slideShow.setAttribute('id', 'slideshow');

    var preview = document.createElement('img');
    preview.setAttribute('src', '../images/mood.jpg');
    preview.setAttribute('alt', 'mood');
    preview.setAttribute('id', 'preview');

    slideShow.appendChild(preview);

    var linklist = document.getElementById('linklist');
    insertAfter(slideShow, linklist);
}

function insertAfter(newElem, targetElem) {
    var parentNode = targetElem.parentNode;
    if(parentNode.lastChild == targetElem) {
        parentNode.appendChild(newElem);
    } else {
        var nextSibling = targetElem.nextSibling;
        parentNode.insertBefore(newElem, nextSibling);
    }
}

function prepareSlideShow() {
    var preview = document.getElementById("preview");
    preview.style.position = 'absolute';

    var linklist = document.getElementById('linklist');
    var as = linklist.getElementsByTagName('a');
    for(var i = 0; i < as.length; i++) {
        var curA = as[i];
        curA.count = i;
        curA.onmouseover = function () {
            moveElement('preview', -333*this.count, 0, 10);
        }
    }
}

function moveElement(elemId, targetX, targetY, interval) {
    var elemToMove = document.getElementById(elemId);
    if(!elemToMove.style.left) elemToMove.style.left = '0px';
    if(!elemToMove.style.top) elemToMove.style.top = '0px';
    var movingX = parseInt(elemToMove.style.left);
    var movingY = parseInt(elemToMove.style.top);

    if(elemToMove.moveEvent) clearTimeout(elemToMove.moveEvent);

    if(movingY == targetY && movingX == targetX) return true;
    // if(movingX < targetX) movingX++;
    // if(movingX > targetX) movingX--;
    // if(movingY > targetY) movingY--;
    // if(movingY < targetY) movingY++;
    if(movingX < targetX) movingX += Math.ceil((targetX - movingX)/10);
    if(movingX > targetX) movingX -= Math.ceil((movingX - targetX)/10);
    if(movingY < targetY) movingY += Math.ceil((targetY - movingY)/10);
    if(movingY > targetY) movingY -= Math.ceil((movingY - targetY)/10);
    /*
    Math.ceil(number)    返回不小于number的最小整数
    Math.round(number)   返回number的四舍五入整数
    Math.floor(number)   返回不大于number的最大整数
     */
    elemToMove.style.left = movingX + "px";
    elemToMove.style.top = movingY + "px";

    var repeat = "moveElement('" + elemId + "', " + targetX+ ", " + targetY + ", " + interval + ")";
    elemToMove.moveEvent = setTimeout(repeat, interval);
}

function checkObject() {
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("linklist")) return false;
    if(!document.getElementById("preview")) return false;
}

function init(func) {
    var oldFunc = window.onload;
    if(typeof oldFunc != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldFunc();
            func();
        }
    }
}