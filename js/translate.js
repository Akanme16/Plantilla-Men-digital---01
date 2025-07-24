/* =================================================================
    LÓGICA DE TRADUCCIÓN (VERSIÓN FINAL POR COOKIES) - translate.js
================================================================= */

document.addEventListener('DOMContentLoaded', function () {
    const LANG_COOKIE_NAME = 'googtrans';

    // Bloque 1: Inicializa el widget de Google cuando su script se carga.
    window.googleTranslateElementInit = function() {
        new google.translate.TranslateElement({
            pageLanguage: 'es',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        }, 'google_translate_element');
    };

    // Bloque 2: Define las funciones auxiliares.
    function changeLanguage(lang) {
        document.cookie = `${LANG_COOKIE_NAME}=/es/${lang}; path=/`;
        window.location.reload();
    }

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    function updateActiveLanguageButton() {
        const cookieValue = getCookie(LANG_COOKIE_NAME);
        let currentLang = 'es';
        if (cookieValue) {
            currentLang = cookieValue.split('/')[2];
        }
        const button = document.getElementById('language-btn-text');
        if (button) {
            button.textContent = currentLang.toUpperCase();
        }
    }

    // Bloque 3: Ejecución principal del script.
    const googleScript = document.createElement('script');
    googleScript.type = 'text/javascript';
    googleScript.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
    document.body.appendChild(googleScript);

    updateActiveLanguageButton();

    const dropdown = document.getElementById('language-dropdown');
    if (dropdown) {
        dropdown.addEventListener('click', function(e) {
            const dropdownItem = e.target.closest('.dropdown-item');
            if (dropdownItem) { 
                e.preventDefault();
                const lang = dropdownItem.getAttribute('data-lang');
                const currentLang = (getCookie(LANG_COOKIE_NAME) || '/es/es').split('/')[2];
                if (lang !== currentLang) {
                    changeLanguage(lang);
                }
            }
        });
    }

    const footer = document.querySelector('.footer-section');
    if (footer) {
        footer.classList.add('notranslate');
    }
});