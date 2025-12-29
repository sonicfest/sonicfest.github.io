document.addEventListener("DOMContentLoaded", function () {
  // Mostrar la página suavemente cuando todo esté listo
  document.body.classList.add("loaded");

  // Cargar header
  fetch('../includes/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;

      // Actualizar título de la pestaña
      const pageTitle = document.querySelector('meta[name="page-title"]')?.content || 'Sonic Fest Argentina';
      document.title = pageTitle;
    });

  // Cargar footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    fetch('../includes/footer.html')
      .then(response => response.text())
      .then(data => {
        footerPlaceholder.innerHTML = data;
        const yearElement = document.getElementById('year');
        if (yearElement) yearElement.textContent = new Date().getFullYear();
      });
  }
});
