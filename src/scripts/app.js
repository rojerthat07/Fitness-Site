
var storeMessage = document.getElementById("store-message");
storeMessage.style.display = "none";

function counterCountAdd(){
    var count = document.getElementById("cart-count").firstChild.nodeValue;
    count++;
    document.getElementById("cart-count").firstChild.nodeValue = count;
}



function storeMessageAppear(){
    storeMessage.style.display = "grid";
}


function storeMessageExit(){
    storeMessage.style.display = "none";
}