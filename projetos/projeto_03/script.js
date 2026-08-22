const frases = [
    "bom dia",
    "boa tarde.",
    "boa noite.",
    "certo.",
    "errado.",
    "nao.",
    "sim.",
    "porque.",
    "claro.",
    "que nao."
]

const frase = document.querySelector (".frase")
const btnFrase = document.querySelector (".btnFrase")

function mostrarFrase () {
    //math.floor: transforma meu numero em inteiro  l3
    //Math.random: me da um numero real entre 0 e 1     l1
    //frases.length:  conta quantas frases tem (tenho 10 frases)  l2
    // o num aleatorio é * pelas 10 frases e depois vira um numero inteiro
    let indice = Math.floor(Math.random() * frases.length)

    //frases [indice]: pega frase correspondente ao num q foi sorteado
    //frase.textContent: ta mudando a frase do html pela q foi sorteada
    frase.textContent = frases [indice]
}

btnFrase.addEventListener("click",function(){
    mostrarFrase()
})