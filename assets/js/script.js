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
            window.location.href = '../../html/coleta.html';
        } else {
            window.location.href = '../../html/login_cadastro.html';
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
    const btn = document.getElementById("btn");

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
                btn.innerText = "Cadastrar";
            } else {
                loginParseiro.classList.remove("hidden");
                btn.innerText = "Logar";
            }
        } else {
            if (tipoSessao.checked) {
                cadastroConsumidor.classList.remove("hidden");
                btn.innerText = "Cadastrar";
            } else {
                loginConsumidor.classList.remove("hidden");
                btn.innerText = "Logar";
            }
        }
    }

    // Definir estados iniciais
    atualizarVisibilidade();

    // Adicionar event listeners para os checkboxes
    tipoUsuario.addEventListener("change", atualizarVisibilidade);
    tipoSessao.addEventListener("change", atualizarVisibilidade);
}

/* ========= Perfil ========= */
if (window.location.pathname.includes('perfil.html')) {
    function trocarPontos() {
        window.location.href = '../../html/descontos.html';
    }
}

/* ========= Quem Somos ========= */
/* animação de acender */
if (window.location.pathname.includes('quemSomos.html')) {
    /* selecionando os membros */
    const bruno = document.getElementById("bruno");
    const flavio = document.getElementById("flavio");
    const vinicius = document.getElementById("vinicius");
    /* selecionando os cabos para animação */
    const caboBruno = document.getElementById("caboBruno");
    const caboFlavio = document.getElementById("caboFlavio");
    const caboVinicius = document.getElementById("caboVinicius");
    /* selecionando logos do linkedin */
    const linkedinBruno = document.getElementById("linkedinBruno");
    const linkedinFlavio = document.getElementById("linkedinFlavio");
    const linkedinVinicius = document.getElementById("linkedinVinicius");
    /* selecionando logos github */
    const githubBruno = document.getElementById("githubBruno");
    const githubFlavio = document.getElementById("githubFlavio");
    const githubVinicius = document.getElementById("githubVinicius");

    bruno.addEventListener("mouseenter", () => {
        bruno.classList.add("aceso");
        caboBruno.src = '../assets/img/cabo_conectado.png';
        linkedinBruno.src = '../assets/img/linkedin_logo_membros_acesa.png';
        githubBruno.src = '../assets/img/github_logo_membros_acesa.png';
    });
    bruno.addEventListener("mouseleave", () => {
        bruno.classList.remove("aceso");
        caboBruno.src = '../assets/img/cabo_desconectado.png';
        linkedinBruno.src = '../assets/img/linkedin_icone_membros.png';
        githubBruno.src = '../assets/img/github_icone_membros.png';
    });
    flavio.addEventListener("mouseenter", () => {
        flavio.classList.add("aceso");
        caboFlavio.src = '../assets/img/cabo_conectado.png';
        linkedinFlavio.src = '../assets/img/linkedin_logo_membros_acesa.png';
        githubFlavio.src = '../assets/img/github_logo_membros_acesa.png';
    });
    flavio.addEventListener("mouseleave", () => {
        flavio.classList.remove("aceso");
        caboFlavio.src = '../assets/img/cabo_desconectado.png';
        linkedinFlavio.src = '../assets/img/linkedin_icone_membros.png';
        githubFlavio.src = '../assets/img/github_icone_membros.png';
    });
    vinicius.addEventListener("mouseenter", () => {
        vinicius.classList.add("aceso");
        caboVinicius.src = '../assets/img/cabo_conectado.png';
        linkedinVinicius.src = '../assets/img/linkedin_logo_membros_acesa.png';
        githubVinicius.src = '../assets/img/github_logo_membros_acesa.png';
    });
    vinicius.addEventListener("mouseleave", () => {
        vinicius.classList.remove("aceso");
        caboVinicius.src = '../assets/img/cabo_desconectado.png';
        linkedinVinicius.src = '../assets/img/linkedin_icone_membros.png';
        githubVinicius.src = '../assets/img/github_icone_membros.png';
    });
}