// write your code below


document.getElementById("box1").addEventListener("mouseover", mouseOver);
document.getElementById("box1").addEventListener("mouseout", mouseOut);

function mouseOver() {
    var pictureContent = document.createElement("p");
    pictureContent.innerHTML = "Officially the People's<br> Republic of China, is a <br>country in East Asia and <br>the world's most <br>populous country,";
    pictureContent.style.cssText = "position:absolute"
    document.getElementById("box1").appendChild(pictureContent);
} 

function mouseOut() {
  document.getElementById("box1").textContent = "China";
}
