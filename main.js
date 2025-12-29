document.addEventListener("DOMContentLoaded", function() {
    const contenedor = document.getElementById('footer-sonic');
    if (contenedor) {
        contenedor.innerHTML = `
            <p>&copy; <span id="year"></span> SonicFest - Todos los derechos reservados.</p>
            <p>Optimizado para fans de Sonic</p>
        `;
        // Esto pone el año actual (2025, 2026, etc.) automáticamente
        document.getElementById('year').textContent = new Date().getFullYear();
    }
});
