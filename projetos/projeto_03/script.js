const frases = [
    "Eu não preciso resolver tudo hoje; só preciso atravessar este momento.",
    "A dor que sinto agora pode mudar, mesmo que neste instante pareça impossível.",
    "Eu mereço ajuda, cuidado e a chance de descobrir como minha vida pode ficar.",
    "Posso adiar qualquer decisão definitiva e me dar mais um dia.",
    "Não preciso enfrentar isso sozinho; posso contar para alguém em quem confio.",
    "Meus sentimentos são reais, mas eles não precisam determinar o meu futuro.",
    "Hoje pode ser apenas um dia difícil, não o fim da minha história.",
    "Pedir ajuda não é fraqueza; é uma forma de me proteger.",
    "Mesmo sem enxergar uma saída agora, posso procurar alguém que me ajude a encontrá-la.",
    "Eu vou ficar por enquanto e buscar ajuda antes de tomar qualquer decisão."
]

const frase = document.querySelector (".frase")
const btnFrase = document.querySelector (".btnFrase")

function mostrarFrase () {
    let indice = Math.floor(Math.random() * frases.length)
    frase.textContent = frases [indice]
}

btnFrase.addEventListener("click",function(){
    mostrarFrase()
})