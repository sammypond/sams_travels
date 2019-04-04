
document.getElementById("box9").addEventListener("mouseover", mouseOver);
document.getElementById("box9").addEventListener("mouseout", mouseOut);

function mouseOver() {
    var pictureContent = document.createElement("p");
    pictureContent.innerHTML = "One of the best<br>countries for food<br>tourism and it will<br>also wet your appetite<br>for a visit to<br>North Korea.";
    pictureContent.style.cssText = "position:absolute"
    document.getElementById("box9").appendChild(pictureContent);
} 

function mouseOut() {
  document.getElementById("box9").textContent = "Korea";
}