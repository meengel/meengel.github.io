/* ### UTILS ### */
function removeDiv(Div){
    Div.fadeOut(500, function() {
        Div.remove();
    });  
}

function showDiv(Div){
    Div.show()
}

function hideDiv(Div){
    Div.hide()
}