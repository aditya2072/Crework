const colors = document.querySelectorAll(".container");
const hd=document.getElementById("H");



function generateColors() {
  colors.forEach((color) => {
    let hexcode = "#" + Math.random().toString(16).substring(2, 8);
    color.style.backgroundColor = hexcode;
    color.innerHTML = hexcode;
  });
}
generateColors();

function generateHeadColors() {
let hcode = "#" + Math.random().toString(16).substring(2, 8);
hd.style.color=hcode;
}

