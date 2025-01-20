// script.js
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".fade-link");
    const fadeWrapper = document.getElementById("fade-wrapper");
  
    links.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default navigation
        const href = link.getAttribute("href");
  
        // Add the fade-out class
        fadeWrapper.classList.add("fade-out");
  
        // Wait for the animation to complete, then navigate
        setTimeout(() => {
          window.location.href = href;
        }, 3000); // Match the CSS animation duration
      });
    });
  });
  