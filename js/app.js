const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const contactbtn = document.querySelector("#contactbtn");
const sociosbtn = document.querySelector("#sociosbtn");
const areasbtn = document.querySelector("#areasbtn");
const estudiobtn = document.querySelector("#estudiobtn");
const logomenubtn = document.querySelector("#logomenubtn");
const guiasbtn = document.querySelector("#guiasbtn");


function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
contactbtn.addEventListener("click", toggleMenu);
sociosbtn.addEventListener("click", toggleMenu);
areasbtn.addEventListener("click", toggleMenu);
estudiobtn.addEventListener("click", toggleMenu);
logomenubtn.addEventListener("click", toggleMenu);
guiasbtn.addEventListener("click", toggleMenu);

