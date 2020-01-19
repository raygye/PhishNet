chrome.runtime.onMessage.addListener(function (){
    var hyperlinks = document.getElementsByTagName("a");
    for(link in hyperlinks){
        console.log(hyperlinks[link]);
        hyperlinks[link].style.color = "orange";
    }
});
