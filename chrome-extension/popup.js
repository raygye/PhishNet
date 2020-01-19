var buttons = document.getElementsByClassName("collapse");
var warningNum = 0;
for (let i = 0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        }
        else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {
        msg: "get_alert_num",
    }, function (res) {
        alertNum = res;
        for(i=0;i<alertNum;i++){
            var alert = document.createElement("div");
            alert.className = "list";
            alert.innerHTML = "Alert!";
            document.getElementById("alert-content").appendChild(alert);
        }
    });

    chrome.tabs.sendMessage(activeTab.id, {
        msg: "get_warning_num",
    }, function (res) {
        warningNum = res;
        for(i=0;i<warningNum;i++){
            var alert = document.createElement("div");
            alert.className = "list";
            alert.innerHTML = "Warning!";
            document.getElementById("warning-content").appendChild(alert);
        }
    });
});
