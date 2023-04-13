const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation__menu");

const header = document.querySelector(".header");

const IS_ACTIVE = "is-active";
const WITH_BACKGROUND = "with__background";

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle(IS_ACTIVE);
  navigation.classList.toggle("open");
});

window.onscroll = () => {
  hamburger.classList.remove(IS_ACTIVE);

  if (currentScrollPos > halfScreenHeight) {
    header.classList.add(WITH_BACKGROUND);
  } else {
    header.classList.remove(WITH_BACKGROUND);
  }
};
