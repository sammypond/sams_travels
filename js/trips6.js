document.getElementById("box6").addEventListener("mouseover", mouseOver);
document.getElementById("box6").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("box6").textContent = "I love Camping In Oregon";

};
function mouseOut() {
    document.getElementById("box6").textContent = "Camping";
};