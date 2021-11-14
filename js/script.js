const toggleThemeBtn = document.querySelector('.toggleThemeBtn');

if (!localStorage.theme) {
    localStorage.theme = 'light';
}

document.body.className = localStorage.theme;

if (toggleThemeBtn) {
    toggleThemeBtn.onclick = () => {
        document.body.classList.toggle('dark');
        localStorage.theme = document.body.className || 'light';
    }
}
