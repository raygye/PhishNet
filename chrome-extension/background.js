chrome.tabs.onUpdated.addListener(function(tabId) {
    chrome.tabs.sendMessage(tabId, {update: "true"});
});

/*
chrome.runtime.onInstalled.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {
    "file": "content.js"
    });
});
/*
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id, {
    "file": "content.js"
    }
  );
});
*/
