const themeKey = 'leil-theme';
const toggleId = 'theme-toggle';

const setTheme = (theme) => {
    document.body.classList.toggle('dark', theme === 'dark');
    const btn = document.getElementById(toggleId);
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem(themeKey, theme);
};

const getSavedTheme = () => localStorage.getItem(themeKey);
const getPreferredTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const initTheme = () => {
    const saved = getSavedTheme();
    setTheme(saved || getPreferredTheme());
};

const toggleTheme = () => {
    setTheme(document.body.classList.contains('dark') ? 'light' : 'dark');
};

document.addEventListener('DOMContentLoaded', initTheme);
document.addEventListener('click', (event) => {
    if (event.target.id === toggleId) toggleTheme();
});
