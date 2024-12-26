// script.js
// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust offset as needed
                behavior: 'smooth'
            });
        }
    });
});

// GSAP Animations
gsap.from("header h1", {
    opacity: 0,
    duration: 1,
    y: 50,
    delay: 0.5 // Reduced delay for faster animation
});

gsap.from(".skills-images img", {
    opacity: 0,
    duration: 1,
    y: 50,
    delay: 1,
    stagger: 0.2 // Reduced stagger for smoother effect
});

gsap.from("#about h2, #about p", {
    opacity: 0,
    duration: 1,
    y: 50,
    delay: 1.5,
    stagger: 0.3
});

gsap.from("#projects h2", {
    opacity: 0,
    duration: 1,
    y: 50,
    delay: 2,
});

gsap.from(".project", {
    opacity: 0,
    duration: 1,
    y: 50,
    delay: 2.3,
    stagger: 0.2
});

gsap.from("#contact h2, #contact p, #contact ul", {
    opacity: 0,
    duration: 1,
    y: 50,
    delay: 2.8,
    stagger: 0.3
});

