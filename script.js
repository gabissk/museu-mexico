/* =========================
   QUIZ
========================= */

const perguntas = [

    {
        pergunta: "Qual celebração é conhecida por homenagear a memória dos mortos no México?",
        opcoes: [
            "Cinco de Mayo",
            "Día de los Muertos",
            "Las Posadas",
            "Carnaval"
        ],
        resposta: 1
    },

    {
        pergunta: "Qual religião possui grande influência histórica e cultural no México?",
        opcoes: [
            "Catolicismo",
            "Budismo",
            "Hinduísmo",
            "Xintoísmo"
        ],
        resposta: 0
    },

    {
        pergunta: "Qual destes elementos está associado ao Día de los Muertos?",
        opcoes: [
            "Altares e oferendas",
            "Árvores de Natal",
            "Ovos de Páscoa",
            "Tapetes de neve"
        ],
        resposta: 0
    },

    {
        pergunta: "O México possui uma religião oficial?",
        opcoes: [
            "Sim, o catolicismo",
            "Sim, o protestantismo",
            "Não possui religião oficial",
            "Sim, as religiões indígenas"
        ],
        resposta: 2
    },

    {
        pergunta: "A cultura mexicana foi influenciada por quais grupos ao longo de sua história?",
        opcoes: [
            "Somente pelos espanhóis",
            "Somente pelos povos indígenas",
            "Povos indígenas, espanhóis e outras influências",
            "Somente por outros países americanos"
        ],
        resposta: 2
    }

];


let perguntaAtual = 0;
let pontuacao = 0;


/* INICIAR QUIZ */

function iniciarQuiz() {

    perguntaAtual = 0;
    pontuacao = 0;

    const resultado = document.getElementById("quiz-resultado");

    if (resultado) {
        resultado.innerHTML = "";
    }

    mostrarPergunta();
}


/* MOSTRAR PERGUNTA */

function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    const perguntaElemento =
        document.getElementById("quiz-pergunta");

    const opcoesElemento =
        document.getElementById("quiz-opcoes");

    const proximoBotao =
        document.getElementById("proxima-pergunta");

    const resultado =
        document.getElementById("quiz-resultado");


    perguntaElemento.innerHTML = `
        <h3>
            ${perguntaAtual + 1}. ${pergunta.pergunta}
        </h3>
    `;


    opcoesElemento.innerHTML = "";


    if (resultado) {
        resultado.innerHTML = "";
    }


    pergunta.opcoes.forEach(function(opcao, indice) {

        const botao = document.createElement("button");

        botao.innerText = opcao;

        botao.classList.add("opcao-quiz");


        botao.addEventListener("click", function() {

            responder(indice);

        });


        opcoesElemento.appendChild(botao);

    });


    proximoBotao.style.display = "none";
}


/* RESPONDER */

function responder(indice) {

    const pergunta = perguntas[perguntaAtual];

    const botoes =
        document.querySelectorAll(".opcao-quiz");

    const resultado =
        document.getElementById("quiz-resultado");


    /* Impede clicar em várias respostas */

    botoes.forEach(function(botao) {

        botao.disabled = true;

    });


    /* RESPOSTA CERTA */

    if (indice === pergunta.resposta) {

        pontuacao++;

        botoes[indice].classList.add("correta");

        resultado.innerHTML = `
            <div class="resultado-resposta resultado-correto">
                ✓ Você acertou!
            </div>
        `;

    }


    /* RESPOSTA ERRADA */

    else {

        botoes[indice].classList.add("errada");

        botoes[pergunta.resposta].classList.add("correta");


        resultado.innerHTML = `
            <div class="resultado-resposta resultado-errado">
                ✕ Você errou!
                <br>
                <span>
                    A resposta correta é:
                    <strong>
                        ${pergunta.opcoes[pergunta.resposta]}
                    </strong>
                </span>
            </div>
        `;

    }


    /* MOSTRA BOTÃO PRÓXIMA */

    document.getElementById("proxima-pergunta").style.display =
        "inline-block";

}


/* PRÓXIMA PERGUNTA */

function proximaPergunta() {

    perguntaAtual++;


    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    }

    else {

        mostrarResultado();

    }

}


/* RESULTADO FINAL */

function mostrarResultado() {

    document.getElementById("quiz-pergunta").innerHTML = "";

    document.getElementById("quiz-opcoes").innerHTML = "";

    document.getElementById("proxima-pergunta").style.display =
        "none";


    document.getElementById("quiz-resultado").innerHTML = `

        <div class="resultado-final">

            <h3>Quiz concluído!</h3>

            <p>
                Você acertou
                <strong>${pontuacao}</strong>
                de
                <strong>${perguntas.length}</strong>
                perguntas.
            </p>

            <button onclick="iniciarQuiz()">
                Fazer novamente
            </button>

        </div>

    `;

}


/* =========================
   CARDS DO MUSEU
========================= */

function mostrarConteudo(tipo) {

    const modal = document.getElementById("modal");

    const texto = document.getElementById("modal-texto");


    if (tipo === "mortos") {

        texto.innerHTML = `

            <p class="categoria">TRADIÇÃO</p>

            <h2>Día de los Muertos</h2>

            <p>
                O Día de los Muertos é uma das celebrações culturais
                mais conhecidas do México. A tradição homenageia a
                memória de pessoas que já morreram e valoriza a
                continuidade dos vínculos familiares.
            </p>

            <p>
                A celebração reúne influências de tradições indígenas
                e do catolicismo introduzido durante a colonização
                espanhola.
            </p>

            <p>
                Entre seus elementos estão os altares, flores,
                alimentos, fotografias e objetos relacionados às
                pessoas homenageadas.
            </p>

        `;

    }


    else if (tipo === "religiao") {

        texto.innerHTML = `

            <p class="categoria">RELIGIÃO</p>

            <h2>Religião no México</h2>

            <p>
                A religião possui papel importante na história e na
                cultura mexicana. O catolicismo foi introduzido pelos
                espanhóis durante o período colonial.
            </p>

            <p>
                Ao longo do tempo, diferentes tradições passaram a
                coexistir, contribuindo para manifestações religiosas
                e culturais características do país.
            </p>

            <p>
                A religiosidade também pode ser observada em festas,
                peregrinações, símbolos, arte e costumes familiares.
            </p>

        `;

    }


    else if (tipo === "povos") {

        texto.innerHTML = `

            <p class="categoria">CULTURA</p>

            <h2>Povos indígenas</h2>

            <p>
                O México apresenta grande diversidade de povos
                indígenas, que possuem diferentes línguas, tradições,
                costumes e formas de organização social.
            </p>

            <p>
                Esses povos possuem papel importante na preservação
                de conhecimentos e tradições que fazem parte da
                identidade cultural mexicana.
            </p>

            <p>
                Suas influências podem ser encontradas na arte,
                culinária, música, língua, religião e nas festividades
                do país.
            </p>

        `;

    }


    modal.classList.add("ativo");

}


/* FECHAR CAIXINHA */

function fecharConteudo() {

    const modal = document.getElementById("modal");

    modal.classList.remove("ativo");

}


/* FECHAR CLICANDO FORA */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("modal");

    if (event.target === modal) {

        fecharConteudo();

    }

});
