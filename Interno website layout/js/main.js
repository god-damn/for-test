
const burgerBtn = document.querySelector('.burger-btn')
const headerInner = document.querySelector('.header__inner')


burgerBtn.onclick = () => {
  burgerBtn.classList.toggle('burger-btn--active')
  headerInner.classList.toggle('header__inner__mobile')
  document.body.classList.toggle('no-scroll')
}