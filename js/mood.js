init(checkObject);
init(prepareSlideShow);

function prepareSlideShow() {
    var preview = document.getElementById("preview");
    preview.style.position = 'absolute';
    preview.style.left = '0px';
    preview.style.top = '0px';

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
    var movingX = parseInt(elemToMove.style.left);
    var movingY = parseInt(elemToMove.style.top);
    console.log(movingY + ":" +targetY);
    console.log(movingX + ":" +targetX);

    if(movingY == targetY && movingX == targetX) return true;
    if(movingX < targetX) movingX++;
    if(movingX > targetX) movingX--;
    if(movingY > targetY) movingY--;
    if(movingY < targetY) movingY++;

    elemToMove.style.left = movingX + "px";
    elemToMove.style.top = movingY + "px";

    var repeat = "moveElement('" + elemId + "', " + targetX+ ", " + targetY + ", " + interval + ")";
    console.log(repeat);
    setTimeout(repeat, interval);
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