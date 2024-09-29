// // hamburger

document.getElementById('hamburger').addEventListener('click', function() {
  const navMenu = document.getElementById('nav_menu');
  navMenu.classList.toggle('active');
  this.classList.toggle('active'); 
});

// // modal search
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() { modal.style.display = "block"; }
span.onclick = function() { modal.style.display = "none"; }

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// // dropdown
 function toggleDropdown(dropdownId) {

   var dropdowns = document.getElementsByClassName("custom_nav");
   for (var i = 0; i < dropdowns.length; i++) {
     if (dropdowns[i].id !== dropdownId) {
       dropdowns[i].classList.remove("show");
     }
   }


   document.getElementById(dropdownId).classList.toggle("show");
 }


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("custom_nav");
    for (var i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains('show')) {
        dropdowns[i].classList.remove('show');
      }
    }
  }
}

// // arrow dropdown icon changing
const arrrow_down = document.getElementsByClassName('arrrow_down');

for (let i = 0; i < arrrow_down.length; i++) {
    arrrow_down[i].addEventListener('click', function() {
        
        for (let j = 0; j < arrrow_down.length; j++) {
            if (j !== i) {
                arrrow_down[j].classList.remove('clicked');
            }
        }
    
        arrrow_down[i].classList.toggle('clicked');
    });
}


