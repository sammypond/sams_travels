document.getElementById("box4").addEventListener("mouseover", mouseOver);
document.getElementById("box4").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("box4").textContent = "In Love With Mexico";

};
function mouseOut() {
    document.getElementById("box4").textContent = "Oaxaca";
};