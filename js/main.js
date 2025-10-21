// ===== Smooth Scroll for Sidebar Links =====
document.querySelectorAll('.sidebar nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // adjust for spacing
                behavior: 'smooth'
            });
        }
    });
});

// ===== Fade-In Animation on Scroll =====
const sections = document.querySelectorAll('section');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Run on load
