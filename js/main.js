
const menuToggle = document.getElementById("menu-toggle");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const menuPanel = document.getElementById("menu-panel");

function setMenuOpen(isOpen) {
    menuPanel.hidden = !isOpen;
    menuIcon.classList.toggle("noDisplay", isOpen);
    closeIcon.classList.toggle("noDisplay", !isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
}

menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isExpanded);
});

document.addEventListener("keydown", (event) => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    if (event.key === "Escape" && isExpanded) {
        setMenuOpen(false);
        menuToggle.focus();
    }
});