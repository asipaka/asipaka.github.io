// script.js

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {

    // --- Theme Toggle Functionality ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Check for saved theme preference or respect OS preference
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeButtonIcon(savedTheme);

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme); // Save the preference
        updateThemeButtonIcon(newTheme);
    });

    function updateThemeButtonIcon(theme) {
        themeToggleBtn.textContent = theme === 'light' ? '🌙' : '☀️';
    }

    // --- Typing Animation for Hero Section ---
    const typingTextElement = document.getElementById('typing-text');
    if (typingTextElement) {
        const texts = ['Developer.', 'Researcher.', 'OSINT Enthusiast.']; // Add your own titles here
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function type() {
            const currentText = texts[textIndex];

            if (isDeleting) {
                // Remove a character
                typingTextElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50; // Delete faster
            } else {
                // Add a character
                typingTextElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100; // Type slower
            }

            // Check if current text is fully typed out
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typingSpeed = 1000; // Pause at the end of typing
            }
            // Check if current text is fully deleted
            else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length; // Move to next text, loop back to start
                typingSpeed = 500; // Pause before starting next word
            }

            setTimeout(type, typingSpeed);
        }
        // Start the animation
        setTimeout(type, 1000);
    }

});