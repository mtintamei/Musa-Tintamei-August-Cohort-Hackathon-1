document.addEventListener('DOMContentLoaded', (event) => {
    // Animation for timeline items
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.content').forEach((item) => {
        observer.observe(item);
    });

    // Skill bar animations
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target.querySelector('.skill-level');
                const skillPercentage = entry.target.dataset.skill;
                skillLevel.style.width = `${skillPercentage}%`;
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.skill').forEach((item) => {
        skillObserver.observe(item);
    });

    window.addEventListener('scroll', updateParallax);
    window.addEventListener('resize', updateParallax);
    updateParallax(); // Initial call

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if it's open
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
});