
function preparePage() {
    document.getElementById("overview").onclick = function () {
        if (document.getElementById("overview").className == "try") {
            document.getElementById("overview").className = "";
        } else {
            document.getElementById("overview").className = "try";
        }
    };
}

window.onload = function() {
    preparePage();
}

