
document.getElementById("box8").addEventListener("mouseover", mouseOver);
document.getElementById("box8").addEventListener("mouseout", mouseOut);

function mouseOver() {
    var pictureContent = document.createElement("p");
    pictureContent.innerHTML = "If everyone on<br>the planet had<br>the chance to visit<br>the Oregon Coast,<br>the world would be<br>a better place.";
    pictureContent.style.cssText = "position:absolute"
    document.getElementById("box8").appendChild(pictureContent);
} 

function mouseOut() {
  document.getElementById("box8").textContent = "Oregon Coast";
}