document.addEventListener('DOMContentLoaded', () => {
    // 1. Select the elements
    const hamburger = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    // 2. Add click event
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            // Toggle the 'active' class (shows/hides menu defined in CSS)
            navMenu.classList.toggle('active');
        });
    }
});