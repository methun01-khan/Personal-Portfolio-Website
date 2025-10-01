document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');

    // Function to show a page and update active links
    function showPage(pageId) {
        // Hide all sections
        pageSections.forEach(section => {
            section.classList.remove('active');
        });

        // Show the target section
        const targetSection = document.getElementById(pageId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Update active state for nav links
        navLinks.forEach(link => {
            if (link.dataset.page === pageId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Scroll to top of the page for better UX
        window.scrollTo(0, 0);
    }
    
    // Set the initial page to 'home'
    showPage('home');

    // Add click event listeners to all navigation elements
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            const pageId = link.dataset.page;
            if (pageId) {
                showPage(pageId);
            }
        });
    });
    
    // Special handling for the main logo/name to go home
    const homeLink = document.querySelector('header > div > div');
    homeLink.style.cursor = 'pointer';
    homeLink.addEventListener('click', () => {
        showPage('home');
    });

});
