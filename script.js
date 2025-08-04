function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  if (menu.classList.contains("open")) {
    menu.style.animation = "slideInMenu 0.6s ease-out forwards";
  } else {
    menu.style.animation = "slideOutMenu 0.6s ease-out forwards";
  }
}

// Dark Mode Toggle with Switch
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
  document.getElementById("mode-switch").checked = document.body.classList.contains("dark-mode");
}

// Load saved mode preference or default to dark mode
document.addEventListener("DOMContentLoaded", function () {
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === null || savedMode === "true") {
    document.body.classList.add("dark-mode");
    document.getElementById("mode-switch").checked = true;
  } else {
    document.body.classList.remove("dark-mode");
    document.getElementById("mode-switch").checked = false;
  }

  // Add animate class to sections for CSS animations on page load
  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("animate-on-scroll");
  });
});

// Scroll-triggered animations
document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      section.classList.add("animate");
    }
  });
});