// Get all "Learn More" buttons
const learnButtons = document.querySelectorAll('.learn-btn');

// Add click event to each button (JS event handling)
learnButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Find the parent card and the hidden description (JS DOM traversal)
        const card = button.closest('.card');
        const desc = card.querySelector('.card-desc');

        // Toggle the "hidden" class to show/hide description (JS class manipulation)
        desc.classList.toggle('hidden');

        // Update button text based on description state (JS text content change)
        if (desc.classList.contains('hidden')) {
            button.textContent = 'Learn More';
        } else {
            button.textContent = 'Show Less';
        }
    });
});

// Add a fun welcome message (JS console log + alert option)
console.log("Welcome to your HTML/CSS/JS Learning Hub! 🚀 Check the console for updates.");

// Optional: Show a welcome alert on page load (uncomment to enable)
// window.addEventListener('load', () => {
//     alert("Hi there! Ready to learn HTML, CSS, and JavaScript? Click the cards to explore!");
// });