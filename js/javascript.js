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