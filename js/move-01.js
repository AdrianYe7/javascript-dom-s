
init(objectCheckUp);
init(positionInit);


function moveElement(moveId, targetLeft, targetTop, interval) {
    var pMessage = document.getElementById(moveId);
    var movingLeft = parseInt(pMessage.style.left);
    var movingTop = parseInt(pMessage.style.top);

    if(movingTop == targetTop && movingLeft == targetLeft) {
        console.log("-----1----");
        return true;
    }
    if(movingLeft < targetLeft) movingLeft++;
    if(movingLeft > targetLeft) movingLeft--;
    if(movingTop < targetTop) movingTop++;
    if(movingTop > targetTop) movingTop--;

    pMessage.style.left = movingLeft + "px";
    pMessage.style.top = movingTop + "px";

    var repeat = "moveElement('" + moveId + "'," + targetLeft + ", " + targetTop + ", " + interval + ")";
    moveEvent = setTimeout(repeat, interval);
}

function positionInit() {
    var pMessage = document.getElementById("message");
    pMessage.style.position = "absolute";
    pMessage.style.left = "100px";
    pMessage.style.top = "100px";

    moveElement("message", 300, 200, 10);
}

function objectCheckUp() {
    if(document.getElementById) return false;
    if(document.getElementById("message")) return false;
}

function init(func) {
    var oldFunc = window.onload;
    if(typeof oldFunc == "function") {
        window.onload = function() {
            oldFunc();
            func();
        }
    } else {
        window.onload = func;
    }
}