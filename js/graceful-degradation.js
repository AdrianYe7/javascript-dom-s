function openWin(address) {
    window.open(address, "NEW WINDOW", "width=400px, height=300px");
}

window.onload = addClickOnAByTagName;

function addClickOnAByTagName() {
    if(!document.getElementsByTagName)return false;
    var as = document.getElementsByTagName("a");
    for(var i = 0; i < as.length; i++) {
        if(as[i].getAttribute("class") == "open") {
            as[i].onclick = function() {
                openWin(this.getAttribute("href"));
                return false;
            }
        }
    }
}