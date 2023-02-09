window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".header");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

const hideNavbar = document.querySelector(".navbar-collapse");

document.onclick = function (e) {
  if (e.target.id !== "navbar-collapse") {
    hideNavbar.classList.remove("show");
  }
};
