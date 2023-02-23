const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const peças = {
    "braços": {
        "força": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5,
    },
    "blindagem": {
        "força": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20,
    },
    "nucleos": {
        "força": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4,
    },
    "pernas": {
        "força": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43,
    },
    "foguetes": {
        "força": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2,
    }
}

controle.forEach ( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peça);
    })
})

function manipulaDados (operaçao, controle) {
    const peça = controle.querySelector("[data-contador]");

    if (operaçao === "-") {
        peça.value = parseInt(peça.value) - 1;
    } else {
        peça.value = parseInt(peça.value) + 1;
    }
}

function atualizaEstatisticas(peça) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + peças[peça] [elemento.dataset.estatistica];
    })
}

