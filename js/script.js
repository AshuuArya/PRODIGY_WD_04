document.addEventListener('DOMContentLoaded', function() {

    const header = document.querySelector('.main-header');
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    // --- Header & Scroll-to-Top Button Visibility on Scroll ---
    window.addEventListener('scroll', () => {
        // Add a class to the header when user scrolls down
        if (window.scrollY > 50) {
            header.classList.add('scrolled-header');
        } else {
            header.classList.remove('scrolled-header');
        }

        // Show or hide the scroll-to-top button
        if (window.scrollY > 400) {
            scrollToTopBtn.classList.add('active');
        } else {
            scrollToTopBtn.classList.remove('active');
        }
    });

    // --- Magnetic Buttons Effect (requires GSAP) ---
    // This gives a premium feel to interactive elements like social links
    document.querySelectorAll('[data-magnetic]').forEach(el => {
        el.addEventListener('mousemove', function(e) {
            const position = this.getBoundingClientRect();
            const x = e.clientX - position.left - position.width / 2;
            const y = e.clientY - position.top - position.height / 2;
            gsap.to(this, { x: x * 0.3, y: y * 0.3, duration: 0.7, ease: 'power3.out' });
        });
        el.addEventListener('mouseleave', function() {
            gsap.to(this, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.3)' });
        });
    });
    
    // --- Smooth Scrolling ---
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 800, 'swing');
    });

    // --- ScrollReveal Animations ---
    // This creates elegant fade-in-on-scroll effects for sections
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 100,
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
        reset: false // Animations only happen once
    });
    
    // Animate elements in sequence as they appear
    sr.reveal('.hero-title .line', { origin: 'top', duration: 1200, interval: 200 });
    sr.reveal('.hero-subtitle', { delay: 500 });
    sr.reveal('.section-title');
    sr.reveal('.about-text p', { delay: 200 });
    sr.reveal('.skills-list', { delay: 400 });
    sr.reveal('.project-card', { interval: 150 });
    sr.reveal('.contact-subtitle');
    sr.reveal('.contact-email', { delay: 200 });
    sr.reveal('.footer-content > div', { interval: 100 });
});