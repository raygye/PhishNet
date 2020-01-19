let money = ["$", "money", "pay", "paid", "fee", "owe", "bank", "cash", "cheque", ""];
var buttons = document.getElementsByClassName("collapse");
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