document.addEventListener('DOMContentLoaded', () => {
    // Select all project details and buttons
    const projectDetails = document.querySelectorAll('.project-details');
    const toggleButtons = document.querySelectorAll('.toggle-details');

    // Add event listeners to each button
    toggleButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Check if the project details are currently hidden
            if (projectDetails[index].classList.contains('hidden')) {
                // Show the project details and change the button text
                projectDetails[index].classList.remove('hidden');
                button.textContent = 'Hide Details';
            } else {
                // Hide the project details and reset the button text
                projectDetails[index].classList.add('hidden');
                button.textContent = 'Show Details';
            }
        });
    });
});
