// Modo claro/escuro
const toggleThemeBtn = document.getElementById('toggle-theme');
const currentTheme = localStorage.getItem('theme') || 'light';

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleThemeBtn.textContent = '☀️';
    toggleThemeBtn.setAttribute('aria-pressed', 'true');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleThemeBtn.textContent = '🌙';
    toggleThemeBtn.setAttribute('aria-pressed', 'false');
  }
  localStorage.setItem('theme', theme);
}

toggleThemeBtn.addEventListener('click', () => {
  const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(theme);
});

// Aplica o tema salvo ao carregar a página
applyTheme(currentTheme);

// Menu mobile toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('primary-navigation');

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
  navToggle.setAttribute('aria-expanded', !expanded);
  navMenu.classList.toggle('open');
});