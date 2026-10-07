function iniciarQuiz() {
    alert("O quiz estará disponível em breve! 🇲🇽");
}


function mostrarConteudo(tipo) {

    const modal = document.getElementById("modal");
    const texto = document.getElementById("modal-texto");

    if (tipo === "mortos") {

        texto.innerHTML = `
            <h2>Día de los Muertos</h2>

            <p>
                O Día de los Muertos é uma das celebrações culturais
                mais conhecidas do México. A tradição homenageia a
                memória de pessoas que já morreram e valoriza a
                continuidade dos vínculos familiares.
            </p>

            <p>
                A celebração possui influências de tradições indígenas
                e do catolicismo introduzido durante a colonização
                espanhola.
            </p>

            <p>
                Entre seus elementos estão os altares, flores,
                alimentos, fotografias e outros objetos relacionados
                às pessoas homenageadas.
            </p>
        `;

    }


    if (tipo === "religiao") {

        texto.innerHTML = `
            <h2>Religião no México</h2>

            <p>
                A religião possui papel importante na história e na
                cultura mexicana. O catolicismo foi introduzido pelos
                espanhóis durante o período colonial.
            </p>

            <p>
                Ao longo do tempo, elementos de diferentes tradições
                passaram a coexistir, contribuindo para manifestações
                religiosas e culturais características do país.
            </p>

            <p>
                A religiosidade também pode ser observada em festas,
                peregrinações, símbolos, arte e costumes familiares.
            </p>
        `;

    }


    if (tipo === "povos") {

        texto.innerHTML = `
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


function fecharConteudo() {

    const modal = document.getElementById("modal");

    modal.classList.remove("ativo");

}


window.addEventListener("click", function(event) {

    const modal = document.getElementById("modal");

    if (event.target === modal) {
        fecharConteudo();
    }

});
