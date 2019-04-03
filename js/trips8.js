document.getElementById("box8").addEventListener("mouseover", mouseOver);
document.getElementById("box8").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("box8").textContent = "Cannon Beach";

};
function mouseOut() {
    document.getElementById("box8").textContent = "Oregon Coast";
};