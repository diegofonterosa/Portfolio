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

    console.log('Popup:', popup);
    console.log('Accept Btn:', acceptBtn);
    console.log('Reject Btn:', rejectBtn);

    // Mostrar popup si cookies no han sido aceptadas
    if (popup && !localStorage.getItem('cookiesAccepted')) {
        popup.classList.add("show");
        console.log('Mostrando popup de cookies');
    }

    // Botón Aceptar
    if (acceptBtn) {
        acceptBtn.addEventListener("click", function(e) {
            e.preventDefault();
            console.log('Aceptando cookies');
            localStorage.setItem('cookiesAccepted', 'true');
            if (popup) {
                popup.classList.remove("show");
                console.log('Popup cerrado');
            }
        });
    }

    // Botón Rechazar
    if (rejectBtn) {
        rejectBtn.addEventListener("click", function(e) {
            e.preventDefault();
            console.log('Rechazando cookies');
            localStorage.setItem('cookiesAccepted', 'false');
            if (popup) {
                popup.classList.remove("show");
                console.log('Popup cerrado');
            }
        });
    }
});
