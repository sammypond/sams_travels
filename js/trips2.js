document.getElementById("box2").addEventListener("mouseover", mouseOver);
document.getElementById("box2").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("box2").textContent = "Year in India";

};
function mouseOut() {
    document.getElementById("box2").textContent = "India";
};
