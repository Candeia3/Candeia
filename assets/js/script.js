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
    var erro = document.getElementById('erro');
    var manterLogado = document.getElementById('manter_logado');
    /* escolher formulário */
    const tipoUsuario = document.getElementById("consu_parse");
    const tipoSessao = document.getElementById("log_cad");
    // Função para atualizar a exibição com base no estado atual
    function atualizarVisibilidade() {
        // Seleção dos elementos
        const loginConsumidor = document.getElementById("login_consumidor");
        const loginParseiro = document.getElementById("login_parseiro");
        const cadastroConsumidor = document.getElementById("cadastro_consumidor");
        const cadastroParseiro = document.getElementById("cadastro_parseiro");
        const btnLogin = document.getElementById("btnLogin");
        const btnCadastro = document.getElementById("btnCadastro");
        // default
        loginConsumidor.classList.add("hidden");
        loginParseiro.classList.add("hidden");
        cadastroConsumidor.classList.add("hidden");
        cadastroParseiro.classList.add("hidden");
        btnLogin.classList.add("hidden");
        btnCadastro.classList.add("hidden");

        // Verificar os estados e exibir o formulário correto
        if (tipoUsuario.checked) {
            if (tipoSessao.checked) {
                cadastroParseiro.classList.remove("hidden");
                btnCadastro.classList.remove("hidden");
            } else {
                loginParseiro.classList.remove("hidden");
                btnLogin.classList.remove("hidden");
            }
        } else {
            if (tipoSessao.checked) {
                cadastroConsumidor.classList.remove("hidden");
                btnCadastro.classList.remove("hidden");
            } else {
                loginConsumidor.classList.remove("hidden");
                btnLogin.classList.remove("hidden");
            }
        }
    }
    // Definir estados iniciais
    atualizarVisibilidade();
    // Adicionar event listeners para os checkboxes
    tipoUsuario.addEventListener("change", atualizarVisibilidade);
    tipoSessao.addEventListener("change", atualizarVisibilidade);
    
    /* Validação de usuário */
    if (sessionStorage.getItem('msgErro') == '1') {
        erro.innerText = 'Realize o login para acessar o perfil';
    }
    function validarLogin() {
        if (tipoUsuario.checked) {
            var email = document.getElementById('email_login_parse');
            var senha = document.getElementById('senha_login_parse');
            var erroEmail = document.getElementById('erroemail_login_parse');
            var erroSenha = document.getElementById('errosenha_login_parse');
        }else {
            var email = document.getElementById('email_login_consu');
            var senha = document.getElementById('senha_login_consu');
            var erroEmail = document.getElementById('erroemail_login_consu');
            var erroSenha = document.getElementById('errosenha_login_consu');
        }
        sessionStorage.setItem('msgErro','0');
        erro.innerText = '';

        if (email.value == '') {
            erro.innerText = '';
            erroEmail.innerText = 'Campo "e-mail" obrigatório';
            email.focus();
        }else {
            erroEmail.innerText = ""
            if(senha.value == ''){
                erroSenha.innerText = 'Campo "Senha" obrigatório';
                senha.focus();
            }else {
                erroSenha.innerText = ""
                if(email.value == localStorage.getItem('email') && senha.value == localStorage.getItem('senha')) {
                    if(manterLogado.checked) {
                        localStorage.setItem('logado','true');
                    }else {
                        sessionStorage.setItem('logado','true');
                    }
                    window.location.href = 'coleta.html';
                }else {
                    erro.innerText = "Email e/ou senha incorretos!"
                    senha.focus();
                }
            }
        }
    }
    function validarCadastro() {
        if (tipoUsuario.checked) {
            var nome = document.getElementById('nome_parse');
            var email = document.getElementById('email_cadastro_parse');
            var cnpj_cpf = document.getElementById('cnpj');
            var senha = document.getElementById('senha_cadastro_parse');
            var confirmarSenha = document.getElementById('confirmarSenha_parse');
            var erroNome = document.getElementById('erronome_parse');
            var erroEmail = document.getElementById('erroemail_cadastro_parse');
            var erroCnpj_Cpf = document.getElementById('errocnpj');
            var erroSenha = document.getElementById('errosenha_cadastro_parse');
            var erroConfirmarSenha = document.getElementById('erroconfirmarSenha_parse');
        }else {
            var nome = document.getElementById('nome_consu');
            var email = document.getElementById('email_cadastro_consu');
            var cnpj_cpf = document.getElementById('cpf');
            var senha = document.getElementById('senha_cadastro_consu');
            var confirmarSenha = document.getElementById('confirmarSenha_consu');
            var erroNome = document.getElementById('erronome_consu');
            var erroEmail = document.getElementById('erroemail_cadastro_consu');
            var erroCnpj_Cpf = document.getElementById('errocpf');
            var erroSenha = document.getElementById('errosenha_cadastro_consu');
            var erroConfirmarSenha = document.getElementById('erroconfirmarSenha_consu');
        }
        
        sessionStorage.setItem('msgErro','0');
        erro.innerText = '';
        
        if (nome.value == ''){
            erro.innerText = '';
            erroNome.innerText = 'Campo "nome" obrigatório';
            nome.focus();
        }else {
            erroNome.innerText = '';
            if (email.value == ''){
                erroEmail.innerText = 'Campo "e-mail" obrigatório';
                email.focus();
            }else {
                erroEmail.innerText = "";
                if (cnpj_cpf.value == '') {
                    erroCnpj_Cpf.innerText = 'Campo "CPF/CNPJ" obrigatório';
                    cnpj_cpf.focus();
                } else {
                    erroCnpj_Cpf.innerText = "";
                    if(senha.value == ''){
                        erroSenha.innerText = 'Campo "Senha" obrigatório';
                        senha.focus();
                    }else {
                        erroSenha.innerText = "";
                        if(confirmarSenha.value == ''){
                            erroConfirmarSenha.innerText = 'Confirme sua senha ';
                            confirmarSenha.focus();
                        }else {
                            erroConfirmarSenha.innerText = "";
                            if (senha.value != confirmarSenha.value){
                                erroConfirmarSenha.innerText = 'Senhas não conferem';
                                confirmarSenha.focus();
                            }else {
                                erroConfirmarSenha.innerText = '';
                                if(manterLogado.checked){
                                    localStorage.setItem('logado','true');
                                }else {
                                    sessionStorage.setItem('logado','true');
                                }
                                localStorage.setItem('nome', nome.value);
                                localStorage.setItem('email', email.value);
                                localStorage.setItem('cnpj_cpf', cnpj_cpf.value);
                                localStorage.setItem('senha', senha.value);
                                window.location.href = 'coleta.html';
                            }
                        }
                    }
                }
            }
        }
    }
}

/* ========= Perfil ========= */
if (window.location.pathname.includes('perfil.html')) {
    if (localStorage.getItem('logado') != 'true' && sessionStorage.getItem('logado') != 'true') {
        window.location.href = 'login_cadastro.html';
        sessionStorage.setItem('msgErro', '1');
    }
    else {
        sessionStorage.setItem('msgErro', '0');
    }
    function trocarPontos() {
        window.location.href = '../../html/descontos.html';
    }
    var nomeUsuario = document.getElementById('nomeUsuario');
    nomeUsuario.innerText = localStorage.getItem('nome') || 'Nome do Usuário';

    function alterarNome() {
        var alterarNome = document.getElementById('alterarNome');
        var editar = document.getElementById('editarPerfil');

        editar.checked = false;
        localStorage.setItem('nome', alterarNome.value);
        nomeUsuario.innerText = localStorage.getItem('nome');
    }

    function sairConta() {
        localStorage.removeItem('nome');
        localStorage.removeItem('email');
        localStorage.removeItem('cnpj_cpf');
        localStorage.removeItem('senha');
        localStorage.removeItem('logado');
        sessionStorage.removeItem('logado');
        window.location.href = 'login_cadastro.html';
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