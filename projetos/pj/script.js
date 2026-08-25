function termoFinal () {
    const termo = document.querySelector (".termo")

    for (let c = 1; c <= 6; c++) {
        for (let i = 1; i <= 5; i++) {
            let quadrado = document.createElement ("div")

            quadrado.classList.add ("quadrado")

            termo.appendChild (quadrado)
        }
    }   
}

termoFinal()

const senhaCorreta = "jogos"
let btnE = document.querySelector (".btnEnviar")
let inputText = document.querySelector (".inputText")
inputText.maxLength = 5
let posicaoLetra = 0

/*let numTentativaAtual = 0
const contadorTexto = document.querySelector(".num-tentativas")
const btnReiniciar = document.querySelector(".btnReiniciar") */

btnE.addEventListener ("click", function(){
    verificar()
})

inputText.addEventListener ("keydown", function (event) {
    if (event.key === "Enter")
        verificar()
})

function verificar (){
    let input = document.querySelector (".inputText")
    let inputValue = input.value

    let quadrado = document.querySelectorAll(".quadrado")

    for (let i = 0; i < 5; i++){
        let num = quadrado[posicaoLetra]
        num.classList.remove("certo", "erro", "meioCerto")
        num.textContent = inputValue[i]

        if (inputValue[i] == senhaCorreta[i]){
            num.classList.add("certo")
        } 

        else if (
            inputValue[i] == senhaCorreta[0] || 
            inputValue[i] == senhaCorreta[1] || 
            inputValue[i] == senhaCorreta[2] || 
            inputValue[i] == senhaCorreta[3] || 
            inputValue[i] == senhaCorreta[4]
        ) {
            num.classList.add("meioCerto")
        }

        else {
            num.classList.add("erro")
        }
        posicaoLetra++
    }

    //{o bagulho do certo ou errado fica aqui}
/*  // ADICIONADO: Soma 1 tentativa e mostra na tela (Ex: 1/6)
    numTentativaAtual++
    contadorTexto.textContent = numTentativaAtual + "/6"

    input.value = ""*/
}

/* ADICIONADO: Função de reiniciar usando a mesma lógica de loop do seu curso
btnReiniciar.addEventListener("click", function() {
    posicaoLetra = 0
    numTentativaAtual = 0
    contadorTexto.textContent = "0/6"
    inputText.value = ""
    
    let quadrado = document.querySelectorAll(".quadrado")
    
    // Loop tradicional para limpar o texto e as classes de todos os 30 quadrados
    for (let i = 0; i < 30; i++) {
        quadrado[i].textContent = ""
        quadrado[i].classList.remove("certo", "erro", "meioCerto")
    }
})*/

const btnFechar = document.querySelector(".btnFechar");

// 2. Cria as pontes para os modais que guardam as imagens
const modalVitoria = document.querySelector("#modalVitoria");
const modalDerrota = document.querySelector("#modalDerrota");

// 3. Quando o usuário clicar no "X", executa a função de fechar
btnFechar.addEventListener("click", function() {
    
    // Remove a classe "is-active", fazendo a imagem sumir da tela
    modalVitoria.classList.remove("is-active");
    modalDerrota.classList.remove("is-active");
});