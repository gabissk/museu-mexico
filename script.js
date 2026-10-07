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


function iniciarQuiz() {

    perguntaAtual = 0;
    pontuacao = 0;

    document.getElementById("quiz-resultado").innerHTML = "";

    mostrarPergunta();

}


function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    const perguntaElemento =
        document.getElementById("quiz-pergunta");

    const opcoesElemento =
        document.getElementById("quiz-opcoes");

    perguntaElemento.innerHTML = `
        <h3>
            ${perguntaAtual + 1}. ${pergunta.pergunta}
        </h3>
    `;

    opcoesElemento.innerHTML = "";

    pergunta.opcoes.forEach((opcao, indice) => {

        const botao = document.createElement("button");

        botao.innerText = opcao;

        botao.classList.add("opcao-quiz");

        botao.onclick = function() {
            responder(indice);
        };

        opcoesElemento.appendChild(botao);

    });

    document.getElementById("proxima-pergunta").style.display = "none";

}


function responder(indice) {

    const pergunta = perguntas[perguntaAtual];

    const botoes =
        document.querySelectorAll(".opcao-quiz");

    botoes.forEach(botao => {
        botao.disabled = true;
    });

    if (indice === pergunta.resposta) {

        pontuacao++;

        botoes[indice].classList.add("correta");

    } else {

        botoes[indice].classList.add("errada");

        botoes[pergunta.resposta].classList.add("correta");

    }

    document.getElementById("proxima-pergunta").style.display = "inline-block";

}


function proximaPergunta() {

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    } else {

        mostrarResultado();

    }

}


function mostrarResultado() {

    document.getElementById("quiz-pergunta").innerHTML = "";

    document.getElementById("quiz-opcoes").innerHTML = "";

    document.getElementById("proxima-pergunta").style.display = "none";

    document.getElementById("quiz-resultado").innerHTML = `
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
    `;

}
