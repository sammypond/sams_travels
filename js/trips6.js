
document.getElementById("box6").addEventListener("mouseover", mouseOver);
document.getElementById("box6").addEventListener("mouseout", mouseOut);

function mouseOver() {
    var pictureContent = document.createElement("p");
    pictureContent.innerHTML = "Sleeping underdeath<br>the stars is food<br>for your soul.";
    pictureContent.style.cssText = "position:absolute"
    document.getElementById("box6").appendChild(pictureContent);
} 

function mouseOut() {
  document.getElementById("box6").textContent = "Camping";
}