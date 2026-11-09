// MOBILE NAVIGATION
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("open");
        });
    });
}

// CLOSE MENU WHEN CLICKING OUTSIDE
document.addEventListener("click", function (event) {
    if (
        menuToggle &&
        navLinks &&
        !menuToggle.contains(event.target) &&
        !navLinks.contains(event.target)
    ) {
        navLinks.classList.remove("open");
    }
});

// FOOTER YEAR
const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}