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


// dropdown
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Select all elements by the class name
const arrrow_down = document.getElementsByClassName('arrrow_down');

// Loop through each div and add event listeners
for (let i = 0; i < arrrow_down.length; i++) {
    arrrow_down[i].addEventListener('click', function() {
        // Toggle the 'clicked' class for the clicked div
        arrrow_down[i].classList.toggle('clicked');
    });
}

