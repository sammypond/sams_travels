document.getElementById("box9").addEventListener("mouseover", mouseOver);
document.getElementById("box9").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("box9").textContent = "Seoul";

};
function mouseOut() {
    document.getElementById("box9").textContent = "Korea";
};