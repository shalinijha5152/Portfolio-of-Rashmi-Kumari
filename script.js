// ==========================================
// 1. CLICK TO SHIFT NAVIGATION UNDERLINE
// ==========================================

// Grab all the navigation links inside the navbar
const allNavLinks = document.querySelectorAll('.navbar a');

// Listen for a click on every single menu button
allNavLinks.forEach(clickedLink => {
    clickedLink.addEventListener('click', function() {
        
        // Step A: Remove the active blue line from whichever tab has it right now
        allNavLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Step B: Put the active blue line onto the exact tab you just clicked
        this.classList.add('active');
    });
});


// ==========================================
// 2. SCROLL TO SHIFT NAVIGATION UNDERLINE
// ==========================================

// Grab all the major sections of your website
const allSections = document.querySelectorAll('section');

// Every single time your mouse scrolls up or down, run this function automatically
window.addEventListener('scroll', () => {
    
    // Get the current distance you have scrolled down from the very top of the page
    let currentScrollPosition = window.scrollY;

    allSections.forEach(section => {
        // Get the starting position of the section, shifting it slightly (150px) for smoother timing
        let sectionTop = section.offsetTop - 150;
        let sectionHeight = section.offsetHeight;
        let sectionId = section.getAttribute('id');

        // Check if your current scroll position falls inside this specific section's window
        if (currentScrollPosition >= sectionTop && currentScrollPosition < sectionTop + sectionHeight) {
            
            // Step A: Clear the active state from all nav links
            allNavLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Step B: Find the exact nav link that matches this section's ID and light it up
            const matchingLink = document.querySelector(`.navbar a[href="#${sectionId}"]`);
            if (matchingLink) {
                matchingLink.classList.add('active');
            }
        }
    });
});

