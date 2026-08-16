// ===========================
// Smooth Scrolling
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// ===========================
// Active Sidebar Menu
// ===========================

const navLinks = document.querySelectorAll("nav ul li");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});


// ===========================
// Scroll To Top Button
// ===========================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===========================
// Scroll Reveal Animation
// ===========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", revealSections);

function revealSections() {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 120) {

            section.classList.add("show");

        }

    });

}

revealSections();
// Create confetti
function createConfetti() {
    const container = document.getElementById("confetti-container");

    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.backgroundColor =
            ["#f7b7c8", "#d8b4e2", "#f6d365", "#a8d8c8", "#f5a9b8"]
            [Math.floor(Math.random() * 5)];

        confetti.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        container.appendChild(confetti);
    }
}

// Run when website opens
window.addEventListener("load", function () {

    createConfetti();

    // Hide welcome message after 3 seconds
    setTimeout(function () {
        const message = document.getElementById("welcome-message");

        message.style.opacity = "0";
        message.style.transition = "opacity 0.5s ease";

        setTimeout(function () {
            message.remove();
        }, 500);

    }, 3000);

});