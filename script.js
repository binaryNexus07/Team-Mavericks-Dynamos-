// ScrollReveal animations
document.addEventListener('DOMContentLoaded', function () {
    // Check if ScrollReveal is loaded
    if (typeof ScrollReveal === 'undefined') {
        console.error('ScrollReveal is not loaded. Make sure the script tag is included in your HTML.');
        return;
    }

    const sr = ScrollReveal({
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        reset: false // Animations will only run once
    });

    sr.reveal('.highlight-card', { interval: 100, origin: 'bottom' });
    sr.reveal('.artist-card', { interval: 200, origin: 'left' });
    sr.reveal('.pass-card', { interval: 150, origin: 'right' });
});
