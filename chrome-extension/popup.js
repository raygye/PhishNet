let money = ["$", "money", "pay", "paid", "fee", "owe", "bank", "cash", "cheque", "atm", "currency", "debt", "donate", "refund", "credit"];
let personal = ["account", "sin", "ssn", "password", "username", "identity", "expire", "pin"];
let pronoun = ["your", "daughter", "son", "father", "mom", "dad", "grandpa", "grandfather", "grandma", "grandmother"];

let buttons = document.getElementsByClassName("collapse");
for (let i = 0; i < buttons.length; i++) {
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