chrome.tabs.onUpdated.addListener(function(tabId) {
    chrome.tabs.sendMessage(tabId, {
        update: "true",
        msg: "find_warnings"
    });
});

