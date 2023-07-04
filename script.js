const burger = document.querySelector(
  ".container__header__navigation--mobile__hamburger-container"
);
const mobileMenu = document.querySelector(
  ".container__header__navigation--mobile__list"
);

const mobileMenuLink = document.querySelectorAll(
  ".container__header__navigation--mobile__list__item__link"
);

const toggleMenu = () => {
  if (mobileMenu.classList.contains("to-up")) {
    mobileMenu.classList.remove("to-up");
    mobileMenu.classList.add("to-down");
  } else {
    mobileMenu.classList.remove("to-down");
    mobileMenu.classList.add("to-up");
  }
};

burger.addEventListener("click", toggleMenu);
