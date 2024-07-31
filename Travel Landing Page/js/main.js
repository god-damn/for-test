const burgerMenu = document.querySelector(".burger-btn");
const header = document.querySelector(".header__top");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger-btn--active");
  document.body.classList.toggle("no-scroll");
  header.classList.toggle("header__mobile");
});
