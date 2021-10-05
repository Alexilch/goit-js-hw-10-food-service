import { theme } from './themes_list';

const switchToggle = document.getElementById('theme-switch-toggle');
const page = document.querySelector('body');

switchToggle.addEventListener('change', changeTheme)

function changeTheme() {
  page.classList.toggle(theme.DARK);
if (!switchToggle.checked) {
  page.classList.add(theme.LIGHT)
}  
else {
page.classList.remove(theme.LIGHT)
  };
  localStorage.setItem('theme', page.className);
}

function currentTheme() {
  const savedLocalTheme = localStorage.getItem('theme') || theme.LIGHT;
  switchToggle.checked = savedLocalTheme === theme.DARK;
  page.className = savedLocalTheme;
}
currentTheme();