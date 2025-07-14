document.addEventListener('DOMContentLoaded', function () {
    const allTriggers = document.querySelectorAll('[data-bs-toggle="tab"]');
    const allPanes = document.querySelectorAll('.tab-pane');
    const tabContent = document.querySelector('#menuTabContent'); // Contenedor de productos

    allTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();

            // Ocultar todos los paneles activos
            allPanes.forEach(pane => {
                pane.classList.remove('show', 'active');
            });

            // Desactivar todos los botones/tabs activos
            allTriggers.forEach(t => {
                t.classList.remove('active');
            });

            // Activar el panel correspondiente al botón clicado
            const targetId = this.getAttribute('data-bs-target');
            const targetPane = document.querySelector(targetId);
            if (targetPane) {
                targetPane.classList.add('show', 'active');
            }

            // Activar el botón actual
            this.classList.add('active');

            // Hacer scroll al inicio del área de productos
            if (tabContent) {
                tabContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});