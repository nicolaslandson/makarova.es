// Testimonials Slider
let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        dots[i].classList.remove('active');
    });
    
    if (index >= testimonials.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = testimonials.length - 1;
    } else {
        currentSlide = index;
    }
    
    testimonials[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Auto-advance slider every 5 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.card, .approach-item, .requirement-item');
    
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// Smooth scroll for anchor links
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

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover effect to cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Button click analytics (placeholder)
const buttons = document.querySelectorAll('.btn-primary, .btn-resource');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        console.log('Button clicked:', this.textContent);
    });
});

