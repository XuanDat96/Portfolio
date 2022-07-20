const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlayBtn = document.querySelector(".overlay");
menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlayBtn.classList.toggle("active");
});
overlayBtn.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlayBtn.classList.toggle("active");
});
