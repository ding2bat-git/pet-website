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

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputs = this.querySelectorAll('input, textarea');
    const name = inputs[0].value;
    const email = inputs[1].value;
    
    // Simple feedback
    alert(`Thanks ${name}! We'll get back to you at ${email} soon! 🐾`);
    this.reset();
});

// Pet adoption interest
document.querySelectorAll('.pet-card').forEach(card => {
    card.addEventListener('click', function() {
        const petName = this.querySelector('h3').textContent;
        alert(`You're interested in adopting ${petName}? Great choice! Please use the contact form to learn more.`);
    });
});

// Add hover animation to care tips
document.querySelectorAll('.tip').forEach((tip, index) => {
    tip.style.animationDelay = `${index * 0.1}s`;
});