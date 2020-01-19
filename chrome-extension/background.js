chrome.tabs.onUpdated.addListener(function(tabId) {
    chrome.tabs.sendMessage(tabId, {
        update: "true",
        msg: "find_warnings"
    });
});

chrome.tabs.onUpdated.addListener(function(tabId) {
    chrome.tabs.sendMessage(tabId, {
        update: "true",
        msg: "show_tip"
    });
});

chrome.browserAction.onClicked.addListener(function(tabId) {
    chrome.tabs.sendMessage(tabId, {
        update: "true",
        msg: "find_warnings"
    });
});

