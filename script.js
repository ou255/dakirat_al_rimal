document.addEventListener('DOMContentLoaded', () => {
    // Debug image loading
    document.querySelectorAll('.character-image img').forEach(img => {
        img.addEventListener('error', function() {
            console.error('Error loading image:', this.src);
            this.style.display = 'none';
            this.parentElement.style.backgroundColor = '#ffebee';
        });
        
        img.addEventListener('load', function() {
            console.log('Image loaded successfully:', this.src);
            this.style.display = 'block';
        });
        
        if (img.complete) {
            console.log('Image already loaded:', this.src);
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    });

    // Animate character cards on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.character-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });

    // Navigation menu background change on scroll
    const nav = document.querySelector('.main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(44, 24, 16, 0.95)';
        } else {
            nav.style.background = 'rgba(44, 24, 16, 0.9)';
        }
    });
}); 