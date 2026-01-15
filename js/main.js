document.addEventListener("DOMContentLoaded", function () {
  // Mostrar la página suavemente
  document.body.classList.add("loaded");

  // --- CARGAR HEADER ---
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    fetch('../includes/header.html')
      .then(response => response.text())
      .then(data => {
        headerPlaceholder.innerHTML = data;
        const pageTitle = document.querySelector('meta[name="page-title"]')?.content || 'Sonic Fest Argentina';
        document.title = pageTitle;
      });
  }

  // --- CARGAR BOTONES DE ENLACE (Shortcuts) ---
  const botonesPlaceholder = document.getElementById('botones-placeholder');
  if (botonesPlaceholder) {
    fetch('../includes/botones-enlace.html')
      .then(response => response.text())
      .then(data => {
        botonesPlaceholder.innerHTML = data;
      })
      .catch(err => console.log("No se encontró el archivo de botones."));
  }

  // --- CARGAR DONACIONES ---
  const donacionesPlaceholder = document.getElementById('donaciones-placeholder');
  if (donacionesPlaceholder) {
    fetch('../includes/donaciones.html')
      .then(response => response.text())
      .then(data => {
        donacionesPlaceholder.innerHTML = data;
      })
      .catch(err => console.log("No se encontró el archivo de donaciones."));
  }

  // --- CARGAR FOOTER ---
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
