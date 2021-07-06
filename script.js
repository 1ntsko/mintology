const burger = document.querySelector(".burger");
const mobileNavbar = document.querySelector(".mobile-navbar");
const close = document.querySelector(".close");

burger.addEventListener("click", () => {
  mobileNavbar.style.left = "0%";
  mobileNavbar.style.transition = "all .5s";
});

close.addEventListener("click", () => {
  mobileNavbar.style.left = "-100%";
  mobileNavbar.style.transition = "all .5s";
});
