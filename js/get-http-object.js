function getHTTPObject() {
    if(typeof XMLHttpRequest == 'undefined') {
        XMLHttpRequest = function () {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            } catch (e){
                alert("没有6.0");
            }

            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            } catch (e) {
                alert("没有3.0");
            }

            try {
                return new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                alert("我可能是假的IE")
            }
        }
        return false;
    }
    return new XMLHttpRequest();
}