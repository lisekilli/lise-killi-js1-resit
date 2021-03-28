var div = document.querySelector("div"):
div.addEventListener("click", buttonClicked, false);

var button = documen.querySelector("button");
button.addEventListener("click", resetButton, false);

function resetButton () {
    div.removeEventListener("click", buttonClicked);
    
}