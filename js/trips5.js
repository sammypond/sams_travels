
document.getElementById("box5").addEventListener("mouseover", mouseOver);
document.getElementById("box5").addEventListener("mouseout", mouseOut);

function mouseOver() {
    var pictureContent = document.createElement("p");
    pictureContent.innerHTML = "Thailand is called<br>the land of smiles<br>but is is also<br> the land of<br>seafood.";
    pictureContent.style.cssText = "position:absolute"
    document.getElementById("box5").appendChild(pictureContent);
} 

function mouseOut() {
  document.getElementById("box5").textContent = "Thailand";
}