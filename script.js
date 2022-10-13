const navbar = document.querySelector("nav");
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector('.menu-btn');

/* Open close function */
menuBtn.addEventListener("click", () => {
   navbar.classList.toggle('nav-background');
   menu.classList.toggle('nav-toggle');
});