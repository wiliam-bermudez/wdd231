export function setupMenu() {
    const menuButton = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });
    }

    const year = document.getElementById("year");
    const lastModified = document.getElementById("lastModified");

    if (year) year.textContent = new Date().getFullYear();
    if (lastModified) lastModified.textContent = document.lastModified;
}
