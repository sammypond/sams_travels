document.getElementById("box6").addEventListener("mouseover", mouseOver);
document.getElementById("box6").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("box6").textContent = "Sleep Outside";

};
function mouseOut() {
    document.getElementById("box6").textContent = "Camping";
};