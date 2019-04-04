

document.getElementById("box2").addEventListener("mouseover", mouseOver);
document.getElementById("box2").addEventListener("mouseout", mouseOut);

function mouseOver() {
    var pictureContent = document.createElement("p");
    pictureContent.innerHTML = "also known as the <br>Republic of India, is a<br> country in South Asia. <br>It is the seventh largest<br> country by area and with<br> more than 1.3 billion <br>people.";
    pictureContent.style.cssText = "position:absolute"
    document.getElementById("box2").appendChild(pictureContent);
} 

function mouseOut() {
  document.getElementById("box2").textContent = "India";
}
