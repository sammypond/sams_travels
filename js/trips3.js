

document.getElementById("box3").addEventListener("mouseover", mouseOver);
document.getElementById("box3").addEventListener("mouseout", mouseOut);

function mouseOver() {
    var pictureContent = document.createElement("p");
    pictureContent.innerHTML = "officially the Republic<br> of China, is a state in <br>East Asia. Neighbouring <br>states include the <br>People's Republic of <br>China to the west, Japan<br> to the northeast.";
    pictureContent.style.cssText = "position:absolute"
    document.getElementById("box3").appendChild(pictureContent);
} 

function mouseOut() {
  document.getElementById("box3").textContent = "Taiwan";
}
