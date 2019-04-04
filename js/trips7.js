
document.getElementById("box7").addEventListener("mouseover", mouseOver);
document.getElementById("box7").addEventListener("mouseout", mouseOut);

function mouseOver() {
    var pictureContent = document.createElement("p");
    pictureContent.innerHTML = "Easily one of<br>the most unique<br>places you will<br>visit in your<br> lifetime.";
    pictureContent.style.cssText = "position:absolute"
    document.getElementById("box7").appendChild(pictureContent);
} 

function mouseOut() {
  document.getElementById("box7").textContent = "South Africa";
}