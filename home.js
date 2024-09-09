
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.toggle('dark-mode', currentTheme === 'dark');
        themeToggleButton.innerHTML = currentTheme === 'dark'
            ? '<i class="fa-solid fa-sun"></i>'  // Sun icon for light mode
            : '<i class="fa-solid fa-moon"></i>'; // Moon icon for dark mode
    }

    themeToggleButton.addEventListener('click', function() {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        themeToggleButton.innerHTML = isDarkMode
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';
    });
});
