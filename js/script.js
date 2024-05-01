

let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 40 || 
        document.documentElement.scrollTop > 40) {
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
    
});



const navbarCollapseDiv = document.getElementById
('navbar-collapse');
const navbarShowBtn = document.getElementById
('navbar-show-btn');
const navbarCloseBtn = document.getElementById
('navbar-close-btn');


navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.toggle('navbar-collapse-rmv');
});



navbarCloseBtn.addEventListener('click', ()=> {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmv');
});

document.addEventListener('click', (e) => {
    if(e.target.id != 'navbar-collapse' && 
    e.target.id != 'navbar-show-btn' && e.
    target.parentElement.id != 'navbar-show-btn') {
        navbarCollapseDiv.classList.remove('navbar-collapse-rmv')
    }
})

let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() =>{
        document.body.classList.remove
        ('resize-animation-stopper')
    }, 400)
})


//light/dark mode toggle
// Select the checkbox
const themeToggleBtn = document.getElementById("theme-toggle-btn");

// Load the current theme from local storage, if available
const currentTheme = localStorage.getItem("theme") || "light";

// Apply the current theme on page load
document.body.classList.toggle("dark-mode", currentTheme === "dark");
themeToggleBtn.checked = currentTheme === "dark";

// Add an event listener to toggle the theme on change
themeToggleBtn.addEventListener("change", (event) => {
  const isChecked = event.target.checked;
  const theme = isChecked ? "dark" : "light";

  // Toggle the dark mode class on the body
  document.body.classList.toggle("dark-mode", isChecked);

  // Store the selected theme in local storage
  localStorage.setItem("theme", theme);
});


/*Select the checkbox
const themeToggleBtn = document.getElementById("theme-toggle-btn");

// Load the current theme from local storage, if available
const currentTheme = localStorage.getItem("theme") || "light";

// Apply the current theme on page load
document.body.classList.toggle("dark-mode", currentTheme === "dark");
themeToggleBtn.checked = currentTheme === "dark";

// Add an event listener to toggle the theme on change
themeToggleBtn.addEventListener("change", (event) => {
  const isChecked = event.target.checked;
  const theme = isChecked ? "dark" : "light";

  // Toggle the dark mode class on the body
  document.body.classList.toggle("dark-mode", isChecked);

  // Store the selected theme in local storage
  localStorage.setItem("theme", theme);
});
*/