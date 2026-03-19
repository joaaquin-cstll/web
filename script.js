// Cambio de color del navbar al hacer scroll
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#000';
        nav.style.padding = '0.5rem 5%';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.9)';
        nav.style.padding = '1rem 5%';
    }
});

// Scroll suave para los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});