// Enhanced JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    const toggleDarkMode = document.createElement('button');
    toggleDarkMode.textContent = 'Toggle Dark Mode';
    toggleDarkMode.style.position = 'fixed';
    toggleDarkMode.style.bottom = '10px';
    toggleDarkMode.style.right = '10px';
    document.body.appendChild(toggleDarkMode);

    toggleDarkMode.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        document.body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
        const link = document.querySelector('link[href="styles-dark.css"]');
        if (currentTheme === 'dark') {
            link.disabled = true;
        } else {
            link.disabled = false;
        }
    });
});
