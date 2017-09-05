// alert(window.onload);

addLoadEvent(test1);
addLoadEvent(test2);
addLoadEvent(test3);


function test1() {
    alert("test1");
}

function test2() {
    alert("test2");
}

function test3() {
    alert("test3");
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if(typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}