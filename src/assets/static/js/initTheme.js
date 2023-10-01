const body = document.body;
// const theme = localStorage.getItem('theme')
const theme = "krakatau"
if (theme) 
  document.documentElement.setAttribute('data-bs-theme', theme)
