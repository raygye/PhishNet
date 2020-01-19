function getHyperlinks(){
    var hyperlinks = document.getElementsByTagName("a");
    for(link in hyperlinks){
        console.log(hyperlinks[link])
        hyperlinks[link].style.color = "orange";
        addWarningBox(hyperlinks[link].parentElement);

        
    }
}

function addWarningBox(parentElement){
    var textbox = document.createElement("div");
    textbox.id = "warning-box";
    textbox.innerHTML = "Warning!";
    parentElement.appendChild(textbox);

}


getHyperlinks();