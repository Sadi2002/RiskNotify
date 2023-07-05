const burger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(
  ".container__header__navigation--mobile-box"
);

const mobileMenuLink = document.querySelectorAll(
  ".container__header__navigation--mobile__list__item__link"
);
const mainContainer = document.querySelector(".container");

const backTopBtn = document.querySelector("#back-top");

const toggleMenu = () => {
  burger.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
};

const showBackTop = () => {
  if (window.scrollY >= 200) {
    backTopBtn.classList.remove("hidden");
  } else {
    backTopBtn.classList.add("hidden");
  }
};

window.addEventListener("scroll", showBackTop);

burger.addEventListener("click", toggleMenu);
