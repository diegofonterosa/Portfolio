// Menú hamburguesa
const hamburguer = document.getElementById('hamburguer');
const navMenu = document.getElementById('nav-menu');

hamburguer.addEventListener('click', () => {
    const expanded = hamburguer.getAttribute('aria-expanded') === 'true';
    hamburguer.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('active');
    });

hamburguer.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        hamburguer.click();
    }
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active')
    })
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Política de cookies - Mejorado
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById("cookiePopup");
    const acceptBtn = document.getElementById("acceptCookies");
    const rejectBtn = document.getElementById("rejectCookies");

    // Safety: ensure popup exists
    if (!popup) return;

    // Mostrar popup si cookies no han sido aceptadas
    if (!localStorage.getItem('cookiesAccepted')) {
        popup.classList.add("show");
        // ensure visible
        popup.style.display = 'flex';
    }

    // Helper to hide popup (class + inline style fallback)
    function hidePopup() {
        popup.classList.remove('show');
        try { popup.style.display = 'none'; } catch (e) {}
    }

    // Attach listeners with fallback checks
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function (e) {
            e && e.preventDefault();
            localStorage.setItem('cookiesAccepted', 'true');
            hidePopup();
        });
    }

    if (rejectBtn) {
        rejectBtn.addEventListener('click', function (e) {
            e && e.preventDefault();
            localStorage.setItem('cookiesAccepted', 'false');
            hidePopup();
        });
    }

    // Fallback: click outside popup to close (small UX improvement)
    document.addEventListener('click', function (e) {
        if (!popup.classList.contains('show')) return;
        const rect = popup.getBoundingClientRect();
        const within = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
        if (!within) hidePopup();
    });
});

// Formulario de contacto
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const contactStatus = document.getElementById('contactStatus');

    if (!contactForm || !contactStatus) return;

    function encodeFormData(form) {
        return new URLSearchParams(new FormData(form)).toString();
    }

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

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encodeFormData(contactForm)
            });

            if (!response.ok) {
                throw new Error('Error al enviar el formulario');
            }

            contactStatus.textContent = 'Mensaje enviado correctamente. Gracias por contactar.';
            contactStatus.style.color = '#00ff41';
            contactForm.reset();
        } catch (error) {
            contactStatus.textContent = 'No se pudo enviar ahora. Inténtalo de nuevo en unos minutos.';
            contactStatus.style.color = '#ff6b6b';
        }
    });
});
