window.onload = addOnclicOnA;

function addOnclicOnA() {
    if(!document.getElementById || !document.getElementsByTagName) return false;
    if(!document.getElementById("images-gallery")) return false;
    var imagesGallery = document.getElementById("images-gallery");
    var as = imagesGallery.getElementsByTagName("a");
    for(var i = 0; i < as.length; i++) {
        as[i].onclick = function() {
            return !showPic(this);
        };
    }
}

function showPic(whichpic) {
    if(!document.getElementById("placeholder") || !whichpic.getAttribute("href"))return false;

    var imgAddress = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", imgAddress);

    if(document.getElementById("description")) {
        var title = whichpic.getAttribute("title");
        var description = document.getElementById("description");
        description.firstChild.nodeValue = title ? title : "";
    }

    return true;
}