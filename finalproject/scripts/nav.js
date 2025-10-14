export function initNavMenu() {
    const menuBtn = document.getElementById("main-nav");
    const navLinks =  document.getElementById("nav-links");

    if (!menuBtn || !navLinks) return;

    menuBtn.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        menuBtn.setAttibute('aria-expanded',isOpen);
    });
}