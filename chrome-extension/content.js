var warnings = [];

var uniqueId = "box";
var uniqueIdNum = 0;

chrome.runtime.onMessage.addListener(function (req, sender, sendRes){

    if(req.msg == "find_warnings"){
        var hyperlinks = document.getElementsByTagName("center")[0].getElementsByTagName("a");
        for(link in hyperlinks){
            hyperlinks[link].style.color = "orange";
            addWarningBox(hyperlinks[link], uniqueId + (uniqueIdNum++));
        }
        uniqueIdNum = 0;
    } else if (req.msg == "get_warning_num"){
        sendRes(uniqueIdNum);
    }
});

function addWarningBox(linkElement, uniqueId){
    var textbox = document.createElement("div");
    textbox.id = uniqueId;
    textbox.className = "warning-box";
    textbox.innerHTML = "Be careful around links!";
    //alert(textbox.style.left);
    linkElement.appendChild(textbox);
    linkElement.style.position = "relative";
    linkElement.style.left = "0px";
    linkElement.style.bottom = "0px";
    textbox.style.left = linkElement.style.left;
    textbox.style.bottom =  (parseInt(linkElement.style.bottom) - 70).toString() + "px";
    linkElement.id = "l" + uniqueId;
    warnings.push(textbox.innerHTML);

    linkElement.onmouseover = function(){
        document.getElementById(linkElement.id.substring(1)).style.display = "block";
    };
    linkElement.onmouseout = function(){
        document.getElementById(linkElement.id.substring(1)).style.display = "none";
    };

}
