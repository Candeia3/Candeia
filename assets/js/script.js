/* ========= Home ========= */
/* ANIMAÇÃO */
const button = document.querySelector("#home button");
const rotacao = document.getElementById("rotacao");
const gota = document.getElementById("gota_animada");

button.addEventListener("mouseenter", () => {
    rotacao.style.transform = "rotate(-20deg)";
    gota.classList.add("hidden");
    button.classList.add("hover");  
});

button.addEventListener("mouseleave", () => {
    rotacao.style.transform = "rotate(0deg)";
    gota.classList.remove("hidden");  
    button.classList.remove("hover"); 
});

/* Mesma animação para mobile (não tem mouse) */
rotacao.addEventListener("click", () => {
    rotacao.style.transform = "rotate(-20deg)";
    gota.classList.add("hidden");
    button.classList.add("hover");  
    setTimeout(() => {
        rotacao.style.transform = "rotate(0deg)";
        gota.classList.remove("hidden");
        button.classList.remove("hover");  
    }, 3000); // 3000ms = 3 segundos
});

function primeiraVez() {
    if (localStorage.getItem("logado") == 'true' || sessionStorage.getItem("logado") == 'true') {
        window.location.href = '../html/coleta.html';
    }
    else{
        window.location.href = '../html/login_cadastro.html';
    }
}