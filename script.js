const burger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(
  ".container__header__navigation--mobile-box"
);

const mobileMenuLink = document.querySelectorAll(
  ".container__header__navigation--mobile-box__link"
);
const mainContainer = document.querySelector(".container");

const backTopBtn = document.querySelector("#back-top");

const toggleMenu = () => {
  burger.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
};

mobileMenuLink.forEach((link) =>
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-active");
    burger.classList.remove("is-active");
  })
);

const showBackTop = () => {
  if (window.scrollY >= 200) {
    backTopBtn.classList.remove("hidden");
  } else {
    backTopBtn.classList.add("hidden");
  }
};

window.addEventListener("scroll", showBackTop);

burger.addEventListener("click", toggleMenu);
