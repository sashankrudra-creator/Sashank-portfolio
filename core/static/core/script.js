document.addEventListener('DOMContentLoaded', () => {
    // Cursor Glow Effect
    const cursor = document.querySelector('.cursor-glow');
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    });

    // Navbar scroll background change
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.padding = '0.75rem 1.5rem';
                navbar.classList.add('scrolled');
            } else {
                navbar.style.padding = '1rem 2rem';
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Page "Appear" animation on load
    const contentSections = document.querySelectorAll('.section, .hero-section');
    contentSections.forEach(section => {
        section.style.opacity = '1';
        section.style.animation = 'appear 0.8s ease-out forwards';
    });

    // Simple Form Submission Simulation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;

            btn.textContent = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Thank you for your message! Sashank will get back to you soon.');
                btn.textContent = originalText;
                btn.disabled = false;
                contactForm.reset();
            }, 1500);
        });
    }

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navRight = document.querySelector('.nav-right');
    if (menuToggle && navRight) {
        menuToggle.addEventListener('click', () => {
            navRight.classList.toggle('active');
        });
    }
});
