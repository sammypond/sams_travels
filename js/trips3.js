document.getElementById("box3").addEventListener("mouseover", mouseOver);
document.getElementById("box3").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("box3").textContent = "Lost in Taiwan";

};
function mouseOut() {
    document.getElementById("box3").textContent = "Taiwan";
};
