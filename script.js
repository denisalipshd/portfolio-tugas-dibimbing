// menyesuaikan tinggi navbar dan section
window.onload = function () {
  let navbar = document.querySelector(".navbar");
  let sections = document.querySelectorAll("section");

  let navbarHeight = navbar.offsetHeight;

  sections.forEach((section) => {
    section.style.paddingTop = navbarHeight + "px";
  });
};

// btn menu di klik
const menuList = document.querySelector(".menu-list");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  menuList.classList.toggle("active");
});
