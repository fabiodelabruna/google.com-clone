function showApps() {
    
    var div = document.getElementById("div-apps");
    var style = getComputedStyle(div);
    var display = style.getPropertyValue("display");

    if (display == "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
    
}