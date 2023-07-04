const burger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(
  ".container__header__navigation--mobile-box"
);

const mobileMenuLink = document.querySelectorAll(
  ".container__header__navigation--mobile__list__item__link"
);
const mainContainer = document.querySelector(".container");

const toggleMenu = () => {
  burger.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);
