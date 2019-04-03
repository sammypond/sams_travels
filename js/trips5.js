document.getElementById("box5").addEventListener("mouseover", mouseOver);
document.getElementById("box5").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("box5").textContent = "Land of Smiles and Seafood";

};
function mouseOut() {
    document.getElementById("box5").textContent = "Thailand";
};