function getHyperlinks(){
    var hyperlinks = document.getElementsByTagName("a");
    for(link in hyperlinks){
        console.log(hyperlinks[link])
        hyperlinks[link].style.color = "orange";
        
        
    }
}
getHyperlinks();