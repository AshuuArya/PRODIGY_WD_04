document.addEventListener('DOMContentLoaded', function() {

    const header = document.querySelector('.main-header');
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    const cursor = document.querySelector('.cursor');

    // --- Custom Cursor Logic ---
    window.addEventListener('mousemove', e => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.08, // Further decreased duration for an even faster response
            ease: 'power2.out'
        });
    });

    document.querySelectorAll('a, .project-card, [data-magnetic]').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // --- Header & Scroll-to-Top Button Visibility ---
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled-header', window.scrollY > 50);
        scrollToTopBtn.classList.toggle('active', window.scrollY > 400);
    });

    // --- Dynamic Hero Text Animation ---
    function animateHeroText() {
        const titleLines = [
            { el: document.querySelector('.hero-title .line:first-child'), text: "Ashutosh Arya" },
            { el: document.querySelector('#Designation-text'), text: "Front-End Developer" }
        ];

        titleLines.forEach(line => {
            if (line.el) {
                line.el.innerHTML = line.text.split('').map(char => `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`).join('');
                gsap.fromTo(line.el.querySelectorAll('.char'),
                    { y: '115%' },
                    { y: '0%', duration: 1, ease: 'power3.out', stagger: 0.04, delay: 0.5 }
                );
            }
        });
    }
    animateHeroText();

    // --- Magnetic Buttons Effect ---
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
    
    // --- ScrollReveal Animations ---
    const sr = ScrollReveal({
        origin: 'bottom', distance: '60px', duration: 1000,
        delay: 100, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)', reset: false
    });
    
    sr.reveal('.hero-subtitle, .btn-primary', { delay: 800 });
    sr.reveal('.section-title');
    sr.reveal('.about-text p', { delay: 200 });
    sr.reveal('.skills-list', { delay: 400 });
    sr.reveal('.value-card', { interval: 150 });
    sr.reveal('.timeline-item', { interval: 150 });
    sr.reveal('.project-card', { interval: 150 });
    sr.reveal('.contact-subtitle');
    sr.reveal('.contact-email', { delay: 200 });
    sr.reveal('.footer-content > div', { interval: 100 });
});

