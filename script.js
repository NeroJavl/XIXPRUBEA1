// Función para buscar texto dentro del contenido
document.getElementById('search-btn').addEventListener('click', function () {
    const query = document.getElementById('search-input').value.toLowerCase();
    const sections = document.querySelectorAll('main section');

    let found = false;

    sections.forEach(section => {
        const text = section.innerText.toLowerCase();
        if (text.includes(query)) {
            section.style.display = 'block'; // Mostrar sección si coincide
            found = true;
        } else {
            section.style.display = 'none'; // Ocultar sección si no coincide
        }
    });

    if (!found) {
        alert('No se encontró contenido relacionado con tu búsqueda.');
    }
});


