document.addEventListener("DOMContentLoaded", function () {
  // Cargar header
  fetch('../includes/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
      // Actualizar título dinámico si querés (opcional)
      document.title = document.querySelector('meta[name="page-title"]')?.content || 'SONIC FEST';
    });

  // Cargar footer y poner año actual
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    fetch('../includes/footer.html')
      .then(response => response.text())
      .then(data => {
        footerPlaceholder.innerHTML = data;
        document.getElementById('year').textContent = new Date().getFullYear();
      });
  }

  // Función del acordeón (para todos los botones)
  window.toggleAccordion = function (button) {
    button.classList.toggle("active");
    const panel = button.nextElementSibling;
    panel.classList.toggle("open");
  };
});
