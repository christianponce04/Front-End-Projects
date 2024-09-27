
const nav = document.getElementById('nav_area');
const mainLogo = document.getElementById('main_logo');
const header = mainLogo.parentNode;

const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function swap() {
  if (window.innerWidth <= 1000) {
    header.insertBefore(nav,header);
      
    }
    else{
        header.insertBefore(nav,mainLogo);
    }
}

swap();

window.addEventListener('resize', swap);


btn.onclick = function() { modal.style.display = "block"; }
span.onclick = function() { modal.style.display = "none"; }

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
