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

btnE.addEventListener ("click", function(){
    verificar()
})

function verificar (){
    let input = document.querySelector (".inputText")
    let inputValue = input.value

    
}