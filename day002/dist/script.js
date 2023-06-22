const hamburger = document.getElementById("hamburger");
const lines= document.getElementsByClassName("line");

function toggleHamburger(){
  hamburger.classList.toggle("open");
  lines[0].classList.remove("no-animation");
  lines[1].classList.remove("no-animation");
  lines[2].classList.remove("no-animation");
}