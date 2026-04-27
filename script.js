// Esperamos a que todo el HTML cargue
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Revisar si el usuario ya tenía el modo oscuro guardado de antes
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Si lo tenía, aplicamos la clase al body
    if (isDarkMode) {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️ Modo Claro';
    }

    // Escuchar el clic en el botón
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Comprobar si quedó activado o no
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'true');
            themeToggleBtn.textContent = '☀️ Modo Claro';
        } else {
            localStorage.setItem('darkMode', 'false');
            themeToggleBtn.textContent = '🌙 Modo Oscuro';
        }
    });
});
