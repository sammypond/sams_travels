

document.getElementById("box4").addEventListener("mouseover", mouseOver);
document.getElementById("box4").addEventListener("mouseout", mouseOut);

function mouseOver() {
    var pictureContent = document.createElement("p");
    pictureContent.innerHTML = "Oaxaca is where<br>mezcal comes from<br>it is also home to <br>some of Mexico's<br>best food<br>including mole";
    pictureContent.style.cssText = "position:absolute"
    document.getElementById("box4").appendChild(pictureContent);
} 

function mouseOut() {
  document.getElementById("box4").textContent = "Oaxaca";
}