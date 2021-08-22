document.getElementById("menuToggle").onclick = function () { myFunction() };

function myFunction() {
  document.getElementById("menu").classList.toggle("show");
  document.getElementById("menuToggle").classList.toggle("change");
}