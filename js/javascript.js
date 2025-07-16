// Menú hamburguesa
const hamburguer = document.getElementById('hamburguer');
const navMenu = document.getElementById('nav-menu');

hamburguer.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    })

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
const rejectBtn = document.getElementById("rejectCookies")

if(!localStorage.cookiesAccepted){
    popup.classList.add("show");
}

acceptBtn.addEventListener("click", function(){
    localStorage.cookiesAccepted = "true";
    popup.classList.remove("show");
    console.log("Cookies aceptadas")
});

rejectBtnBtn.addEventListener("click", function(){
    localStorage.cookiesAccepted = "false";
    popup.classList.remove("show");
    console.log("Cookies rechazadas")
});