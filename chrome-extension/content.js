var warnings = [];

var uniqueId = "box";
var uniqueIdNum = 0;

chrome.runtime.onMessage.addListener(function (req, sender, sendRes){

    if(req.msg == "find_warnings"){


        var hyperlinks = document.getElementsByTagName("a");
        for(link in hyperlinks){
            if(hyperlinks[link].href.indexOf("mail.google.com/") != -1){
            } else {
                addWarningBox(hyperlinks[link], uniqueId + (uniqueIdNum++));
            }
        }
        uniqueIdNum = 0;


    } else if (req.msg == "get_warning_num"){
        sendRes(uniqueIdNum);
    } else if(req.msg == "show_tip"){
        addDomainTipBox();
    }

});

function addWarningBox(linkElement, uniqueId){
    var textbox = document.createElement("div");
    textbox.id = uniqueId;
    textbox.className = "warning-box";
    textbox.innerHTML = "Be careful around links!";
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


function addDomainTipBox(){
    var sender = document.querySelectorAll(".go")[0];
    var textbox = document.createElement("div");
    //var dismiss = document.createElement("button");

    //sender.parentElement.insertBefore(textbox, sender.parentElement.firstChild);
    sender.parentElement.appendChild(textbox);
    //textbox.parentElement.appendChild(dismiss);

    //dismiss.innerHTML = "dismiss";
    //dismiss.className = "dismiss-button";

   // dismiss.addEventListener("click", function(){
    //    document.getElementById("tip-box").style.display = "none";
    //});

    textbox.addEventListener("click", function() {
        this.style.display = "none";
    });
    textbox.className = "domain-tip-box";
    textbox.id = "tip-box";
    textbox.innerHTML = "Domain names can be tricky!\nCheck the name after the '@' in the email address. ";
    textbox.innerHTML += "Corporations almost always have their own domain name (eg, @accounts.google.com, almost never @gmail!)\n";
    textbox.innerHTML += "Look out for misspelled names and numbers, too; scammers will often try to trick you with slightly incorrect domains.";
    sender.style.position = "relative";
    sender.style.bottom = "0px";
    //textbox.style.bottom =  (parseInt(linkElement.style.bottom) - 70).toString() + "px";

    
    

}

