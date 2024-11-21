/* ========= Home ========= */
if (window.location.pathname.includes('index.html')) {
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
        } else {
            window.location.href = '../html/login_cadastro.html';
        }
    }
}


/* ========= LOGIN_CADASTO ========= */
if (window.location.pathname.includes('login_cadastro.html')) {
    /* escolher formulário */
    // Seleção dos elementos
    const tipoUsuario = document.getElementById("consu_parse");
    const tipoSessao = document.getElementById("log_cad");
    const loginConsumidor = document.getElementById("login_consumidor");
    const loginParseiro = document.getElementById("login_parseiro");
    const cadastroConsumidor = document.getElementById("cadastro_consumidor");
    const cadastroParseiro = document.getElementById("cadastro_parseiro");

    // Função para atualizar a exibição com base no estado atual
    function atualizarVisibilidade() {
        // default
        loginConsumidor.classList.add("hidden");
        loginParseiro.classList.add("hidden");
        cadastroConsumidor.classList.add("hidden");
        cadastroParseiro.classList.add("hidden");

        // Verificar os estados e exibir o formulário correto
        if (tipoUsuario.checked) {
            if (tipoSessao.checked) {
                cadastroParseiro.classList.remove("hidden");
            } else {
                loginParseiro.classList.remove("hidden");
            }
        } else {
            if (tipoSessao.checked) {
                cadastroConsumidor.classList.remove("hidden");
            } else {
                loginConsumidor.classList.remove("hidden");
            }
        }
    }

    // Definir estados iniciais
    atualizarVisibilidade();

    // Adicionar event listeners para os checkboxes
    tipoUsuario.addEventListener("change", atualizarVisibilidade);
    tipoSessao.addEventListener("change", atualizarVisibilidade);
}
