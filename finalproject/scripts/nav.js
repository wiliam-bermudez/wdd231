// nav.js
export function setupMenu() {
  const menuButton = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", () => {
      const isHidden = mobileNav.hasAttribute("hidden");
      if (isHidden) {
        mobileNav.removeAttribute("hidden");
        menuButton.setAttribute("aria-expanded", "true");
      } else {
        mobileNav.setAttribute("hidden", "");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }

  const year = document.getElementById("year");
  const lastModified = document.getElementById("lastModified");

  if (year) year.textContent = new Date().getFullYear();
  if (lastModified) lastModified.textContent = document.lastModified;
}
