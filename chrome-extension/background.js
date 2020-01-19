
document.body.addEventListener('click', function(message, callback) {
    console.log("click!");
    chrome.tabs.executeScript({
        "file": "content.js"
    }, true);
});



