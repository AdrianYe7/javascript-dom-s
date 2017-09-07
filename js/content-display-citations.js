
function displayCitations() {
    var blockquotes = document.getElementsByTagName("blockquote");
    for(var i = 0; i < blockquotes.length; i++) {
        var cite = blockquotes[i].getAttribute("cite");
        if(!cite) continue;
        var quoteChildren = blockquotes[i].getElementsByTagName("*");
        if(quoteChildren.length < 1)continue;
        var elem = quoteChildren[quoteChildren.length-1];

        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href", cite);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);

        elem.appendChild(superscript);
    }
}