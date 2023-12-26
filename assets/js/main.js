// Mobile menu
const menuBtn = document.getElementById("menu-btn"),
  navLinks = document.getElementById("nav-links"),
  menuBtnIcon = menuBtn.querySelector("i");
// body = document.getElementById("body");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// body.addEventListener("click", () => {
//   navLinks.classList.remove("open");
//   menuBtnIcon.setAttribute("class", "ri-menu-3-line");
//   console.log('click body');
// });
