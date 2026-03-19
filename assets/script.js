
const toggle = document.querySelector(".mobile-toggle");
const menu = document.querySelector(".menu");
if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}
