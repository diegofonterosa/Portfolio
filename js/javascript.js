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

//Política de cookies
const popup = document.getElementById("cookiePopup");
const acceptBtn = document.getElementById("acceptCookies");
const rejectBtn = document.getElementById("rejectCookies");

// formulario de contacto - Formspree se encarga del envío
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Formspree maneja el envío automáticamente
        console.log('Formulario enviado a través de Formspree');
    });
}

if(!localStorage.cookiesAccepted && popup){
    popup.classList.add("show");
}

acceptBtn && acceptBtn.addEventListener("click", function(){
    localStorage.cookiesAccepted = "true";
    popup.classList.remove("show");
    console.log("Cookies aceptadas");
});

rejectBtn && rejectBtn.addEventListener("click", function(){
    localStorage.cookiesAccepted = "false";
    popup.classList.remove("show");
    console.log("Cookies rechazadas");
});
