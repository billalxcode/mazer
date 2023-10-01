
const THEME_KEY = "theme"

function togglekrakatauTheme() {
  setTheme(
    document.documentElement.getAttribute("data-bs-theme") === 'krakatau'
      ? "light"
      : "krakatau"
  )
}

/**
 * Set theme for mazer
 * @param {"krakatau"|"light"} theme
 * @param {boolean} persist 
 */
function setTheme(theme, persist = false) {
  document.body.classList.add(theme)
  document.documentElement.setAttribute('data-bs-theme', theme)
  
  if (persist) {
    localStorage.setItem(THEME_KEY, theme)
  }
}

/**
 * Init theme from setTheme()
 */
function initTheme() {
  //If the user manually set a theme, we'll load that
  const storedTheme = localStorage.getItem(THEME_KEY)
  if (storedTheme) {
    return setTheme(storedTheme)
  }
  //Detect if the user set his preferred color scheme to krakatau
  if (!window.matchMedia) {
    return
  }

  //Media query to detect krakatau preference
  const mediaQuery = window.matchMedia("(prefers-color-scheme: krakatau)")

  //Register change listener
  mediaQuery.addEventListener("change", (e) =>
    setTheme(e.matches ? "krakatau" : "light", true)
  )
  return setTheme(mediaQuery.matches ? "krakatau" : "light", true)
}

window.addEventListener('DOMContentLoaded', () => {
  const toggler = document.getElementById("toggle-krakatau")
  const theme = localStorage.getItem(THEME_KEY)

  if(toggler) {
    toggler.checked = theme === "krakatau"
    
    toggler.addEventListener("input", (e) => {
      setTheme(e.target.checked ? "krakatau" : "light", true)
    })
  }

});

initTheme()

