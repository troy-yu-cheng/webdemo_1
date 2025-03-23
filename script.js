// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply animation classes to elements
function initAnimations() {
    // Add animation classes to sections
    document.querySelectorAll('section').forEach((section, index) => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
    });

    // Add animation to research highlights
    document.querySelectorAll('.research-highlight').forEach((highlight, index) => {
        highlight.classList.add('animate-on-scroll');
        highlight.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(highlight);
    });

    // Add animation to publications
    document.querySelectorAll('.publication').forEach((pub, index) => {
        pub.classList.add('animate-on-scroll');
        pub.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(pub);
    });

    // Add animation to contact cards
    document.querySelectorAll('.contact-card').forEach((card, index) => {
        card.classList.add('animate-on-scroll');
        card.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(card);
    });
}

// Parallax effect for header
function initParallax() {
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            header.style.backgroundPositionY = `${scrolled * 0.5}px`;
        });
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    initParallax();
});