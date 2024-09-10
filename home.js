document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButton = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");
  
    if (currentTheme) {
      document.body.classList.toggle("dark-mode", currentTheme === "dark");
      themeToggleButton.innerHTML =
        currentTheme === "dark"
          ? '<i class="fa-solid fa-sun"></i>' // Sun icon for light mode
          : '<i class="fa-solid fa-moon"></i>'; // Moon icon for dark mode
    }
  
    themeToggleButton.addEventListener("click", function () {
      const isDarkMode = document.body.classList.toggle("dark-mode");
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
      themeToggleButton.innerHTML = isDarkMode
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
    });
  
    const navi = document.getElementById('navitemsymbol');
  const snavi = document.getElementsByClassName('side-navbar')[0]; // Access the first (and likely only) element in the collection
  let toggled = false; // Track whether the state is toggled
  
  navi.addEventListener('click', () => {
      if (!toggled) {
          navi.classList.add('toggled'); // Apply the toggled styles to navi
          snavi.classList.add('toggled'); // Apply the toggled styles to side-navbar
          toggled = true;
      } else {
          navi.classList.remove('toggled'); // Revert to default styles for navi
          snavi.classList.remove('toggled'); // Revert to default styles for side-navbar
          toggled = false;
      }
  });
  
    
  
  });
  