document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default behavior if needed

      // Remove the active-link class from all links
      document.querySelectorAll('.link').forEach(link => link.classList.remove('active-link'));

      // Add the active-link class to the clicked link
      this.classList.add('active-link');
    });
  });