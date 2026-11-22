// Menú hamburguesa
const hamburguer = document.getElementById('hamburguer');
const navMenu = document.getElementById('nav-menu');

function setMenu(open) {
    navMenu.classList.toggle('active', open);
    hamburguer.setAttribute('aria-expanded', String(open));
    hamburguer.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
}

if (hamburguer && navMenu) {
    hamburguer.addEventListener('click', () => {
        setMenu(!navMenu.classList.contains('active'));
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => setMenu(false));
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setMenu(false);
    });
}

// Formulario de contacto (Netlify Forms)
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const contactStatus = document.getElementById('contactStatus');

    if (!contactForm || !contactStatus) return;

    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        if (!contactForm.checkValidity()) {
            contactStatus.textContent = 'Completa todos los campos con datos válidos.';
            contactStatus.style.color = '#ff6b6b';
            contactForm.reportValidity();
            return;
        }

        contactStatus.textContent = 'Enviando mensaje...';
        contactStatus.style.color = '#00d4ff';

        const successUrl = contactForm.getAttribute('data-success-url') || '/success.html';

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(new FormData(contactForm)).toString()
            });

            if (!response.ok) throw new Error('HTTP ' + response.status);

            window.location.href = successUrl;
        } catch (error) {
            // Si falla el envío por fetch, se usa el envío nativo del formulario
            contactForm.submit();
        }
    });
});
