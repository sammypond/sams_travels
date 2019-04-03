document.getElementById("box1").addEventListener("mouseover", mouseOver);
document.getElementById("box1").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("box1").textContent = "Year in China";
};
function mouseOut() {
    document.getElementById("box1").textContent = "China";
};

